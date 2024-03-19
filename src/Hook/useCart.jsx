import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";


const useCart = () => {
    const {user} = useAuth();
    const axiosS = useAxiosSecure();
    const {data: cart=[], refetch}=useQuery({
        queryKey:['cart', user?.email],
        queryFn: async ()=> {
            const res = await axiosS.get(`/carts?email=${user?.email}`)
            return res.data
        }
    })
    return[cart,refetch]
};

export default useCart;