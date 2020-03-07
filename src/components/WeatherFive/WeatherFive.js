import React, { Component } from 'react';
import cl from './weather-five.module.css';
import WeatherPanel from '../WeatherPanel/WeatherPanel'
import ManyPanels from '../ManyPanels/ManyPanels'
import SideNav from '../SideNav/SideNav'


class WeatherFive extends Component {

    state = {
        cityInput: '',
        cityData: [],
        listData: [],

    }

    componentDidMount() {

        if (this.state.cityInput === '') {
            return this.render()
        }

        fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${this.state.cityInput}&units=metric&appid=e69c3e05546846831df6286127e6a12c`)



            .then(response => response.json())
            .then(data => {


                const { name, country } = data.city
                const list = data.list
                const cityArr = [{ name, country }]

                let newList = list
                    .map(item => {
                        return {
                            key: item.dt,
                            temp: item.main.temp,
                            feels_like: item.main.feels_like,
                            min_temp: item.main.temp_min,
                            max_temp: item.main.temp_max,
                            humid: item.main.humidity,
                            desc: item.weather.map(item =>

                                [item.main]

                            ),
                            desc2: item.weather.map(item =>

                                [item.description]

                            ),
                            icon: item.weather.map(item =>

                                [item.icon]

                            ),
                            wind_speed: item.wind.speed,
                            wind_degree: item.wind.deg,
                            date: item.dt_txt
                        };
                    })











                this.setState({
                    cityData: cityArr,
                    listData: newList,



                })

            })




    }
    handleChange = (event) => {
        const { name, value } = event.target

        this.setState({ [name]: value })
    }

    handleClick = (event) => {
        event.preventDefault()
        this.componentDidMount()

    }

    render() {
        const weather = this.state
        const weatherComponents = weather.cityData.map(item =>
            <WeatherPanel
                item={item} key={item.name}

            />
        )

        const listComponents = weather.listData.map(item =>
            <ManyPanels
                item={item} key={item.key}

            />
        )

        return (
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
                                    {weatherComponents}
                                    {listComponents}

                                </div>







                            </div>

                        </form>
                    </div>
                </div >
            </div>

        )
    }


}

export default WeatherFive




