import { useContext } from "react";
import { AuthContex } from "../Providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import UseAdmin from "../hooks/UseAdmin";

const AdminRoute = ({children}) => {
    const location = useLocation();
    const [isAdmin,isAdminLoading]=UseAdmin();
    const {user,loading} = useContext(AuthContex);
    if(loading ||isAdminLoading){
        return <div>Loading..................</div>
    }
    if(user && isAdmin){
        return children
    }
    return <Navigate to='/login' state={{from: location}} replace={true}></Navigate>
};

export default AdminRoute;