const { ServiceModel } = require('../models');
const { uploadBase64 } = require('../services/fileService')
const { convertToSlug } = require('../utils')

module.exports = {
    list: async (req, res) => {
        try {
            const rows = await ServiceModel.findAll({
                order: [['serviceImage', 'ASC']],
            });

            res.json({
                data: rows,
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    },
    create: async (req, res) => {
        const { name: serviceName, description: serviceDescription, image } = req.body;

        try {
            let serviceImage
            if (image) {
                serviceImage = await uploadBase64(image)
            }
            const serviceSlug = convertToSlug(serviceName)
            const newAppointment = await ServiceModel.create({
                serviceName,
                serviceDescription,
                serviceSlug,
                serviceImage,
            });

            res.status(201).json({ message: 'Service created successfully', appointment: newAppointment });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    },
};