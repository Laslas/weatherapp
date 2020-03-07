import React from 'react'
import cl from './side-nav.module.css'


const SideNav = () => {
    return (
        <div className={cl.sidenav}>

            <ul className={cl.ul}>
                <li className={cl.li}>Five day forecast</li>
                <li className={cl.li}>Weather Maps</li>
                <li className={cl.li}>Services</li>
                <li className={cl.li}>News</li>
                <li className={cl.li}>Contact</li>
            </ul>
        </div>
    )
}





export default SideNav