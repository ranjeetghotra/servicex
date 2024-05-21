const { ServiceModel } = require('../models');
const { uploadBase64, deleteFileIfExists } = require('../services/fileService')
const { convertToSlug } = require('../utils')

module.exports = {
    list: async (req, res) => {
        try {
            const rows = await ServiceModel.findAll({
                order: [['createdAt', 'ASC']]
            });

            res.json({
                data: rows,
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    },
    get: async (req, res) => {
        const { slug } = req.params;

        try {
            const service = await ServiceModel.findOne({
                where: {
                    serviceSlug: slug
                }
            });

            if (!service) {
                return res.status(404).json({ message: 'Service not found' });
            }

            return res.json({ service });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    },
    getById: async (req, res) => {
        const { id } = req.params;

        try {
            const service = await ServiceModel.findOne({
                where: {
                    serviceId: id
                }
            });

            if (!service) {
                return res.status(404).json({ message: 'Service not found' });
            }

            return res.json({ service });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    },
    create: async (req, res) => {
        const { name: serviceName, description: serviceDescription, highlights, image } = req.body;

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
                highlights,
            });

            res.status(201).json({ message: 'Service created successfully', appointment: newAppointment });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    },
    update: async (req, res) => {
        const { id } = req.params;
        const { name: serviceName, description: serviceDescription, highlights, image } = req.body;

        try {
            const existingService = await ServiceModel.findByPk(id);

            if (!existingService) {
                return res.status(404).json({ error: 'Service not found' });
            }

            existingService.serviceName = serviceName;
            existingService.serviceDescription = serviceDescription;
            existingService.highlights = highlights ?? [];

            if (image) {
                await deleteFileIfExists(existingService.serviceImage);
                existingService.serviceImage = await uploadBase64(image);
            }
            await existingService.save();

            res.json({ message: 'Service updated successfully', service: existingService });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: error?.message ?? 'Internal Server Error' });
        }
    },
    updateCarousel: async (req, res) => {
        const { id } = req.params;
        const { onCarousel } = req.body;
        try {
            const existingService = await ServiceModel.findByPk(id);

            if (!existingService) {
                return res.status(404).json({ error: 'Service not found' });
            }

            existingService.onCarousel = onCarousel;

            await existingService.save();

            res.json({ message: 'Added on Carousel successfully', service: existingService });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    },
    remove: async (req, res) => {
        const { id } = req.params;

        try {
            const existingService = await ServiceModel.findByPk(id);

            if (!existingService) {
                return res.status(404).json({ message: 'Service not found' });
            }

            if (existingService.serviceImage) {
                await deleteFileIfExists(existingService.serviceImage);
            }

            await existingService.destroy();

            res.json({ message: 'Service deleted successfully' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    },
    countTotal: async (req, res) => {
        try {
            const count = await ServiceModel.count({
            })
            res.json({ count });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    },
};