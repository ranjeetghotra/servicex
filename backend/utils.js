module.exports = {
    generateOTP: (length) => {
        const digits = '0123456789';
        let otp = '';
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * digits.length);
            otp += digits[randomIndex];
        }
        return otp;
    },
    convertToSlug: (Text) => {
        return Text.toLowerCase()
            .replace(/[^\w\s-]/g, '')
            .replace(/\s+/g, '-')
            .replace(/-+/g, '-')
            .trim();;
    }
}