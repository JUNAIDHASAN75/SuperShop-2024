import axios from "axios";


const axiosS = axios.create({
    baseURL:`http://localhost:5000`
})  
const useAxiosSecure = () => {
    return axiosS
};

export default useAxiosSecure;