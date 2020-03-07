import React from "react"
import cl from './manypanels.module.css'

function ManyPanels(props) {
    return (

        <div className={cl.card}>
            <h2 className={cl.date}> {props.item.date}</h2>
            <div className={cl.temp}>



                <div className={cl.display}>
                    <div className={cl.info}>
                        <img className={cl.image} src={`http://openweathermap.org/img/wn/${props.item.icon}@2x.png`} alt="weather" />
                        <h2 className={cl.imageh2}> {props.item.desc2}</h2>

                    </div>
                    <div className={cl.disp}>
                        <h2 className={cl.degrees} >{props.item.temp}°c</h2>
                        <h2 className={cl.feels}>Feels like: {props.item.feels_like}°c</h2>
                    </div>

                </div>



            </div>

        </div>


    )
}

export default ManyPanels