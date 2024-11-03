import Header from "../components/Header";
import Footer from "../components/Footer";
import { List } from "../components/List";
import { Link } from "react-router-dom";

export function BookingPage(){
    return(
        <div className="bg-gradient-to-r from-red-950 via-indigo-950 to-neutral-800 z-0 flex flex-col justify-center min-h-svh">
            <Header/>
                <div className="flex flex-col">
                    <Link to="/">
                        <List/>
                    </Link>
                </div>
            <Footer/>
        </div>
    )
}
