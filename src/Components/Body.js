import RestaurantCard from './RestaurantCard';
import { restaurantList } from './Constants';
import { useEffect, useState } from 'react';

import Shimmar from './Shimmar';

function filterData(searchText, restaurants) {
    const filterData = restaurants.filter((restaurant) =>
      restaurant?.data?.name?.toLowerCase()?.includes(searchText.toLowerCase())
    );

    return filterData;
}

const Body = () => {
    const [allRestaurants, setAllRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [searchText, setSearchText] = useState();

    useEffect(() => {
      getRestaurants()
    },[])

    async function getRestaurants() {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.385044&lng=78.486671&page_type=DESKTOP_WEB_LISTING"
            );
        const json = await data.json();
        setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
        setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    }

    // not render component
    if(!allRestaurants) return null;

    if(filteredRestaurants?.length === 0) {
      return <h1>No Restraunt match your Filter!!</h1>
    }

    return allRestaurants?.length === 0 ? (
      <Shimmar />
    ):(
        <>
            <div className='search-container'>
                <input 
                    type="text" 
                    className='inut-search' 
                    value={searchText}
                    onChange={(e)=>
                        setSearchText(e.target.value)
                    }/>
                <button
                    className="search-btn"
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
            <div className='restaurant-list'>
                {filteredRestaurants.map((restaurant) => {
                    return <RestaurantCard {...restaurant.data} key={restaurant.data.id}/>
                })}
            </div>
        </>
    )
}

export default Body;
