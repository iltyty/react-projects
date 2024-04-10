import Link from "next/link";
import {Button} from "@mui/material";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
        <h1 className="text-6xl font-bold text-center">
            Home Page
        </h1>
        <Link className="mt-4" href={"/list"}>
            <Button variant="contained" color="primary" size="large">
                Go to List
            </Button>
        </Link>
    </main>
  );
}
