import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hook/useAuth";


const PrivateRoute = ({children}) => {
    const location = useLocation();
    const {user, loading} = useAuth();
    if(loading){
        return <div>
        <span className="loading loading-ring loading-xs text-error"></span>
        <span className="loading loading-ring loading-sm text-error"></span>
        <span className="loading loading-ring loading-md text-error"></span>
        <span className="loading loading-ring loading-lg text-error"></span></div>
    }
    if(user){
        return children
    }
    return <Navigate to="/login" state={{from:location}} replace></Navigate>
};

export default PrivateRoute;