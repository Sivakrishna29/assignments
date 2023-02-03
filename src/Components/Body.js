import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import { Link } from "react-router-dom";

import Shimmar from "./Shimmar";
import { filterData } from "../Utils/helper";
import useRestaurantsList from "../Utils/useRestaurantsList";
import useOnline from "../Utils/useOnline";

const Body = ({ user }) => {
  const [searchText, setSearchText] = useState();
  const [allRestaurants, filteredRestaurants] = useRestaurantsList();

  const isOneline = useOnline();

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
          className="border border-rose-300 rounded-none w-24 h-7 ml-3"
          onClick={() => {
            //need to filter the data
            const data = filterData(searchText, allRestaurants);
            // update the state - restaurants
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
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
