import { useEffect, useState } from "react";
import { MENU_URL } from '../Components/Constants';

const useRestaurant = (resId) => {
    const [restaurant, setRestauraunt] = useState(null);

    useEffect(() => {
        getRestaurantInfo()
    }, [])

    async function getRestaurantInfo() {
        const data = await fetch(MENU_URL + resId);
        const json = await data.json();
        setRestauraunt(json.data);
    }

    return restaurant;
}

export default useRestaurant;
