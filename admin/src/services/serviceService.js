import axios from '../utils/axios';

const serviceService = {
  list: async (params) => {
    try {
      const response = await axios.get(`/admin/service`, { params });
      return response.data;
    } catch (error) {
      console.log(error.response?.data?.message)
      throw new Error(error.response?.data?.message);
    }
  },
  create: async (data) => {
    try {
      const response = await axios.post(`/admin/service`, data);
      return response.data;
    } catch (error) {
      console.log(error.response?.data?.message)
      throw new Error(error.response?.data?.message);
    }
  },
};

export default serviceService;
