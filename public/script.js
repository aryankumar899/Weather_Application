

//api=https://api.openweathermap.org/data/2.5/weather?q=daltonganj&appid=76a1440d984a1c679f46673969c2ab79&units=metric
const apikeys = "&appid=76a1440d984a1c679f46673969c2ab79"
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric"
const searchBox=document.querySelector(".searchBar")
const searchBtn=document.querySelector(".button")

async function checkWeather(city) {
    const response = await fetch(apiUrl + apikeys + `&q=${city}`)
    var data = await response.json()
    console.log(data)
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"°C"
    document.querySelector(".city").innerHTML=data.name
    document.querySelector(".humidity").innerHTML=data.main.humidity+"%"
    document.querySelector(".speed").innerHTML=data.wind.speed+"km/h"
    console.log(temp,city,humidity,speed)

}

console.log(searchBox)


searchBtn.addEventListener("click",function(){
    checkWeather(searchBox.value)

})