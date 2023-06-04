import { useContext } from "react"
import { AuthContex } from "../Providers/AuthProvider"
import { useQuery } from "@tanstack/react-query";


const UseCart = ()=>{
    const {user} = useContext(AuthContex);
    const token = localStorage.getItem('access-token');
// you need to add token on Fetch Headers.
    const {refetch,data: cart=[]} = useQuery({
        queryKey: ['cart',user?.email],
        queryFn: async ()=>{
            const res = await fetch(`http://localhost:5000/carts?email=${user.email}`,{headers:{
                authorization: `bearer ${token}`
            }})
            return res.json();
        }
        
    })
    return [cart,refetch]
}
export default UseCart;