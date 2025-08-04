let currentCity=`Kyiv`
let units=`metric`
const weatherCity=document.querySelector(`.weather_city`)
const weatherDayTime=document.querySelector(`.weather_daytime`)
const forecast=document.querySelector(`.forecast`)
const temperature=document.querySelector(`.temperature`)
const weatherMinMax=document.querySelector(`.weather_minmax`)
const realFeel=document.querySelector(`.real_feel`)
const humidity=document.querySelector(`.humidity`)
const wind=document.querySelector(`.wind`)
const pressure=document.querySelector(`.pressure`)
document.querySelector(`.weather_search`).addEventListener(`submit`,async(e)=>{
    e.preventDefault()
    const searchInput=document.querySelector(`.weather_search_form`).value
    if(searchInput){
        currentCity=searchInput
        await getDataWeather()
        document.querySelector(`.weather_search_form`).value=``
    }
})
async function getDataWeather(){
    const API_KEY = '64f60853740a1ee3ba20d0fb595c97d5';
    const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${currentCity}&appid=${API_KEY}&units=${units}`;
    try {
        const response=await fetch(API_URL)
        if(!response.ok){
            throw new Error(`City not found.`)
        }
        const data=await response.json()
        weatherCity.innerHTML=`${data.name}`
        temperature.innerHTML=`${data.main.temp.toFixed()}&#176;`
        weatherMinMax.innerHTML=`<p>Min:${data.main.temp_min.toFixed()}&#176;</p><p>Max:${data.main.temp_max.toFixed()}&#176;</p>`
    } catch (error) {
        
    }
}
getDataWeather()