import axios from '../utils/axios';

const authService = {
  login: async (username, password) => {
    try {
      const response = await axios.post(`/admin/login`, {
        username,
        password,
      });
      return response.data;
    } catch (error) {
        console.log(error.response?.data?.message ?? 'Login failed')
      throw new Error(error.response?.data?.message ?? 'Login failed');
    }
  },
};

export default authService;
