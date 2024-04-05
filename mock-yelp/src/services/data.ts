import {Location, Restaurant} from "@/model/restaurant";

export const allRestaurants = [
    new Restaurant(
        "1",
        "The Habit Burger Grill",
        "https://s3-media0.fl.yelpcdn.com/bphoto/X7pw2XsxeTmF3-q5hyX3eQ/348s.jpg",
        new Location(39.93516103858703, -75.03104939688971)
    ),
    new Restaurant(
        "2",
        "Pizza Twist",
        "https://s3-media0.fl.yelpcdn.com/bphoto/cHCwSRcx-BFIy7gkoGteSg/348s.jpg",
        new Location(39.869650607598665, -74.96233605322885)
    ),
    new Restaurant(
        "3",
        "Chubby Cattle",
        "https://s3-media0.fl.yelpcdn.com/bphoto/wT3kQpHDP_xnqyAvOKZtoQ/348s.jpg",
        new Location(39.95615114735055, -75.15465161262719)
    )
]