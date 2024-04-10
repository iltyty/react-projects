import {getRestaurants} from "@/services/request";
import {Box, Card, CardContent, CardHeader, CardMedia, Chip, Rating, Typography} from "@mui/material";
import Link from "next/link";

const restaurants = getRestaurants()

export default function Page() {
    return (
        <div className="flex min-h-screen flex-col justify-center items-center">
            <h1 className="font-bold text-5xl mb-5">List Page</h1>
            {restaurants.map((restaurant) => (
                <Link key={restaurant.id} href={{
                    pathname: '/detail',
                    query: {
                        id: restaurant.id
                    }
                }}>
                    <Card className="mb-8" sx={{display: "flex"}}>
                        <CardMedia component="img" sx={{width: 200, height: 220}} image={restaurant.imgUrl} />
                        <Box sx={{display: "flex", flexDirection: "column", maxWidth: 500}}>
                            <CardContent>
                                <Box sx={{display: "flex", flexDirection: "column"}}>
                                    <Typography variant="h5">
                                        {restaurant.name}
                                    </Typography>
                                    <Box sx={{display: 'flex'}}>
                                        <Rating value={restaurant.rating} readOnly />
                                        <Typography className="ml-2 font-bold" component="div" variant="body1">
                                            {restaurant.rating}
                                        </Typography>
                                    </Box>
                                    <Box sx={{display: 'flex'}}>
                                        {restaurant.tags.map((tag, index) => (
                                            <Chip className="mr-2" key={index} label={tag} />
                                        ))}
                                    </Box>
                                    <Typography variant="body2">
                                        {restaurant.reviews.length > 0 && restaurant.reviews[0]}
                                    </Typography>
                                </Box>
                            </CardContent>
                        </Box>
                    </Card>
                </Link>
            ))}
        </div>
    )
}