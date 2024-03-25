import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../../../Hook/useAuth";
import logo from '../../../../assets/images/authentication.gif'


const Login = () => {
    const {LoggedIn} = useAuth();
    const location = useLocation();
    const from = location?.state?.from?.pathname || '/';
    const navigate = useNavigate();
    const handleLogin = e =>{
        e.preventDefault()
        const form = e.target;
        const email = form?.email?.value;
        const password = form?.password?.value;
        LoggedIn(email, password)
        .then(result =>{
            const user = result.user;
            console.log(user)
            navigate(from, {replace:true})
        })
    }
    return (
        <div>
            <div className="hero min-h-screen bg-[#f8f9fc]">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <img src={logo} alt="" />
                    </div>
                    <div className="card shrink-0 w-full max-w-sm border  bg-[#f8f9fc] p-3">
                    <h1 className="text-xl text-center font-bold text-slate-900">Login</h1>
                        <form onSubmit={handleLogin} className="card-body">
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
                                    {/* <a href="#" className="label-text-alt link link-hover">Forgot password?</a> */}
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn bg-gradient-to-r from-violet-900 to-teal-300 text-white" type="submit" value="Login" />
                            </div>
                        </form>
                        <div className="text-center text-violet-800">
                            Are You New ? <span className="font-semibold text-teal-400"> <Link to="/signup">Please SignUp</Link></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;