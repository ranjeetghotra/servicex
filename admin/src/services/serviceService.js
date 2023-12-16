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
  get: async (id) => {
    try {
      const response = await axios.get(`/admin/service/${id}`);
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
  update: async (id, data) => {
    try {
      const response = await axios.put(`/admin/service/${id}`, data);
      return response.data;
    } catch (error) {
      console.log(error.response?.data?.message)
      throw new Error(error.response?.data?.message);
    }
  },
  delete: async (id) => {
    try {
      const response = await axios.delete(`/admin/service/${id}`);
      return response.data;
    } catch (error) {
      console.log(error.response?.data?.message)
      throw new Error(error.response?.data?.message);
    }
  },
  count: async () => {
    try {
      const response = await axios.get(`/admin/service/count`);
      return response.data;
    } catch (error) {
      console.log(error.response?.data?.message)
      throw new Error(error.response?.data?.message);
    }
  },
};


export default serviceService;
