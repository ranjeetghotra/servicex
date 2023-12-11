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
  updateStatus:async(params)=>{
    try{
      const response  = await axios.put('/appointment',{
        appointmentId:params.appointmentId,status:params.status
      })
      return response.data;

    }catch(error){
      console.log(error)
      throw new Error(error.response?.data?.message);
    }
  }
};

export default appointmentService;
