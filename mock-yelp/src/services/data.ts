import {Location, Restaurant} from "@/model/restaurant";

export const allRestaurants = [
    new Restaurant(
        "1",
        "The Habit Burger Grill",
        "https://s3-media0.fl.yelpcdn.com/bphoto/X7pw2XsxeTmF3-q5hyX3eQ/348s.jpg",
        4.0,
        ["Burgers", "Sandwiches", "New American"],
        ["I'm not a big burger person, but I had a craving and this place had been on my list. I happened to be near this restaurant so it was the right time to get a burger craving."],
        new Location(39.93516103858703, -75.03104939688971)
    ),
    new Restaurant(
        "2",
        "Pizza Twist",
        "https://s3-media0.fl.yelpcdn.com/bphoto/cHCwSRcx-BFIy7gkoGteSg/348s.jpg",
        2.8,
        ["Pizza", "Halal"],
        ["“Local family-owned Pizzeria part of great franchise, with a focus on taste and variety. With locally sourced ingredients and premium quality GMO-Free meat, our menu is filled with…”"],
        new Location(39.869650607598665, -74.96233605322885)
    ),
    new Restaurant(
        "3",
        "Chubby Cattle",
        "https://s3-media0.fl.yelpcdn.com/bphoto/wT3kQpHDP_xnqyAvOKZtoQ/348s.jpg",
        4.5,
        ["Chinese", "Hot Pot", "Asian Fusion"],
        ["Food, service, Ambiance, A plus, love the whole vibe in the place, all you can even better. First time trying the hot pots and it was amazing. Got to find a spot like this in L.A."],
        new Location(39.95615114735055, -75.15465161262719)
    )
]