import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import MainLayouts from "../layouts/MainLayouts";
import AllFood from "../pages/AllFood";
import Blog from "../pages/Blog";
import FoodItems from "../pages/FoodItems";
import FoodDetails from "../pages/FoodDetails";
import OrderPage from "../pages/OrderPage";

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
            },
            {
                path: "allFoods/:category",
                element: <FoodItems />
            },
            {
                path: "allFoods/:category/:id",
                element: <FoodDetails />
            },
            {
                path: "allFoods/:category/:name/:id",
                element: <OrderPage />
            },
        ] 
    }
])

export default router;