import { useContext } from "react";
import { AuthContex } from "../Providers/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const UseAdmin =()=>{

    const {user} = useContext(AuthContex);
    const [axiosSecure] = useAxiosSecure();
    const {data: isAdmin,isLoading:isAdminLoading} = useQuery({
        queryKey:['isAdmin',user?.email],
        queryFn: async ()=>{
            const res = await axiosSecure(`/users/admin/${user?.email}`);
            console.log('Is Admin Response',res);
            return res.data.admin;
        }
    })

    return [isAdmin,isAdminLoading];
}
export default UseAdmin;