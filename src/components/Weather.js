import React, { useState } from "react"
import getWeather from "../api"
import dateBuilder from "../utils/index.js"
import "weather-icons/css/weather-icons.css";

const Weather = () => {
  const [query, setQuery] = useState("")
  const [weather, setWeather] = useState({ })

  const search = (evt) => {
    if (evt.key === "Enter") {
      getWeather(query, setQuery, setWeather)
    }
  }

  return (
    <>
      <div className={(typeof weather.main != "undefined") ? ((weather.main.temp > 16) ? 'app warm' : 'app cold') : 'app'}>
        <main>
          <div className="search">
            <input
              type="text"
              className="search-bar"
              placeholder="Search..."
              onChange={(e) => setQuery(e.target.value)}
              value={query}
              onKeyPress={search}
            />
          </div>
          {weather?.main ? (
            <div>
              <div className="location">
                <div className="place">
                  {weather.name}, {weather?.sys?.country}
                </div>
                <div className="date">{dateBuilder(new Date())}</div>
              </div>
              <div className="weather-box">
                <div className="temp">{Math.round(weather?.main?.temp)}°c</div>
                <div className="weather">{weather?.weather[0].main}</div>
                <div className="icon">
                  {(() => {
                    if (weather?.weather[0].main === "Clouds") {
                      return (
                        <i className="fas fa-cloud-sun"></i>
                      )
                    } else if (weather?.weather[0].main === "Thunderstorm") {
                      return (
                        <i class="fas fa-thunderstorm"></i>
                      )
                    } else if (weather?.weather[0].main === "Drizzle") {
                      return (
                        <i class="far fa-tint"></i>
                      )
                    } else if (weather?.weather[0].main === "Rain") {
                      return (
                        <i class="fas fa-cloud-showers-heavy"></i>
                      )
                    } else if (weather?.weather[0].main === "Snow") {
                      return (
                        <i class="fas fa-cloud-snow"></i>
                      )
                    } else if (weather?.weather[0].main === "Clear") {
                      return (
                        <i class="fas fa-sun"></i>
                      )
                    } else if (weather?.weather[0].main === "Mist") {
                      return (
                        <i class="fas fa-smog"></i>
                      )
                    } else if (weather?.weather[0].main === "Haze") {
                      return (
                        <i class="fas fa-smog"></i>
                      )
                    } else if (weather?.weather[0].main === "Smoke") {
                      return (
                        <i class="fas fa-smog"></i>
                      )
                    } else if (weather?.weather[0].main === "Dust") {
                      return (
                        <i class="fas fa-smog"></i>
                      )
                    } else if (weather?.weather[0].main === "Fog") {
                      return (
                        <i class="fas fa-smog"></i>
                      )
                    } else {
                      return (
                        <div></div>
                      )
                    }
                  })()}
                </div>
              </div>
            </div>
          ) : null}
        </main>
      </div>
    </>
  )
}

export default Weather
