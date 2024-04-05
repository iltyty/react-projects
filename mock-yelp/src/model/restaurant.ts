export class Restaurant {
    id: string
    name: string
    imgUrl: string
    location: Location

    constructor(id: string, name: string, imgUrl: string, location: Location) {
        this.id = id
        this.name = name
        this.imgUrl = imgUrl
        this.location = location
    }
}

export class Location {
    latitude: number
    longitude: number

    constructor(latitude: number, longitude: number) {
        this.latitude = latitude
        this.longitude = longitude
    }
}