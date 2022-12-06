import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
]);

const Container = () => {
  return <RouterProvider router={router} />;
};

export default Container;
