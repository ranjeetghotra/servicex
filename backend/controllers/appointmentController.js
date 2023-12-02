const { AppointmentModel } = require('../models');

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
        const { appointmentDate, customerName, customerEmail, customerPhone } = req.body;

        try {
            // Validate date format
            if (!isValidDate(appointmentDate)) {
                return res.status(400).json({ message: 'Invalid date format. Use YYYY-MM-DDTHH:mm:ss.' });
            }

            const newAppointment = await AppointmentModel.create({
                appointmentDate,
                customerName,
                customerEmail,
                customerPhone,
                status: 'requested', // Default status
            });

            res.status(201).json({ message: 'Appointment booked successfully', appointment: newAppointment });
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

            if (updatedAppointment[0] === 0) {
                return res.status(404).json({ message: 'Appointment not found' });
            }

            res.json({ message: 'Appointment status updated successfully', appointment: updatedAppointment[1][0] });
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