import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";


const useGetHook = (endpoints) => {
    const axiosS = useAxiosSecure();
    const { data: allData = [], refetch } = useQuery({
        queryKey: [endpoints],
        queryFn: async () => {
            const response = await axiosS.get(endpoints);
            return response.data
        }
    })
    return [allData, refetch]
};

export default useGetHook;