export class Restaurant {
    id: string = ""
    name: string = ""
    imgUrl: string = ""
    phone: string = ""
    openingTime: string = ""
    intro: string = ""
    rating: number = 0
    tags: string[] = []
    reviews: string[] = []
    location: Location = new Location(0, 0)
}

export class Location {
    latitude: number = 0
    longitude: number = 0

    constructor(latitude: number, longitude: number) {
        this.latitude = latitude
        this.longitude = longitude
    }
}

export class RestaurantBuilder {
    private restaurant: Restaurant = new Restaurant()

    id(id: string): RestaurantBuilder {
        this.restaurant.id = id
        return this
    }

    name(name: string): RestaurantBuilder {
        this.restaurant.name = name
        return this
    }

    imgUrl(imgUrl: string): RestaurantBuilder {
        this.restaurant.imgUrl = imgUrl
        return this
    }

    phone(phone: string): RestaurantBuilder {
        this.restaurant.phone = phone
        return this
    }

    openingTime(openingTime: string): RestaurantBuilder {
        this.restaurant.openingTime = openingTime
        return this
    }

    intro(intro: string): RestaurantBuilder {
        this.restaurant.intro = intro
        return this
    }

    rating(rating: number): RestaurantBuilder {
        this.restaurant.rating = rating
        return this
    }

    tags(tags: string[]): RestaurantBuilder {
        this.restaurant.tags = tags
        return this
    }

    reviews(reviews: string[]): RestaurantBuilder {
        this.restaurant.reviews = reviews
        return this
    }

    location(location: Location): RestaurantBuilder {
        this.restaurant.location = location
        return this
    }

    build(): Restaurant {
        return this.restaurant
    }
}