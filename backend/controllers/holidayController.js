const { Op } = require('sequelize');
const { HolidayModel } = require('../models');
module.exports = {
    get: async (req, res) => {
        const { holidayId } = req.params;

        try {
            const holiday = await HolidayModel.findOne({
                where: {
                    holidayId
                }
            });

            if (!holiday) {
                return res.status(404).json({ message: 'holiday not found' });
            }

            return res.json({ holiday });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    },
    list: async (req, res) => {
        try {
            const currentDate = new Date();
            const holidays = await HolidayModel.findAll(
                {
                    attributes: ['holidayId', 'holidayDate', 'holidayTitle'],
                    where: {
                        holidayDate: {
                            [Op.gte]: currentDate,
                        },
                    },
                    order: [['holidayDate', 'ASC']],
                }
            );

            res.json({
                data: holidays,
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    },
    add: async (req, res) => {
        const { holidayDate, holidayTitle } = req.body;
        console.log("holidayDate", holidayDate)

        try {
            // Validate date format
            if (!isValidDate(holidayDate)) {
                return res.status(400).json({ message: 'Invalid date format. Use YYYY-MM-DD' });
            }

            const newHoliday = await HolidayModel.create({
                holidayDate,
                holidayTitle
            });
            res.status(201).json({ message: 'Holiday Added  successfully', holiday: newHoliday });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    },
    remove: async (req, res) => {
        const { id } = req.params;
        try {
            const existingHoliday = await HolidayModel.findByPk(id);

            if (!existingHoliday) {
                return res.status(404).json({ message: 'Holiday not found' });
            }

            await existingHoliday.destroy();

            res.json({ message: 'Holiday deleted successfully' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    },

};

const isValidDate = (dateString) => {
    const regex = /^\d{4}-\d{2}-\d{2}$/;
    return regex.test(dateString);
};
