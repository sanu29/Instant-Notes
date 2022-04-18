import { Navigate, Outlet } from "react-router-dom";
import { UseAuthContext } from "../context/auth";
export function PrivateRoute({children})
{
    const {isLogin} = UseAuthContext()
        return isLogin?<Outlet/>:<Navigate replace to="/login"/>
}