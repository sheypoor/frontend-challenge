import { useEffect, useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { RouteModel } from '../models/route'
import routes from "../routes/routes";
import useStore from '../state-management/store'
import { Store } from "../models/store";
import UserModel from "../models/user";
import ROUTES from '../enums/routes'

const useAuth = () => {
    const token: string | null = useStore<string | null>((store: Store) => store.token)
    const user: UserModel | null = useStore<UserModel | null>((store: Store) => store.user)
    const isLogin: boolean = useMemo(() => (token !== null && user !== null), [token, user])
    const authLessPath: Array<string> = routes.filter((route: RouteModel) => { return !route.needAuth }).map((route: RouteModel) => route.path)
    const { pathname } = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        if (isLogin && authLessPath.includes(pathname)) {
            navigate(ROUTES.HOME);
            return
        }
        if (!isLogin && !authLessPath.includes(pathname)) {
            navigate(ROUTES.REGISTER_AND_LOGIN);
            return;
        }
    }, [pathname, isLogin, authLessPath]);

    return;
}

export default useAuth;