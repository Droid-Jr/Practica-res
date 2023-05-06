import { useEffect } from "react"
import { useState } from "react"



function Menu() {
  
    const [open, setOpen] = useState(false)

    const inver = () => {
        setOpen(!open)
    }
  
  useEffect(() => {
    if(open){
        setOpen(!open)
    }
  
   
  }, [])
  
  
    return (
    
    <div className="grid bg-[green] place-content-center ">
        <button onClick={inver} className="bg-[#f36c6c]">Menu</button>
          <ul className={` ${open ? "menu__1" : "menu__2"}`}>
            <li>Home</li>
            <li>Contact</li>
            <li>Proyect</li>
        </ul>
        
        
    </div>
 
 
    )
}

export default Menu