const { AppointmentModel } = require('../models');

const pad = (num, size) => {
    let s = num + '';
    while (s.length < size) s = '0' + s;
    return s;
};

const generateInvoiceNumber = async () => {
    console.log('AppointmentModel', AppointmentModel)
    const today = new Date();
    const year = today.getFullYear().toString().slice(-2);
    const month = pad(today.getMonth() + 1, 2); // Months are 0-indexed
    const lastInvoice = await AppointmentModel.findOne({
        order: [['createdAt', 'DESC']],
    });

    let serialNumber = '0001';

    if (lastInvoice) {
        const lastInvoiceNumber = lastInvoice.invoiceNumber;
        const lastMonth = lastInvoiceNumber.slice(2, 4);

        if (lastMonth === month) {
            const lastSerialNumber = lastInvoiceNumber.slice(-4);
            serialNumber = pad(parseInt(lastSerialNumber) + 1, 4);
        }
    }

    return `${year}${month}${serialNumber}`;
};

module.exports = generateInvoiceNumber;
