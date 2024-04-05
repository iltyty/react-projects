"use client"

import {getRestaurantDetail} from "@/services/request";
import {Card, CardHeader} from "@mui/material";
import {Map, Marker} from "react-map-gl";

const accessToken = "pk.eyJ1IjoibHVsdS1xIiwiYSI6ImNscWxwc3RsNDJ2YjcyanFmdnFmNGo5NHQifQ.KDGJ7IrR1Mosjs61rNVnXQ"
const mapZoom = 11

export default function DetailPage({ searchParams }: { searchParams: { id: string } }) {
    const restaurant = getRestaurantDetail(searchParams.id)
    console.log(restaurant)

    return (
        <div className="flex flex-col min-h-screen min-w-screen justify-center items-center">
            <Card className="mb-6">
                <CardHeader title={restaurant.name} />
            </Card>
            <Map
                mapboxAccessToken={accessToken}
                initialViewState={{
                    latitude: restaurant.location.latitude,
                    longitude: restaurant.location.longitude,
                    zoom: mapZoom,
                }}
                style={{ width: "1200px", height: "800px" }}
                mapStyle="mapbox://styles/mapbox/streets-v12"
            >
                <Marker
                    latitude={restaurant.location.latitude}
                    longitude={restaurant.location.longitude}
                    anchor="bottom"
                />
            </Map>
        </div>
    )
}