import { useParams } from "react-router-dom";
import useAxiosSecure from "../../../Hook/useAxiosSecure";
import SubHeading from "../../../CustomCompo/SubHeading";
import { useEffect, useState } from "react";
import useMenu from "../../../Hook/useMenu";
import Swal from "sweetalert2";

const AdminMenuUpdate = () => {
    const [data, setData] = useState({});
    const [,,refetch] = useMenu()

    const {id} = useParams();
    // console.log(id);
    const axiosS = useAxiosSecure();
    useEffect(()=>{
        axiosS.get(`menues/${id}`)
    .then(res=>{
        setData(res.data)
        // console.log(res.data)
    })
    },[axiosS, id])
    
    const handleUpdate = (e)=>{
        e.preventDefault();
        const from = e.target;
        const name = from.name.value;
        const price = from.price.value;
        const image = from.image.value;
        const category = from.category.value;
        const details = from.details.value;
        const menuItem = {name, price, image,category,details,};
        axiosS.put(`/menues/${data._id}`,menuItem)
        .then(res=>{
            console.log(res.data)
            if(res.data.modifiedCount >0){
                Swal.fire({
                    title: `${data?.name}`,
                    text: `${data.name} is updated successfully!`,
                    imageUrl: `${data?.image}`,
                    imageWidth: 400,
                    imageHeight: 200,
                    imageAlt: "Custom image"
                  });
                  refetch();
                  
            }else{
                Swal.fire({
                    title: `${data?.name}`,
                    text: `${data.name} is not updated !`,
                    imageUrl: `${data?.image}`,
                    imageWidth: 400,
                    imageHeight: 200,
                    imageAlt: "Custom image"
                  });
            }
        })
        
        
    }
    return (
        <div className="my-6">
            <SubHeading title={"Edit menu product"}subTitle={"we value for you"}></SubHeading>
            <form onSubmit={handleUpdate} className="bg-white md:space-y-6">

                    <div className="md:flex gap-12 items-start justify-between">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text text-slate-800 font-semibold">Name</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="name"defaultValue={data.name} placeholder="Name" className="input bg-white rounded-none border-slate-700 border-opacity-35 input-bordered w-full" />
                            </label>
                            {/* <span>
                                { errors.name && <span className="text-red-500">Name is required</span>}
                            </span> */}
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text text-slate-800 font-semibold">Price</span>
                            </label>
                            <input type="number" name="price" placeholder="Price"defaultValue={data.price} className="input input-bordered bg-white rounded-none border-slate-700 border-opacity-35" />
                        </div>
                    </div>
                    <div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text text-slate-800 font-semibold">PhotoURL</span>
                            </label>
                            <input type="text" name="image" placeholder="PhotoURl" defaultValue={data.image} className="input input-bordered rounded-none border-slate-700 border-opacity-35 bg-white" />
                        </div>
                    </div>
                    <div className="md:flex gap-12 items-start justify-center">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text text-slate-800 font-semibold">Category</span>
                            </label>

                            <select name="category" value={data.category} className="input input-bordered bg-white rounded-none border-slate-700 border-opacity-35">
                                {/* <option value={data.category}></option>  */}
                                <option value="Fruits">Fruits</option>
                                <option value="Vegetables">Vegetables</option>
                                <option value="Meats">Meats</option>
                                <option value="Desserts">Desserts</option>
                                <option value="BeautyProducts">BeautyProducts</option>
                                <option value="Biscuits">Biscuits</option>
                                <option value="Drinks">Drinks</option>
                                <option value="Toys">Toys</option>
                            </select>
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text text-slate-800 font-semibold">Details</span>
                            </label>

                            <input type="text" name="details" placeholder="details" defaultValue={data.details} className="input input-bordered bg-white rounded-none border-slate-700 border-opacity-35" />
                        </div>
                    </div>
                    <div className="form-control my-6">

                        <input className="btn mb-12 bg-gradient-to-r from-slate-900 to-orange-50  text-white" type="submit" />
                    </div>


                </form>
        </div>
    );
};

export default AdminMenuUpdate;