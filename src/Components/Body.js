import RestaurantCard from "./RestaurantCard";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";

import Shimmar from "./Shimmar";
import { filterData } from "../Utils/helper";
import useRestaurantsList from "../Utils/useRestaurantsList";
import useOnline from "../Utils/useOnline";
import UserContext from "../Utils/UserContext";

const Body = ({ user }) => {
  const [searchText, setSearchText] = useState();
  const [allRestaurants, filteredRestaurants] = useRestaurantsList();

  const isOneline = useOnline();
  const { profile, setProfile } = useContext(UserContext);

  if (!isOneline) {
    return <h1>offline, please check your internet connection!!</h1>;
  }

  // not render component
  if (!allRestaurants) return null;

  // if(filteredRestaurants?.length === 0) {
  //   return <h1>No Restraunt match your Filter!!</h1>
  // }

  return allRestaurants?.length === 0 ? (
    <Shimmar />
  ) : (
    <>
      <div className="pb-4 bg-red-100">
        <input
          type="text"
          className="border border-rose-300 ml-3"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          className="border border-rose-300 rounded-none w-24 h-7 ml-3 mr-3"
          onClick={() => {
            //need to filter the data
            const data = filterData(searchText, allRestaurants);
            // update the state - restaurants
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
        <input
          value={profile.name}
          className="pl-2"
          onChange={(e) => {
            setProfile({
              ...profile,
              name: e.target.value,
            });
          }}
        />
        <input
          value={profile.email}
          className="pl-2"
          onChange={(e) => {
            setProfile({
              profile,
              email: e.target.value,
            });
          }}
        />
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurants.map((restaurant) => {
          return (
            <Link
              to={"/restaurant/" + restaurant.data.id}
              key={restaurant.data.id}
            >
              <RestaurantCard {...restaurant.data} user={user.userInfo} />
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Body;
