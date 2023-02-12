
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': SECRET.RapidAPIKey,
		'X-RapidAPI-Host': SECRET.RapidAPIHost
	}
};
const getWeather = (city)=>{
	cityName.innerHTML=city
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city, options)
	.then(response => response.json())
	.then(response => {
		console.log(response)

		
		//temp.innerHTML = response.temp
		temp2.innerHTML = response.temp
		feels_like.innerHTML = response.feels_like
		//humidity.innerHTML = response.humidity
		humidity2.innerHTML = response.humidity
		min_temp.innerHTML = response.min_temp
		max_temp.innerHTML = response.max_temp
		//wind_speed.innerHTML = response.wind_speed
		wind_speed2.innerHTML = response.wind_speed
		wind_degrees.innerHTML = response.wind_degrees
		sunrise.innerHTML = response.sunrise
		sunset.innerHTML = response.sunset

	})
	.catch(err => console.error(err))

}
submit.addEventListener("click",(e)=>{
	e.preventDefault()
	getWeather(city.value)
})

getWeather("New Delhi")

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Washington',options)
	.then(response => response.json())
	.then(response => {
		console.log(response)
		tt1.innerHTML = response.temp
		f1.innerHTML = response.feels_like
		h1.innerHTML = response.humidity
		min_t1.innerHTML = response.min_temp
		max_t1.innerHTML = response.max_temp
		wind_sp1.innerHTML = response.wind_speed
		wind_deg1.innerHTML = response.wind_degrees
        sr1.innerHTML = response.sunrise
		ss1.innerHTML = response.sunset
		
	})
    .catch(err => console.error(err))

   

    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Tokyo',options)
	.then(response => response.json())
	.then(response => {
		console.log(response)
		tt3.innerHTML = response.temp
		f3.innerHTML = response.feels_like
		h3.innerHTML = response.humidity
		min_t3.innerHTML = response.min_temp
		max_t3.innerHTML = response.max_temp
		wind_sp3.innerHTML = response.wind_speed
		wind_deg3.innerHTML = response.wind_degrees
        sr3.innerHTML = response.sunrise
		ss3.innerHTML = response.sunset
		
	})
    .catch(err => console.error(err))

    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Paris',options)
	.then(response => response.json())
	.then(response => {
		console.log(response)
		tt4.innerHTML = response.temp
		f4.innerHTML = response.feels_like
		h4.innerHTML = response.humidity
		min_t4.innerHTML = response.min_temp
		max_t4.innerHTML = response.max_temp
		wind_sp4.innerHTML = response.wind_speed
		wind_deg4.innerHTML = response.wind_degrees
        sr4.innerHTML = response.sunrise
		ss4.innerHTML = response.sunset
		
	})
    .catch(err => console.error(err))

    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Sydney',options)
	.then(response => response.json())
	.then(response => {
		console.log(response)
		tt5.innerHTML = response.temp
		f5.innerHTML = response.feels_like
		h5.innerHTML = response.humidity
		min_t5.innerHTML = response.min_temp
		max_t5.innerHTML = response.max_temp
		wind_sp5.innerHTML = response.wind_speed
		wind_deg5.innerHTML = response.wind_degrees
        sr5.innerHTML = response.sunrise
		ss5.innerHTML = response.sunset
		
	})
    .catch(err => console.error(err))






