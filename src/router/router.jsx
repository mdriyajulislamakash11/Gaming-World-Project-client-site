import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../Layout/MainLayouts";
import Home from "../pages/Home";
import AddReviews from "../pages/AddReviews";
import GameWatchList from "../pages/GameWatchList";
import AllReviews from "../pages/AllReviews";
import MyReviews from "../pages/MyReviews";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayouts />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/addReviews",
                element: <AddReviews />
            },
            {
                path: "/gameWatchList",
                element: <GameWatchList />
            },
            {
                path: "/allReviews",
                element: <AllReviews />
            },
            {
                path: "/myReviews",
                element: <MyReviews />
            },
        ]
    }
]);


export default router;