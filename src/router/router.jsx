import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../Layout/MainLayouts";
import Home from "../pages/Home";
import AddReviews from "../pages/AddReviews";
import GameWatchList from "../pages/GameWatchList";
import AllReviews from "../pages/AllReviews";
import MyReviews from "../pages/MyReviews";
import UpdateReview from "../pages/UpdateReview";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRoute from "../auth/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("http://localhost:5000/games"),
      },
      {
        path: "/addReviews",
        element: (
          <PrivateRoute>
            <AddReviews />,
          </PrivateRoute>
        ),
      },
      {
        path: "/gameWatchList",
        element: (
          <PrivateRoute>
            <GameWatchList />
          </PrivateRoute>
        ),
      },
      {
        path: "/allReviews",
        element: <AllReviews />,
        loader: () => fetch("http://localhost:5000/games"),
      },
      {
        path: "/myReviews",
        element: (
          <PrivateRoute>
            <MyReviews />,
          </PrivateRoute>
        ),
        loader: () => fetch("http://localhost:5000/games"),
      },
      {
        path: "/update/:id",
        element: (
          <PrivateRoute>
            <UpdateReview />,
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/games/${params.id}`),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);

export default router;
