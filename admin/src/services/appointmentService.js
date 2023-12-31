import axios from '../utils/axios';

const appointmentService = {
  list: async (params) => {
    try {
      const response = await axios.get(`/appointment`, { params });
      return response.data;
    } catch (error) {
      console.log(error)
      throw new Error(error.response?.data?.message);
    }
  },
  get: async (id) => {
    try {
      const response = await axios.get(`/appointment/${id}`);
      return response.data;
    } catch (error) {
      console.log(error)
      throw new Error(error.response?.data?.message);
    }
  },
  update: async (id, params) => {
    try {
      const response = await axios.put(`/appointment/${id}`, params)
      return response.data;

    } catch (error) {
      console.log(error)
      throw new Error(error.response?.data?.message);
    }
  },
  updateStatus: async (params) => {
    try {
      const response = await axios.put('/appointment', {
        appointmentId: params.appointmentId, status: params.status
      })
      return response.data;

    } catch (error) {
      console.log(error)
      throw new Error(error.response?.data?.message);
    }
  },
  countRequested: async () => {
    try {
      const response = await axios.get('/appointment/countRequested');
      return response.data;

    } catch (error) {
      console.log(error)
      throw new Error(error.response?.data?.message);
    }
  }
};

export default appointmentService;
