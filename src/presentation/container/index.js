import { createBrowserRouter, RouterProvider } from "react-router-dom";
import FirstStepForm from "../view/firstStepForm";
import SecondStepForm from "../view/secondStepForm";

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
