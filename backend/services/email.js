const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    // service: 'gmail',
    host: process.env.EMAIL_HOST,
    port: 465,
    secure: true,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
    },

});

module.exports = {
    sendMail: async (to, subject, html) => {
        try {
            const mailOptions = {
                from: `"${process.env.SENDER_NAME}" <${process.env.SENDER_EMAIL}>`,
                to,
                subject,
                html,
            };
            return await transporter.sendMail(mailOptions);
        } catch (error) {
            console.error('Error:', error);
        }
    }
}


