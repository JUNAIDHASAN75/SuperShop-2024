import SubHeading from "../../../CustomCompo/SubHeading";
import useMenu from "../../../Hook/useMenu";
import AdminMenuCart from "./AdminMenuCart";


const AdminMenu = () => {
    const [menu, isLoading, refetch] = useMenu();



    if (isLoading) {
        return <p>Loading ....</p>
    }

    return (
        <div className="mb-6">
            <SubHeading title={"UMART PRODUCTS"} subTitle={"We Value for you"}></SubHeading>
            
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
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            menu?.map((item, index) => <AdminMenuCart
                                key={item._id}
                                item={item}
                                index={index}
                                refetch={refetch}
                            ></AdminMenuCart>)
                        }
                        {/* row 1 */}

                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default AdminMenu;