import logo from "/images/logo.png";
import NavLinks from "./NavLinksHeader";
import { Link } from "react-router-dom";

function Header() {
  
  return (
      <div className="top-0 fixed w-svw py-3 backdrop-blur-lg border-b border-neutral-700/80 bg-indigo-950 bg-opacity-50 z-50">
        <div className="px-4 max-auto relative text-sm ">
          <div className="flex justify-center items-center">
                <div className="flex justify-between items-center flex-shrink-0 w-full">
                    <img className="h-10 w-30 mr-40" src={logo}>
                    </img>
                    <div className="text-4xl tracking-tight font-bold bg-gradient-to-r from-cyan-200 via-purple-400 to-rose-500 p-1 text-transparent bg-clip-text cursor-pointer">
                      <Link to="/">
                        SkibidiMyShow
                      </Link>
                    </div>
                    <div className="flex flex-row text-red-400 font-mono font-semibold">
                        <NavLinks/>
                    </div>
                </div>
            </div>
        </div>
      </div>
  );
}

export default Header;
