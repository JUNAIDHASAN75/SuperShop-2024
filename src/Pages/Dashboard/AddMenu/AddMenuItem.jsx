import { useForm } from "react-hook-form";
import SubHeading from "../../../CustomCompo/SubHeading";
import useAxiosSecure from "../../../Hook/useAxiosSecure";
import Swal from "sweetalert2";
import useMenu from "../../../Hook/useMenu";


const AddMenuItem = () => {
    const [,,refetch]= useMenu()
    const axiosS = useAxiosSecure();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        axiosS.post('/menues',data)
        .then(res=>{
            if(res.status === 200){
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${data?.name} is Add to Menu item`,
                    showConfirmButton: false,
                    timer: 1500
                  });
                  refetch();
                  reset();
            }
        }
            )
        
    };
    console.log(errors);
    return (
        <div className="my-6">
            <SubHeading title={"Add New Product"} subTitle={"WE COLLECT OUR BEST PRODUCT FOR YOU"}></SubHeading>
            <div>
                <form className="bg-white md:space-y-6" onSubmit={handleSubmit(onSubmit)}>

                    <div className="md:flex gap-12 items-start justify-between">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text text-slate-800 font-semibold">Name</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="name"{...register("name", { required: true })} placeholder="Name" className="input bg-white rounded-none border-slate-700 border-opacity-35 input-bordered w-full" />
                            </label>
                            {/* <span>
                                { errors.name && <span className="text-red-500">Name is required</span>}
                            </span> */}
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text text-slate-800 font-semibold">Price</span>
                            </label>
                            <input type="number" placeholder="Price"{...register("price", { required: true })} className="input input-bordered bg-white rounded-none border-slate-700 border-opacity-35" />
                        </div>
                    </div>
                    <div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text text-slate-800 font-semibold">PhotoURL</span>
                            </label>
                            <input type="text" name="image" placeholder="PhotoURl" {...register("image", { required: true })} className="input input-bordered rounded-none border-slate-700 border-opacity-35 bg-white" />
                        </div>
                    </div>
                    <div className="md:flex gap-12 items-start justify-center">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text text-slate-800 font-semibold">Category</span>
                            </label>

                            <select className="input input-bordered bg-white rounded-none border-slate-700 border-opacity-35" {...register("category", { required: true })}>
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

                            <input type="text" name="details" placeholder="details" {...register("details", { required: true })} className="input input-bordered bg-white rounded-none border-slate-700 border-opacity-35" />
                        </div>
                    </div>
                    <div className="form-control my-6">

                        <input className="btn mb-12 bg-gradient-to-r from-slate-900 to-orange-50  text-white" type="submit" />
                    </div>


                </form>
            </div>
        </div>
    );
};

export default AddMenuItem;