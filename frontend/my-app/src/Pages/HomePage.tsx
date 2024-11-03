import Header from "../components/Header"
import MainBody from "../components/MainBody"
import {Clist} from "../components/Data"
import { MdChevronLeft, MdChevronRight } from "react-icons/md"
import Footer from "../components/Footer"


export function HomePage(){
    const SlideLeft = ()=>{
        var slider = document.getElementById('slider')
        slider!.scrollLeft = slider!.scrollLeft - 950
      }
    
    
      const SlideRight = ()=>{
        var slider = document.getElementById('slider')
          slider!.scrollLeft = slider!.scrollLeft + 950
      }
    
      return (
        <div className="bg-gradient-to-r from-red-950 via-indigo-950 to-neutral-800 z-0 flex flex-col justify-center min-h-svh">
          <Header/>
          <div className="relative flex item-center ">
            <MdChevronLeft className="self-center opacity-50 hover:opacity-100" onClick={SlideLeft} size={40} color="pink"/>
            <div id="slider" className=" mt-20 scrollbar-hide w-full h-full overflow-x-scroll overflow-y-hidden whitespace-nowrap scroll-smooth">
              {Clist.map((item)=> (
                <img className="w-[1080px] inline-block p-4 hover:scale-105 ease-in-out duration-500" 
                src={import.meta.env.BASE_URL + item.image} 
                alt="cover images" />
              ))}
            </div>
            <MdChevronRight className="self-center opacity-50 hover:opacity-100" onClick={SlideRight} size={40} color="pink"/>
          </div>
            <MainBody/>
          <Footer/>
        </div>
      )
}
