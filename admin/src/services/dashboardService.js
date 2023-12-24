import axios from '../utils/axios';

const dashboardService = {
    get: async () => {
        try {
            const response = await axios.get(`/admin/dashboard`);
            return response.data;
        } catch (error) {
            console.log(error)
            throw new Error(error.response?.data?.message);
        }
    },
};

export default dashboardService;
