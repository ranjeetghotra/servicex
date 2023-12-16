const { AppointmentModel } = require('../models');
const  { sendMail } = require('./../services/email')
const {STATUS} = require('./../core/types')
module.exports = {
    list: async (req, res) => {
        console.log('list called');
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        const offset = (page - 1) * limit;

        try {
            const { count, rows } = await AppointmentModel.findAndCountAll({
                limit,
                offset,
                order: [['createdAt', 'DESC']],
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
    book: async (req, res) => {
        const { appointmentDate = "2023-11-27T05:22:23", customerName, customerEmail, customerPhone,serviceId } = req.body;
        
        try {
            // Validate date format
            if (false && !isValidDate(appointmentDate)) {
                return res.status(400).json({ message: 'Invalid date format. Use YYYY-MM-DDTHH:mm:ss.' });
            }

            const newAppointment = await AppointmentModel.create({
                appointmentDate,
                customerName,
                customerEmail,
                customerPhone,
                status: STATUS.REQUESTED, // Default status,
                serviceId
            });
            res.status(201).json({ message: 'Appointment booked successfully', appointment: newAppointment });
            //sending mail after sending response 
            const result =   await sendMail(customerEmail,"testing",`<h1>Hii! ${customerName}, Your appointment has been booked successfully !</h1>`)
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    },
    updateStatus: async (req, res) => {
        const { appointmentId, status } = req.body;
        console.log({
            appointmentId,status
        })

        try {
            const updatedAppointment = await AppointmentModel.update(
                { status },
                { where: { appointmentId }, returning: true }
            );
            const appointment = await AppointmentModel.findByPk(appointmentId)
            console.log("appointment",appointment.dataValues)
            const {customerEmail,customerName} = appointment.dataValues
               
            if (updatedAppointment[0] === 0) {
                return res.status(404).json({ message: 'Appointment not found' });
            }

            res.json({ message: 'Appointment status updated successfully', appointment: updatedAppointment[1][0] });
            switch(status){
                case "confirmed":{
                    console.log("confirmed")
                    const result =   await sendMail(customerEmail,"testing",`<h1>Hii! ${customerName}, Your appointment has been confirmed successfully !</h1>`)
                    break;
                }
                case "completed":{

                    break;
                }
                case "canceled":{

                    break;
                }
            }
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    },
    countRequested: async (req, res) => {
   
        try {
            const count  = await AppointmentModel.count({
                where:{
                    status:STATUS.REQUESTED
                }
            })

            res.json({
                count
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    },
};

const isValidDate = (dateString) => {
    const regex = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}$/;
    return regex.test(dateString);
};