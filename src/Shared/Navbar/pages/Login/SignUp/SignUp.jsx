import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../../../../Hook/useAuth";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../../../Hook/useAxiosSecure";
import logo from '../../../../../assets/images/authentication.gif'


const SignUp = () => {
    const axiosS = useAxiosSecure();
    const {createUser, updateUserProfile} = useAuth();
    const navigate = useNavigate()
    const handleSignUp = e=>{
        e.preventDefault();
        const from = e.target;
        const email = from?.email?.value;
        const name = from?.name?.value;
        const photo = from?.photoURL?.value;
        const password = from?.password?.value;
        const userCollection = {email, name, photo}
        createUser(email, password)
        .then(result =>{
            const user = result?.user;
            console.log(user)
            updateUserProfile(name, photo)
            .then(() =>{
                axiosS.post('/users',userCollection)
                .then(res=>{
                    if(res.data.insertedId){
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: "Successfully Sign Up",
                            showConfirmButton: false,
                            timer: 1500
                          });
                          navigate('/')
                    }
                    console.log(res)
                })
                
            })
        })

    }
    return (
        <div>
            <div className="hero min-h-screen bg-[#f8f9fc]">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <img src={logo} alt="" />
                    </div>
                    <div className="card shrink-0 w-full max-w-sm border bg-[#f8f9fc] p-3">
                    <h1 className="text-xl font-bold text-slate-900 text-center">Sign Up</h1>
                        <form onSubmit={handleSignUp} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="Name" className="input input-bordered bg-white" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">PhotoURL</span>
                                </label>
                                <input type="text" name="photoURL" placeholder="photoURL" className="input input-bordered bg-white" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered bg-white" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered bg-white" required />
                                <label className="label">
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn bg-gradient-to-r from-violet-900 to-teal-300 text-white" type="submit" value="Sign Up" />
                            </div>
                        </form>
                        <div className="text-center text-violet-800">
                            Already signIn ? <span className="font-semibold text-teal-400"> <Link to="/login">Please Go To Login</Link></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;