import Swal from "sweetalert2";
import useAuth from "../../../Hook/useAuth";
import useAxiosSecure from "../../../Hook/useAxiosSecure";
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../../../Hook/useCart";


const MenuCart = ({ item }) => {
    const [,refetch]=useCart()
    const {user} = useAuth();
    const axiosS = useAxiosSecure();
    const location = useLocation();
    const navigate = useNavigate();
    const {_id,name, image, details, price} = item;
    const handleAddToCart = ()=>{
        if(user && user?.email){
            const cartItem ={
                menuId : _id,
                email:user?.email,
                name,
                image,
                price,
                details
            };
            axiosS.post('/carts',cartItem)
            .then(res=>{
                if(res?.data?.insertedId){
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: `${name} Add To Cart`,
                        showConfirmButton: false,
                        timer: 1500
                      });
                      refetch();
                }

            })
        }else{
            Swal.fire({
                title: "You Are Not Logged In",
                text: "Please Login to add to the cart",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Please Go To Login"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', {state:{from: location}})
                }
            });
        }
    }
    return (

            <div className="card card-compact rounded-md w-full bg-white shadow-xl">
                <img className="h-full " src={image} alt="Shoes" />
                <div className="card-body bg-white">
                    <h2 className="card-title text-[#3fd43f]">{name}</h2>
                    <p className="text-orange-400">{price} $</p>
                    <p className="text-orange-400">{details}</p>
                    <div className="card-actions justify-end">
                        
                        <button onClick={handleAddToCart} className="text-white px-3 py-3  rounded-lg hover:bg-orange-400 bg-[#3fd43f]">Add To Cart</button>
                    </div>
                </div>
            </div>
    );
};

export default MenuCart;