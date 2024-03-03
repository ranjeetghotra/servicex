const { DateTime } = require('luxon');
const { AppointmentModel, ServiceModel } = require('../models');
const { sendMail } = require('./../services/email')
const generateInvoiceNumber = require('../services/generateInvoiceNumber');
const { STATUS } = require('./../core/types')
const { filterObject } = require('../utils')

module.exports = {
    list: async (req, res) => {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        const offset = (page - 1) * limit;

        try {
            const { count, rows } = await AppointmentModel.findAndCountAll({
                limit,
                offset,
                order: [['createdAt', 'DESC']],
                include: [{
                    model: ServiceModel, as: "service"
                }]
            });

            const totalPages = Math.ceil(count / limit);

            const pagination = {
                currentPage: page,
                totalPages,
                totalItems: count,
                hasNextPage: page < totalPages,
                hasPrevPage: page > 1,
            };
            res.json({
                ...pagination,
                data: rows,
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    },
    get: async (req, res) => {
        const { id } = req.params;

        try {
            const appointment = await AppointmentModel.findByPk(id);

            if (!appointment) {
                return res.status(404).json({ message: 'Appointment not found' });
            }

            return res.json({ appointment });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    },
    book: async (req, res) => {
        const { appointmentDate, customerName, customerEmail, customerPhone, serviceId, token } = req.body;
        const timestamp = DateTime.fromISO(appointmentDate, { zone: "Pacific/Auckland" }).toUTC();

        try {
            const isValid = await verifyCaptchaToken(token)
            if (!isValid) {
                throw Error('Invalid reCaptcha token')
            }

            const newAppointment = await AppointmentModel.create({
                appointmentDate: timestamp,
                customerName,
                customerEmail,
                customerPhone,
                invoiceNumber: await generateInvoiceNumber(),
                status: STATUS.REQUESTED, // Default status,
                serviceId
            });
            res.status(201).json({ message: 'Appointment booked successfully', appointment: newAppointment });
            //sending mail after sending response 
            // const result =   await sendMail(customerEmail,"testing",`<h1>Hii! ${customerName}, Your appointment has been booked successfully !</h1>`)
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    },
    update: async (req, res) => {
        const { id: appointmentId } = req.params;
        const data = filterObject(req.body, ['customerAddress', 'customerEmail', 'customerName', 'customerPhone', 'orderItems']);
        try {
            await AppointmentModel.update(data, { where: { appointmentId } });
            res.json({ message: 'Appointment updated' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    },
    updateStatus: async (req, res) => {
        const { appointmentId, status } = req.body;

        try {
            const updatedAppointment = await AppointmentModel.update(
                { status },
                { where: { appointmentId }, returning: true }
            );
            const appointment = await AppointmentModel.findByPk(appointmentId)
            const { customerEmail, customerName } = appointment.dataValues

            res.json({ message: 'Appointment status updated successfully' });
            await sendMail(customerEmail, `Appointment ${status}`, `Hii! ${customerName}, Your appointment has been ${status}!`)
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    },
    // countRequested: async (req, res) => {

    //     try {
    //         const count = await AppointmentModel.count({
    //             where: {
    //                 status: STATUS.REQUESTED
    //             }
    //         })

    //         res.json({
    //             count
    //         });
    //     } catch (error) {
    //         console.error(error);
    //         res.status(500).json({ message: 'Internal Server Error' });
    //     }
    // },
};

const isValidDate = (dateString) => {
    const regex = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}$/;
    return regex.test(dateString);
};