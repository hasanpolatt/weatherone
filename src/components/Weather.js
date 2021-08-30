import React, { useState } from "react"
import getWeather from "../api"
import dateBuilder from "../utils/index.js"

const Weather = () => {
  const [query, setQuery] = useState("")
  const [weather, setWeather] = useState({})

  const search = (evt) => {
    if (evt.key === "Enter") {
      getWeather(query, setQuery, setWeather)
    }
  }

  return (
    <>
      <div className={weather?.main?.temp > 16 ? "app warm" : "app cold"}>
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
                  {weather?.main?.temp > 16 ? (
                    <i className="fas fa-cloud-sun"></i>
                  ) : (
                    <i className="fas fa-cloud-sun-rain"></i>
                  )}
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
