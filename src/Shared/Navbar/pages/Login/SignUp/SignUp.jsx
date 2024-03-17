import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../../../../Hook/useAuth";
import Swal from "sweetalert2";


const SignUp = () => {
    const {createUser, updateUserProfile} = useAuth();
    const navigate = useNavigate()
    const handleSignUp = e=>{
        e.preventDefault();
        const from = e.target;
        const email = from?.email?.value;
        const name = from?.name?.value;
        const photo = from?.photoURL?.value;
        const password = from?.password?.value;
        createUser(email, password)
        .then(result =>{
            const user = result?.user;
            console.log(user)
            updateUserProfile(name, photo)
            .then(() =>{
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your work has been saved",
                    showConfirmButton: false,
                    timer: 1500
                  });
                  navigate('/')
            })
        })

    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Sign Up now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 p-3">
                        <form onSubmit={handleSignUp} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">PhotoURL</span>
                                </label>
                                <input type="text" name="photoURL" placeholder="photoURL" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Sign Up" />
                            </div>
                        </form>
                        <div className="text-center">
                            Already signIn ? <span className="font-semibold"> <Link to="/login">Please Go To Login</Link></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;