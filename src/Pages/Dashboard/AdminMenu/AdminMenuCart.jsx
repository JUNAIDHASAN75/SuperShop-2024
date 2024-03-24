import { ImBin } from "react-icons/im";
import { CiEdit } from "react-icons/ci";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hook/useAxiosSecure";
import { Link } from "react-router-dom";


const AdminMenuCart = ({item, index, refetch}) => {
    
    const axiosS = useAxiosSecure();
    const handleCartDelete = (id) =>{
        Swal.fire({
            title: "Are you sure?",
            text: "You want to delete it?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
                axiosS.delete(`/menues/${id}`)
                .then(res=>{
                    if(res.status === 200){
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                          });
                          refetch();
                    }
                })
             
            }
          });
    }
    return (
        <tr

        >
            <th>
                {index + 1}
            </th>
            <td>
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="mask  w-12 rounded-md">
                            <img src={item?.image} alt="" />
                        </div>
                    </div>
                </div>
            </td>
            <td>
                {item?.name}
            </td>
            <td>{item?.price} $</td>
            <th className="flex items-center gap-4">
                <Link to={`/dashboard/admin/menu/${item._id}/update`}  className="text-3xl text-white rounded-xl bg-green-500"><CiEdit></CiEdit></Link>
                <button onClick={() => handleCartDelete(item._id)} className="text-3xl text-red-700"> <ImBin></ImBin> </button>
            </th>
        </tr>
    );
};

export default AdminMenuCart;