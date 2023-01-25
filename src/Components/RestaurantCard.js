import {CDN_CARD_URL} from './Constants';

const RestaurantCard = ({
    name, 
    cloudinaryImageId, 
    cuisines,
    slaString
  }) => {
    // const { restaurant } = props;
    return(
      <div className='card'>
          <img 
            alt="card" 
            src={CDN_CARD_URL + cloudinaryImageId} />
          <h2>{name}</h2>
          <h3>{cuisines.join(", ")}</h3>
          <h4>{slaString}</h4>
      </div>
    )
}

export default RestaurantCard;
