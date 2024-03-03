const axios = require('axios');

const verifyCaptchaToken = async (token) => {
    try {
        const response = await axios.post('https://www.google.com/recaptcha/api/siteverify', null, {
            params: {
                secret: process.env.RECAPTCHA_SECRET,
                response: token
            }
        });

        const { success, score } = response.data;

        if (success && score >= 0.5) {
            return true; // Verification successful
        } else {
            return false; // Verification failed
        }
    } catch (error) {
        console.error('Error verifying reCAPTCHA:', error);
        return false; // Error occurred during verification
    }
};

module.exports = { verifyCaptchaToken };
