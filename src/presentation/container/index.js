import { createBrowserRouter, RouterProvider } from "react-router-dom";
import FirstStepForm from "../view/firstStepForm";
import SecondStepForm from "../view/secondStepForm";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "./index.scss";

const router = createBrowserRouter([
  {
    path: "/",
    element: <FirstStepForm />,
  },
  {
    path: "/second-step",
    element: <SecondStepForm />,
  },
]);

const Container = () => {
  return <RouterProvider router={router} />;
};

export default Container;
