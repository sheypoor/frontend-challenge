import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import RouteModel from './models/route'
import routes from './routes/routes'
import useAuth from "./hooks/auth-hook";
import Layout from "./layout/layout";


const App = () => {

    useAuth()

    return (
        <Layout>
            <Routes>
                {
                    routes.map((route: RouteModel) => (
                        <Route
                            key={route.path}
                            path={route.path}
                            element={route.cmp()}
                        />
                    ))
                }
            </Routes>
            <ToastContainer />
        </Layout>
    )
}

export default App