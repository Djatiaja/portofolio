import { useEffect, useState } from 'react';
import style from './navbar.module.css';

function Navbar(){

    const [scroll, setScroll] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if(window.scrollY >= 20){
                setScroll(true);
            } else {
                setScroll(false);
            }
        }
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }})
    
        return (
        <>
        <nav className={scroll?style.NavbarActive:style.Navbar}>
            <a href="" className={style.iconBox}><h2 className={style.icon}>Djatiaja</h2></a>
            <ul className={style.Nav}>
                <a href="">
                <li className={style.NavItem}>Home</li>    
                </a>

                <a href="">
                <li className={style.NavItem}>Project</li>    
                </a>
                
                <a href="">
                <li className={style.NavItem}>About</li>    
                </a>
                
                <a href="">
                <li className={style.NavItem}>Contact</li>    
                </a>
            </ul> 
        </nav>   
        </>
    )
}

export default Navbar;