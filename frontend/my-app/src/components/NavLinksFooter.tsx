const url="https://github.com/S-idN/TheatreSite.git"

function NavLinksFooter(){
    return(
        <div className="flex gap-4 text-base">
            <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" rel="noopener noreferrer">Credits</a>  
            <nav>
                <button onClick={()=>window.open(url,'_blank')} className=" bg-gradient-to-r  from-rose-500 to-indigo-400 cursor-pointer rounded-sm text-indigo-950 font-bold px-1 hover:scale-110 duration-200">GitHub</button>
            </nav>
        </div>
    )
}

export default NavLinksFooter