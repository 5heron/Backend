import { Link } from "react-router-dom"
import {Clist} from "./Data"
import { MdChevronLeft, MdChevronRight } from "react-icons/md"

function MainBody(){

    const SlideSmallLeft = ()=>{
        var slider = document.getElementById('SliderSmall')
        slider!.scrollLeft = slider!.scrollLeft - 950
      }
    
    
      const SlideSmallRight = ()=>{
        var slider = document.getElementById('SliderSmall')
          slider!.scrollLeft = slider!.scrollLeft + 950
      }
    
    return(
        <>
            <div className="flex self-center">
                <Link to="/bookingpage">
                <button className="bg-gradient-to-r p-7 text-pretty text-4xl mx-5 my-4 from-rose-500 to-indigo-400 cursor-pointer rounded-full text-indigo-950 hover:scale-110 duration-200 font-extrabold ">
                    Movie Booking
                </button>
                </Link>
                <Link to="/bookingpage">
                    <button className="bg-gradient-to-r p-7 text-pretty text-4xl  mx-5 my-4 from-rose-500 to-indigo-400 cursor-pointer rounded-full text-indigo-950 hover:scale-110 duration-200 font-extrabold">
                        Check Schedule
                    </button>
                </Link>
            </div>
            <div className="flex p-2 mx-9 max-h-svh text-3xl flex-col justify-center items-center font-mono text-pretty text-white text-justify">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum 
                The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
                <div className="text-pretty p-5 text-4xl font-extrabold text-white">Why not try some of these?</div>
            </div>
            <div className="relative flex item-center">
            <MdChevronLeft className="self-center opacity-50 hover:opacity-100" onClick={SlideSmallLeft} size={40} color="pink"/>
            <div id="SliderSmall" className="mb-20 scrollbar-hide w-full h-full overflow-x-scroll overflow-y-hidden whitespace-nowrap scroll-smooth">
            {Clist.map((item)=> (
                <img className="w-[480px] inline-block p-4 hover:scale-105 ease-in-out duration-500" 
                src={import.meta.env.BASE_URL + item.image} 
                alt="cover images" />
            ))}
            </div>
            <MdChevronRight className="self-center opacity-50 hover:opacity-100" onClick={SlideSmallRight} size={40} color="pink"/>
            </div>
        </>
    )
}

export default MainBody