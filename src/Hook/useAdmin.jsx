import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";


const useAdmin = () => {
    const {user} = useAuth();
    const axiosS = useAxiosSecure();
    const {data:isAdmin, isLoading} = useQuery({
        queryKey:['isAdmin', user?.email],
        queryFn: async ()=>{
            const res = await axiosS.get(`/users/admin/${user?.email}`);
            return res.data.admin;
        }
    })
    return [isAdmin, isLoading]
};

export default useAdmin;