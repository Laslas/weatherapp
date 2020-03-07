import React from "react"
import cl from './weather-panel.module.css'

function WeatherPanel(props) {
    return (

        <div className={cl.panel}>
            <h2> {props.item.name},</h2>
            <h2>{props.item.country}</h2>
        </div>


    )
}

export default WeatherPanel