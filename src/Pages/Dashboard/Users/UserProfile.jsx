import useAuth from "../../../Hook/useAuth";


const UserProfile = () => {
    const { user } = useAuth();
    console.log(user)
    return (
        <div className="mb-12 h-full bg-gradient-to-tr text-black from-slate-600 to-slate-100">
            <div className="my-6 h-3/4">
                <div className="hero  bg-">
                    <div className="hero-content flex-col lg:flex-row">
                        <img src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg" className="max-w-sm rounded-lg shadow-2xl" />
                        <div>
                            <h1 className="text-5xl font-bold">Box Office News!</h1>
                            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                            <button className="btn btn-primary">Get Started</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;