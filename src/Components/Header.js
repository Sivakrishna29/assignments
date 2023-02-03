import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../Utils/UserContext";

const Title = () => {
  return (
    <img
      className="w-40 p-3"
      alt="food"
      src="https://images.saymedia-content.com/.image/t_share/MTc2MjcyOTIxMTM5NjE4OTg5/fast-food-restaurant-logos-and-their-hidden-meanings.jpg"
    />
  );
};

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const { profile } = useContext(UserContext);

  return (
    <div className="flex justify-between m-3 border border-indigo-900 pb-3 bg-red-100">
      <Title />
      <div>
        <ul className="flex">
          <li className="p-2 m-2 underline underline-offset-1">
            <Link to="/">Home</Link>
          </li>
          <li className="p-2 m-2 underline underline-offset-1">
            <Link to="/about">About</Link>
          </li>
          <li className="p-2 m-2 underline underline-offset-1">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="p-2 m-2 underline underline-offset-1">
            <Link to="/instamart">Instamart</Link>
          </li>
          <li className="p-2 m-2 underline underline-offset-1">Cart</li>
        </ul>
      </div>
      <span className="p-10 font-bold text-red-900">
        {profile.name} - {profile.email}
      </span>
      {isLoggedIn ? (
        <button onClick={() => setIsLoggedIn(false)} className="pr-4">
          Login
        </button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)} className="pr-4">
          Logout
        </button>
      )}
    </div>
  );
};

export default Header;
