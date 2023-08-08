import { createBrowserRouter } from "react-router-dom";
import { Introduction } from "../components";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Introduction />,
    },
]);
