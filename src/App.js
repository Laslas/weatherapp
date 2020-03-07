import React from 'react';
import './App.css';
import 'normalize.css'
import Navbar from './components/Navbar/NavBar'
import Weather from './components/weather/weather';
// import WeatherFive from './components/WeatherFive/WeatherFive'
import Footer from './components/Footer/Footer'
import Timer from './components/Timer/Timer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Timer />
      <Weather />

      <Footer />
    </div>
  );
}

export default App;
