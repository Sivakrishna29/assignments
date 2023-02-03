import { useContext } from "react";
import UserContext from "../Utils/UserContext";
import { CDN_CARD_URL } from "./Constants";

const RestaurantCard = ({ name, cloudinaryImageId, cuisines, slaString }) => {
  // const { restaurant } = props;
  const { profile } = useContext(UserContext);
  return (
    <div className="w-64 p-3 m-3 border border-sky-300">
      <img alt="card" src={CDN_CARD_URL + cloudinaryImageId} />
      <h2 className="font-bold text-1xl underline underline-offset-1">
        {name}
      </h2>
      <h3 className="font-medium text-1xl underline underline-offset-1">
        {cuisines.join(", ")}
      </h3>
      <h4 className="font-sans text-1xl underline underline-offset-1">
        {slaString}
      </h4>
      <span className="font-medium text-1xl">
        {profile.name} - {profile.email}
      </span>
    </div>
  );
};

export default RestaurantCard;
