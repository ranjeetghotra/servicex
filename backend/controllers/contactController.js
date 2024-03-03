const { ContactModel } = require('../models');
const { verifyCaptchaToken } = require('../services/recaptchaService');
const { sendMail } = require('./../services/email')
module.exports = {
    list: async (req, res) => {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        const offset = (page - 1) * limit;

        try {
            const { count, rows } = await ContactModel.findAndCountAll({
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
    add: async (req, res) => {
        const { customerName, customerEmail, subject, message, token } = req.body;

        try {
            const isValid = await verifyCaptchaToken(token)
            if (!isValid) {
                throw Error('Invalid reCaptcha token')
            }

            const newAppointment = await ContactModel.create({
                customerEmail,
                customerName,
                subject,
                message
            });
            res.status(201).json({ message: 'Contact  Registered  successfully', appointment: newAppointment });
            //sending mail after sending response 
            const result = await sendMail(customerEmail, "testing", `<h1>Hii! ${customerName}, Your request for contact  has been register successfully !</h1>`)
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    },
    count: async (req, res) => {

        try {
            // Validate date format
            // if (false && !isValidDate(appointmentDate)) {
            //     return res.status(400).json({ message: 'Invalid date format. Use YYYY-MM-DDTHH:mm:ss.' });
            // }

            const count = await ContactModel.count({

            })

            res.status(201).json({ count });

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