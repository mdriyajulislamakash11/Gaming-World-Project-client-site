import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../Layout/MainLayouts";
import Home from "../pages/Home";
import AddReviews from "../pages/AddReviews";
import GameWatchList from "../pages/GameWatchList";
import AllReviews from "../pages/AllReviews";
import MyReviews from "../pages/MyReviews";
import UpdateReview from "../pages/UpdateReview";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayouts />,
        children: [
            {
                path: "/",
                element: <Home />,
                loader: () => fetch("http://localhost:5000/games")
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
                element: <AllReviews />,
                loader: () => fetch("http://localhost:5000/games")
            },
            {
                path: "/myReviews",
                element: <MyReviews />,
                loader: () => fetch("http://localhost:5000/games")
            },
            {
                path: "/update/:id",
                element: <UpdateReview />,
                loader: ({params}) => fetch(`http://localhost:5000/games/${params.id}`)
            },
        ]
    }
]);


export default router;