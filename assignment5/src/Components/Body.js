import RestaurantCard from './RestaurantCard';
import { restaurantList } from './Constants';
import { useState } from 'react';

function filterData(searchText, restaurants){
    const filterData = restaurants.filter((restaurant) => {
        restaurant.data.name.includes(searchText)
    })

    return filterData;
}

const Body = () => {
    // const searchText = "KING";
    const [searchText, setSearchText] = useState("KING");
    //const [searchClicked, setSearchClicked] = useState("false");
    const [restaurants, setRestaurants] = useState(restaurantList);

    return (
        <>
            <div className='search-container'>
                <input 
                    type="text" 
                    className='inut-search' 
                    value={searchText}
                    onChange={(e)=>
                        setSearchText(e.target.value)
                    }/>
                <button className='search-btn' onClick={() => {
                    const data = filterData(searchText, restaurants)
                    setRestaurants(data)
                }}>Search</button>
            </div>
            <div className='restaurant-list'>
                {restaurants.map((restaurant) => {
                    return <RestaurantCard {...restaurant.data} key={restaurant.data.id}/>
                })}
            </div>
        </>
    )
}

export default Body;
