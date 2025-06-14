import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../Layout/MainLayouts";
import Home from "../pages/Home";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayouts />,
        children: [
            {
                path: "/",
                element: <Home />
            },
        ]
    }
])