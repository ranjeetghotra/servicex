import axios from '../utils/axios';

const holidayService = {
  list: async (params) => {
    try {
      const response = await axios.get(`/holiday/`, { params });
      return response.data;
    } catch (error) {
      console.log(error.response?.data?.message)
      throw new Error(error.response?.data?.message);
    }
  },
  get: async (id) => {
    try {
      const response = await axios.get(`/holiday/${id}`);
      return response.data;
    } catch (error) {
      console.log(error.response?.data?.message)
      throw new Error(error.response?.data?.message);
    }
  },
  add: async (data) => {
    try {
      const response = await axios.post(`/holiday/`, data);
      return response.data;
    } catch (error) {
      console.log(error.response?.data?.message)
      throw new Error(error.response?.data?.message);
    }
  },
  delete: async (id) => {
    try {
      const response = await axios.delete(`/holiday/${id}`);
      return response.data;
    } catch (error) {
      console.log(error.response?.data?.message)
      throw new Error(error.response?.data?.message);
    }
  },

};


export default holidayService;
