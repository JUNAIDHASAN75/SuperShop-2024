import { ImBin } from "react-icons/im";
import useGetHook from "../../../Hook/useGetHook";
import useAxiosSecure from "../../../Hook/useAxiosSecure";
import { FaUserCog } from "react-icons/fa";
import Swal from "sweetalert2";

const AllUsers = () => {
    const [allData,refetch] = useGetHook('/users');
    const axiosS = useAxiosSecure();
    console.log(allData);
    const handleMakeAdmin =(item)=>{
        axiosS.patch(`/users/admin/${item._id}`)
        .then(res=>{
            if(res.data.modifiedCount > 0){
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: `${item.name} is now admin `,
                    showConfirmButton: false,
                    timer: 1500
                });
                refetch();
            }
        })
    }
    return (
        <div>
            <div><h2 className="font-sans font-semibold text-3xl text-black my-6">Total Users: {allData?.length} Person</h2></div>
            <div className="overflow-x-auto">
                <table className="table mb-12">
                    {/* head */}
                    <thead className="bg-orange-400 text-white">
                        <tr>
                            <th>
                                #
                            </th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allData?.map((item, index) => <tr key={item._id}

                            >
                                <th>
                                    {index + 1}
                                </th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask  w-12 rounded-md">
                                                <img src={item?.photo} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {item?.name}
                                </td>
                                <td>{item?.email}</td>
                                <td>{item.role === 'admin' ? 'Admin' :
                                        <button  onClick={() => handleMakeAdmin(item)} className="btn bg-transparent  rounded-full border-0 hover:bg-transparent text-green-600 text-3xl tooltip" data-tip="Make Admin?"><FaUserCog></FaUserCog></button>
                                    }</td>
                                <th>
                                    <button className="text-3xl text-red-700"> <ImBin></ImBin> </button>
                                </th>
                            </tr>)
                        }
                        {/* row 1 */}

                    </tbody>
                    <tfoot>
                        <tr className="bg-slate-600 text-white">
                            <th></th>
                            <th></th>
                            <th>Total Users</th>
                            <th>{allData.length} Person</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;