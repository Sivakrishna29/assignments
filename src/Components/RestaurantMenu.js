import { useParams } from "react-router-dom";

import { CDN_CARD_URL } from "./Constants";
import Shimmer from "./Shimmar";
import useRestaurant from "../Utils/useRestaurant";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const restaurant = useRestaurant(resId);

  return !restaurant ? (
    <Shimmer />
  ) : (
    <div className="flex pl-3">
      <div className="pr-4">
        <h1 className="font-semibold text-red-200">Restraunt id: {resId}</h1>
        <h2 className="font-semibold text-red-200">{restaurant?.name}</h2>
        <img
          src={CDN_CARD_URL + restaurant?.cloudinaryImageId}
          className="w-56 h-56 pb-3"
        />
        <h3 className="font-semibold text-red-200">{restaurant?.area}</h3>
        <h3 className="font-semibold text-red-200">{restaurant?.city}</h3>
        <h3 className="font-semibold text-red-200">
          {restaurant?.avgRating} stars
        </h3>
        <h3 className="font-semibold text-red-200">
          {restaurant?.costForTwoMsg}
        </h3>
      </div>
      <div className="pl-4">
        <h1 className="font-bold text-2xl pb-3">Menu</h1>
        <ul>
          {Object.values(restaurant?.menu?.items).map((item) => (
            <li key={item.id} className="font-medium text-red-200">
              {item.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
