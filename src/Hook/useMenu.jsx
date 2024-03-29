import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";


const useMenu = () => {
    const axiosS = useAxiosSecure();
    const {data: menu=[],isLoading, refetch} = useQuery({
        queryKey: ['menuCollection'],
        queryFn:async()=>{
           const response  = await axiosS.get('/menues')
            return response.data
        }
    })
    return [menu,isLoading,refetch]
};

export default useMenu;