import {Restaurant} from "@/model/restaurant";
import {allRestaurants} from "@/services/data";

export function getRestaurants(): Restaurant[] {
    return allRestaurants
}

export function getRestaurantDetail(id: string): Restaurant {
    return allRestaurants.find(restaurant => restaurant.id === id)!
}