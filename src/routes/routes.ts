// custom
import { ROUTES } from "../enums/routes";
import { RouteModel } from "../models/route";
import RegisterAndLogin from "../pages/register-and-login/register-and-login";
import Home from "../pages/home/home";
import NotFound from "../pages/not-found/not-found";

const routes: Array<RouteModel> = [
    {
        name: 'home',
        path: ROUTES.HOME,
        needAuth: true,
        cmp: Home,
    },
    {
        name: 'not-found',
        path: ROUTES.NOT_FOUND,
        needAuth: true,
        cmp: NotFound,
    },
    {
        name: 'register-and-login',
        path: ROUTES.REGISTER_AND_LOGIN,
        needAuth: false,
        cmp: RegisterAndLogin,
    }
]

export default routes;