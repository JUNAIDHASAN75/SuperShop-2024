import { ImBin } from "react-icons/im";
import useGetHook from "../../../Hook/useGetHook";

const AllUsers = () => {
    const [allData] = useGetHook('/users');
    console.log(allData)
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
                                <td>{item?.email} $</td>
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
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;