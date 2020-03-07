import React, { Component } from 'react';
import cl from './weather.module.css';
import SideNav from '../SideNav/SideNav'
import WeatherFive from '../WeatherFive/WeatherFive'




class Weather extends Component {
    state = {
        cityInput: '',
        loading: false,


    }



    componentDidMount() {

        if (this.state.cityInput === '') {
            return this.render()
        }

        this.setState({
            loading: true
        })

        fetch(`http://api.weatherstack.com/current?access_key=7d1553107c6b1e14222730a1b152df10&query=${this.state.cityInput}`)


            .then(response => response.json())
            .then(data => {
                const { observation_time, temperature, weather_icons, wind_speed, precip, pressure, weather_descriptions } = data.current
                const { name, country, localtime } = data.location




                this.setState({
                    loading: false,
                    time: observation_time,
                    temperature: temperature,
                    icon: weather_icons,
                    city: name,
                    country: country,
                    wind: wind_speed,
                    precipitation: precip,
                    pressure: pressure,
                    description: weather_descriptions,
                    localTime: localtime,
                })



            });




    }

    handleChange = (event) => {
        const { name, value } = event.target

        this.setState({ [name]: value })
    }


    handleClick = (event) => {
        event.preventDefault()
        this.componentDidMount()
    }

    changeContent = () => {
        const weather = this.state;
        let text = this.state.loading ? 'Loading...' : ''

        if (this.state.loading === true) {
            return <div className={cl.pic}>
                <div className={cl.loading}>
                    <h1>{text}</h1>
                </div>
            </div>
        } else if (this.state.city === undefined) {
            return <div className={cl.pic}>
                <div className={cl.container}>
                    <form className={cl.weather} >
                        <div className={cl.search}>
                            <input
                                type="text"
                                name="cityInput"
                                value={this.state.cityInput}
                                placeholder="Type city name"
                                onChange={this.handleChange}
                            />

                            <button onClick={this.handleClick}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M23.822 20.88l-6.353-6.354c.93-1.465 1.467-3.2 1.467-5.059.001-5.219-4.247-9.467-9.468-9.467s-9.468 4.248-9.468 9.468c0 5.221 4.247 9.469 9.468 9.469 1.768 0 3.421-.487 4.839-1.333l6.396 6.396 3.119-3.12zm-20.294-11.412c0-3.273 2.665-5.938 5.939-5.938 3.275 0 5.94 2.664 5.94 5.938 0 3.275-2.665 5.939-5.94 5.939-3.274 0-5.939-2.664-5.939-5.939z" /></svg></button>
                        </div>

                        <div className={cl.results}>
                            <h1>Get details of the weather of any city in the world!</h1>

                        </div>

                    </form>
                </div>
            </div>

        } else {

            return <div>
                <div className={cl.pic}>
                    <div className={cl.container}>
                        <div className={cl.main}>
                            <SideNav />

                            <form className={cl.weather}>
                                <div className={cl.search}>
                                    <input
                                        type="text"
                                        name="cityInput"
                                        value={this.state.cityInput}
                                        placeholder="Type city name"
                                        onChange={this.handleChange}
                                    />

                                    <button onClick={this.handleClick}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M23.822 20.88l-6.353-6.354c.93-1.465 1.467-3.2 1.467-5.059.001-5.219-4.247-9.467-9.468-9.467s-9.468 4.248-9.468 9.468c0 5.221 4.247 9.469 9.468 9.469 1.768 0 3.421-.487 4.839-1.333l6.396 6.396 3.119-3.12zm-20.294-11.412c0-3.273 2.665-5.938 5.939-5.938 3.275 0 5.94 2.664 5.94 5.938 0 3.275-2.665 5.939-5.94 5.939-3.274 0-5.939-2.664-5.939-5.939z" /></svg></button>
                                </div>



                                <div className={cl.results}>
                                    <div className={cl.title}>

                                        <h2>{`${weather.city}, ${weather.country}`} </h2>
                                    </div>

                                    <div className={cl.icon}>
                                        <div className={cl.temp}>
                                            <h2>{`${weather.temperature}°c`}</h2>
                                        </div>

                                        <div className={cl.desc}>
                                            <img src={weather.icon} alt="weather" />
                                            <h2> {weather.description}</h2>
                                        </div>


                                    </div>
                                    <div className={cl.info}>
                                        <div className={cl.metrics}><h2>{`Wind: ${weather.wind} kmph`}</h2>
                                            <h2>Precipitation:{`${weather.precipitation} mm`}</h2>
                                            <h2>Pressure: {`${weather.pressure} mb`}</h2>
                                        </div>
                                        <div className={cl.time}>
                                            <h2>Last Updated: {weather.time}</h2>
                                            <h2>Local Time: {weather.localTime}</h2>
                                        </div>
                                    </div>




                                </div>

                            </form>

                        </div>
                    </div >

                </div>
                <WeatherFive />
            </div>
        }
    }

    render() {



        return (
            <div>

                {this.changeContent()}



            </div>
        )
    }

}

export default Weather



