import axios from "axios";


export const axiosS = axios.create({
    baseURL:'http://localhost:5000'
});  
const useAxiosSecure = () => {
    return axiosS
};

export default useAxiosSecure;