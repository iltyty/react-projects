import {getRestaurants} from "@/services/request";
import {Card, CardHeader, CardMedia} from "@mui/material";
import Link from "next/link";

const restaurants = getRestaurants()

export default function Page() {
    return (
        <div className="flex min-h-screen flex-col justify-center items-center">
            <h1 className="font-bold text-5xl text-blue-600 mb-5">List Page</h1>
            {restaurants.map((restaurant, key) => (
                <Link key={restaurant.id} href={{
                    pathname: '/detail',
                    query: {
                        id: restaurant.id
                    }
                }}>
                    <Card className="mb-8">
                        <CardHeader title={restaurant.name} />
                        <CardMedia component="img" height={194} image={restaurant.imgUrl} />
                    </Card>
                </Link>
            ))}
        </div>
    )
}