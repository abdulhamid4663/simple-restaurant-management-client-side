import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import MainLayouts from "../layouts/MainLayouts";
import AllFood from "../pages/AllFood";
import Blog from "../pages/Blog";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayouts />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "allFoods",
                element: <AllFood />
            },
            {
                path: "blog",
                element: <Blog />
            }
        ] 
    }
])

export default router;