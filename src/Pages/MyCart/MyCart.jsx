import Swal from "sweetalert2";
import useAxiosSecure from "../../Hook/useAxiosSecure";
import useCart from "../../Hook/useCart";
import { ImBin } from "react-icons/im";
import SubHeading from "../../CustomCompo/SubHeading";

const MyCart = () => {
    const [cart, refetch] = useCart();
    const totalPrice = cart.reduce((total, item) => total + parseFloat(item.price), 0).toFixed(2);

    console.log(totalPrice)
    const axiosS = useAxiosSecure();
    const handleCartDelete = (item) => {
        // console.log(id)
        Swal.fire({
            title: "Are you sure?",
            text: "You want to remove it !",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Remove It!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosS.delete(`/carts/${item}`)
                    .then(res => {
                        if (res.status === 200) {
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Cart Item has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }
    return (
        <div className="mb-6">
            <SubHeading title={"selected umart products"} subTitle={"We Value for you"}></SubHeading>
            <div className="flex justify-between my-6 ">
                <div><h2 className="font-sans font-semibold text-xl md:text-3xl text-black ">Total Items: {cart?.length}</h2></div>
                <div><h2 className="font-sans font-semibold text-xl md:text-3xl text-black ">Total Price: {totalPrice} $</h2></div>
            </div>
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
                            cart?.map((item, index) => <tr key={item._id}

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
                                <th>
                                    <button onClick={() => handleCartDelete(item._id)} className="text-3xl text-red-700"> <ImBin></ImBin> </button>
                                </th>
                            </tr>)
                        }
                        {/* row 1 */}

                    </tbody>
                    <tfoot>
                        <tr className="bg-slate-600 text-white">
                            <th></th>
                            <th></th>
                            <th>Total Price</th>
                            <th>{totalPrice} $</th>
                            <th></th>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    );
};

export default MyCart;