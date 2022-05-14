import { Navigate, Outlet } from "react-router-dom";
import { UseAuthContext } from "../context/auth";
export function RestrictedRoutes({children})
{
    const {isLogin} = UseAuthContext()

        return isLogin?<Navigate replace to="/homepage"/>:<Outlet/>
}