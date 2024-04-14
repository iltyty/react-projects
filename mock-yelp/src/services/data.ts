import {Location, Restaurant, RestaurantBuilder} from "@/model/restaurant";
import build from "next/dist/build";

export const allRestaurants = [
    new RestaurantBuilder().id("1")
        .name("The Habit Burger Grill")
        .imgUrl("https://s3-media0.fl.yelpcdn.com/bphoto/X7pw2XsxeTmF3-q5hyX3eQ/348s.jpg")
        .phone("(215) 755-1999")
        .openingTime("11:00 am - 9:00 pm")
        .intro("Fast-casual burger chain serving signature tri-tip burgers.")
        .rating(4.0)
        .tags(["Burgers", "Sandwiches", "New American"])
        .reviews(["I'm not a big burger person, but I had a craving and this place had been on my list. I happened to be near this restaurant so it was the right time to get a burger craving."])
        .location(new Location(39.93516103858703, -75.03104939688971))
        .build(),
    new RestaurantBuilder().id("2")
        .name("Pizza Twist")
        .imgUrl("https://s3-media0.fl.yelpcdn.com/bphoto/cHCwSRcx-BFIy7gkoGteSg/348s.jpg")
        .phone("(856) 764-1888")
        .openingTime("11:00 am - 9:00 pm")
        .intro("Local family-owned Pizzeria part of great franchise, with a focus on taste and variety.")
        .rating(2.8)
        .tags(["Pizza", "Halal"])
        .reviews(["“Local family-owned Pizzeria part of great franchise, with a focus on taste and variety. With locally sourced ingredients and premium quality GMO-Free meat, our menu is filled with…”"])
        .location(new Location(39.869650607598665, -74.96233605322885))
        .build(),
    new RestaurantBuilder().id("3")
        .name("Chubby Cattle")
        .imgUrl("https://s3-media0.fl.yelpcdn.com/bphoto/wT3kQpHDP_xnqyAvOKZtoQ/348s.jpg")
        .phone("(215) 418-0600")
        .openingTime("11:00 am - 9:00 pm")
        .intro("Chubby Cattle is a restaurant that serves Chinese hot pot and Asian fusion cuisine.")
        .rating(4.5)
        .tags(["Chinese", "Hot Pot", "Asian Fusion"])
        .reviews(["Food, service, Ambiance, A plus, love the whole vibe in the place, all you can even better. First time trying the hot pots and it was amazing. Got to find a spot like this in L.A."])
        .location(new Location(39.95615114735055, -75.15465161262719))
        .build()
]