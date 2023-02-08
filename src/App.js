import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Provider } from "react-redux";

import Header from "./Components/Header";
import Body from "./Components/Body";
import Footer from "./Components/Footer";
import { useState } from "react";

import About from "./Components/About";
import Contact from "./Components/Contact";
import RestaurantMenu from "./Components/RestaurantMenu";
import Error from "./Components/Error";
import Profile from "./Components/ProfileClassBased";
import Shimmar from "./Components/Shimmar";
import UserContext from "./Utils/UserContext";
import store from "./Utils/store";
import Cart from "./Components/Cart";
//import Instamart from './Components/Instamart';

const Instamart = lazy(() => import("./Components/Instamart"));

const AppLayout = () => {
  const [user, setUser] = useState({
    userInfo: {
      name: "sivakrishna",
      email: "siva@gmail.com",
    },
  });

  const [profile, setProfile] = useState({
    name: "Krishna",
    email: "Sivakrishna.ui@gmail.com",
  });
  return (
    <Provider store={store}>
      <UserContext.Provider
        value={{ profile: profile, setProfile: setProfile }}
      >
        <Header />
        <Outlet />
        <Footer />
      </UserContext.Provider>
    </Provider>
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
        element: (
          <Body
            user={{
              userInfo: {
                name: "sivakrishna",
                email: "siva@gmail.com",
              },
            }}
          />
        ),
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
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
