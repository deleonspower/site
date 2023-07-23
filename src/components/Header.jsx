import { useState } from "react";
import logo from '/logo-gold.svg'
import hamburgerMenu from '/hamburger-menu.svg'
import closeMenu from '/close-menu.svg'

export default function Header() {

    const navOpen =
    <header className="bg-black h-screen fixed w-full lg:bg-black/90 lg:h-auto lg:static">
        <div className="max-w-5xl mx-auto text-xl flex flex-col justify-between px-5 lg:px-0 lg:flex-row">
            <div className="flex justify-between">
                <img src={logo} alt="logo" className="w-20" />           
                <img src={closeMenu} onClick={closeNavHandler} alt="close menu" className="w-8 lg:hidden"/>                         
            </div>
           
            <nav className="text-white flex flex-col text-center space-y-10 py-5 lg:flex-row lg:space-y-0 lg:space-x-5">
                <a href="/site/" className="hover:underline hover:decoration-yellow-500 hover:decoration-2">Home</a>      
                <a href="/site/#services" className="hover:underline hover:decoration-yellow-500 hover:decoration-2">Services</a>              
                <a href="/site/#contact" className="text-yellow-500 hover:underline hover:decoration-yellow-500 hover:decoration-2">Book Now</a>    
            </nav>  
        </div>
    </header>
    
    const navClosed = 
    <header className="bg-black/90 ">
        <div className="max-w-5xl mx-auto text-xl flex flex-col justify-between px-5 lg:px-0 lg:flex-row">
            <div className="flex justify-between">
                <img src={logo} alt="logo" className="w-20" />           
                <img src={hamburgerMenu} alt="menu icon" onClick={openNavHandler} className="w-8 lg:hidden"/>                         
            </div>
           
            <nav className="text-white hidden py-5 lg:flex lg:space-y-0 lg:space-x-5">
                <a href="/site/" className="hover:underline hover:decoration-yellow-500 hover:decoration-2">Home</a>      
                <a href="/site/#services" className="hover:underline hover:decoration-yellow-500 hover:decoration-2">Services</a>              
                <a href="/site/#contact" className="text-yellow-500 hover:underline hover:decoration-yellow-500 hover:decoration-2">Book Now</a>    
            </nav>  
        </div>
    </header>

    const [nav, setNav] = useState(navClosed)
    
    function openNavHandler() {
        setNav(navOpen)
    }

    function closeNavHandler() {
        setNav(navClosed)
    }

    return (
        nav
    )
}
