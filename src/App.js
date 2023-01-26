import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import Header from "./Components/Header";
import Body from "./Components/Body";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Contact from "./Components/Contact";
import RestaurantMenu from "./Components/RestaurantMenu";
import Error from "./Components/Error";
import Profile from "./Components/ProfileClassBased";
import Shimmar from "./Components/Shimmar";
//import Instamart from './Components/Instamart';

const Instamart = lazy(() => import("./Components/Instamart"));

const AppLayout = () => {
  return (
    <React.Fragment>
      <Header />
      <Outlet />
      <Footer />
    </React.Fragment>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
        children: [
          {
            path: "profile",
            element: <Profile />,
          },
        ],
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/instamart",
        element: (
          <Suspense fallback={<Shimmar />}>
            <Instamart />
          </Suspense>
        ),
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
