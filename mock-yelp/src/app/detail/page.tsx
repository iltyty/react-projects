"use client"

import {getRestaurantDetail, getRestaurants} from "@/services/request";
import {Card, CardHeader} from "@mui/material";
import {Map, Marker} from "react-map-gl";
import mapboxgl from "mapbox-gl";
import {useRef} from "react";

const mapZoom = 11
const accessToken = "pk.eyJ1IjoibHVsdS1xIiwiYSI6ImNscWxwc3RsNDJ2YjcyanFmdnFmNGo5NHQifQ.KDGJ7IrR1Mosjs61rNVnXQ"

const restaurants = getRestaurants()

export default function DetailPage({ searchParams }: { searchParams: { id: string } }) {
    const restaurant = getRestaurantDetail(searchParams.id)
    const popups = restaurants.map((r) => new mapboxgl.Popup().setText(r.name))

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
                {restaurants.map((r, i) => (
                    <Marker
                        key={r.id}
                        latitude={r.location.latitude}
                        longitude={r.location.longitude}
                        anchor="bottom"
                        popup={popups[i]}
                        color={r.id === restaurant.id ? "orange" : "red"}
                        scale={r.id === restaurant.id ? 1.5 : 1}
                    />
                ))}
            </Map>
        </div>
    )
}