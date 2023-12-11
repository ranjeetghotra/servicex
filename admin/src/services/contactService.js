import axios from '../utils/axios';

const contactService = {
  list: async (params) => {
    try {
      const response = await axios.get(`/contact`, { params });
      return response.data;
    } catch (error) {
      console.log(error)
      throw new Error(error.response?.data?.message);
    }
  }
};

export default contactService;
