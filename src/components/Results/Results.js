import React from 'react'
import cl from './results.module.css';

const Results = (props) => {
    return (
        <div className={cl.results}>
            <div className="">
                <div className="">

                    <h2>{`${props.city}, ${props.country}`} </h2>
                </div>
                <img src={props.icon} alt="weather" />
                <h2>{`${props.temperature}°c`}</h2>
                <h2> {props.description}</h2>

            </div>
            <div className=""><h2>{`Wind: ${props.wind} kmph`}</h2>
                <h2>Precipitation:{`${props.precipitation} mm`}</h2>
                <h2>Pressure: {`${props.pressure} mb`}</h2>
            </div>
            <h2>Last Updated: {props.time}</h2>


            <h2>Local Time: {props.localTime}</h2>
        </div >

    )
}

export default Results


