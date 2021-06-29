import Home from 'pages/home';
import SignUp from 'pages/signup';
import NotFound from 'pages/404';
export const routes = [
  {path: '/', exact: true, component: Home, isProtected: false},
  {path: '/register', exact: true, component: SignUp, isProtected: false},
  {component: NotFound},
];
