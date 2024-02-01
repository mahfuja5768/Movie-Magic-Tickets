import { createBrowserRouter } from "react-router-dom";
import Layout from "../layouts/Layout";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import ShowDetails from "../pages/ShowDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/details/:id",
        element: (
            <ShowDetails />
     
        ),
        // loader: ({ params }) => getDetails(params.id),
      },
    ],
  },
]);
