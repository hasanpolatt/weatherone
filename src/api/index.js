// const api = {
//   key: `${process.env.REACT_APP_API_KEY}`,
//   base: `${process.env.REACT_APP_API_BASE}`,
// }

const api = {
  key: "3e517c47a7bc1e141e00e227fb69acd9",
  base: "https://api.openweathermap.org/data/2.5/",
}

const getWeather = (query, setQuery, setWeather) => {
  fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
    .then((res) => res.json())
    .then((result) => {
      setWeather(result)
      setQuery("")
      // console.log(result)
      if (result.cod === "404") {
        alert(result.message)
      }
    })
    .catch((err) => {
      console.log(err)
    })
}

export default getWeather
