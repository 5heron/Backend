import { Link } from "react-router-dom"

function NavLinks(){
    return(
        <div className="flex gap-4 text-base">
            <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" rel="noopener noreferrer">About</a>  
            <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" rel="noopener noreferrer">Contact Us</a>
            <Link to="/login">
                <button className=" bg-gradient-to-r  from-rose-500 to-indigo-400 cursor-pointer rounded-sm text-indigo-950 px-1 hover:scale-110 duration-200">Login</button>
            </Link>
        </div>
    )
}

export default NavLinks

