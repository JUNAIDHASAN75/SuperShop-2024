import useAuth from "../../../Hook/useAuth";


const UserProfile = () => {
    const { user } = useAuth();
    console.log(user)
    return (
        <div className="mb-12 h-full bg-gradient-to-tr text-black from-slate-100 to-slate-50">
            <div className="my-6 h-3/4">
                <div className="hero  bg-">
                    <div className="hero-content flex-col items-start lg:flex-row">
                        <img  src={user?.photoURL} className="max-w-sm rounded-lg shadow-2xl" />
                        <div>
                            <h1 className="text-3xl font-bold">Name: {user?.displayName}</h1>
                            <p className="py-6 "> <span className="font-semibold">Email:</span >{user?.email}</p>
                            <button className="btn btn-primary">Get Started</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;