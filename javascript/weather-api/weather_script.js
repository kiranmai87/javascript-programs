const apiUrl="http://api.openweathermap.org/data/2.5/weather?q="
const apiKey="d437b05fe7ddf85d468799d14758b7ed"
// const apiKey="12a15334ee2ff243c9bf080ae0666f77"
// const apiUrl="https://api.openweathermap.org/data/2.5/weather?&units=metric&q="

async function fun(e){
    const response=await fetch(apiUrl+e+`&appid=${apiKey}`)
    const data=await response.json()
    console.log(data)
    const today=new Date()
    var days=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']

    console.log(data)
    document.getElementById('city').innerHTML=data.name;
    document.getElementById('temp').innerHTML=data.main.temp+" ºC";
    document.getElementById('humidity').innerHTML=data.main.humidity+" %";
    document.getElementById('wind').innerHTML=data.wind.speed+" km/hr";
    document.getElementById('weather').innerHTML=data.weather[0].description;
    document.getElementById('lat').innerHTML=`<h4>latitude</h4>`+data.coord.lat;
    document.getElementById('lon').innerHTML="<h4>longitude</h4>"+data.coord.lon;
    document.getElementById('time').innerHTML=today.toLocaleTimeString(); 
    document.getElementById('day').innerHTML=days[today.getDay()]; 
    if(data.weather[0].main=="Clear"){
        weatherImg.src="images/clear-sky.png"
    }else if(data.weather[0].main=="Haze"){
        weatherImg.src="images/fog.png"
    }else if(data.weather[0].main=="Clouds"){
        weatherImg.src="images/clouds.png"
    }else if(data.weather[0].main=="Sunny"){
        weatherImg.src="images/sun.png"
    }else if(data.weather[0].main=="Mist"){
        weatherImg.src="images/mist.png"
    }else if(data.weather[0].main=="Rain"){
        weatherImg.src="images/heavy-rain.png"
    }
}
function search(){
    fun(inputcity.value);
    
    const Seterror=(element,message)=>{
        const inputText=element.parentElement
        const errorDisplay=inputText.querySelector('.error')
        errorDisplay.innerText=message
    }
    const SetSuccess=(element)=>{
        const inputText=element.parentElement
        const errorDisplay=inputText.querySelector('.error')
        errorDisplay.innerText=""
    }
    if(inputcity.value==""){
        //Seterror(inputcity,"* Required City Name")
        alert("enter city")
    }else{
        SetSuccess(inputcity)
        displayContent.classList.add('show')
    }
}
