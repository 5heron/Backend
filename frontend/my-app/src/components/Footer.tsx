import logo from "/images/logo.png";
import NavLinksFooter from "./NavLinksFooter";

function Footer() {
  return (
      <div className="bottom-0 fixed w-svw py-3 backdrop-blur-lg border-b border-neutral-700/80 bg-indigo-950 bg-opacity-50 z-50">
        <div className="px-4 max-auto relative text-sm ">
          <div className="flex justify-center items-center">
                <div className="flex justify-between items-center flex-shrink-0 w-full">
                    <img className="h-7 w-30 mr-[120px]" src={logo}></img>
                    <div className="text-xl tracking-tight font-bold bg-gradient-to-r from-cyan-200 via-purple-400 to-rose-500 p-1 text-transparent bg-clip-text cursor-pointer">
                        <a
                            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                            target="_blank"
                        >
                        &copy;TipulessCorp
                        </a>                
                    </div>
                    <div className="flex flex-row justify-between text-red-400 font-mono font-light">
                        <NavLinksFooter/>
                    </div>
                </div>
            </div>
        </div>
      </div>

  );
}

export default Footer;
