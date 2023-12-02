import axios from '../utils/axios';

const appointmentService = {
  list: async (params) => {
    try {
      const response = await axios.post(`/admin/appointment`, params);
      return response.data;
    } catch (error) {
        console.log(error.response?.data?.message ?? 'Login failed')
      throw new Error(error.response?.data?.message ?? 'Login failed');
    }
  },
};

export default appointmentService;
