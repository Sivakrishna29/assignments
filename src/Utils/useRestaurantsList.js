import { useEffect, useState } from "react";
import { RESTAURANT_LIST_URL } from '../Components/Constants';

const useRestaurantsList = () => {
    const [allRestaurants, setAllRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);

    useEffect(() => {
        getRestaurants()
    }, []);

    async function getRestaurants() {
        const data = await fetch(RESTAURANT_LIST_URL);
        const json = await data.json();
        setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
        setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    }

    return [allRestaurants, filteredRestaurants]
};

export default useRestaurantsList;
