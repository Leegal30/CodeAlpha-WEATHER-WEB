const apiKey="50a17e9de93bc15c1dcdf5c4a64a1458"
const apiUrl=`https://api.openweathermap.org/data/2.5/weather?units=metric&q=`;
const btn=document.getElementById("icon");
const input=document.getElementById("search")
let icon=document.getElementById("weather-icon")
console.log(input)
async function checkWheather(city){
    const response =await fetch(apiUrl+city+`&apikey=${apiKey}`);
    let data =await response.json();
    console.log(data);
    icon.style.visibility = "visible"
    document.querySelector("#city").innerHTML=data.name;
    document.querySelector("#weather").innerHTML=Math.round(data.main.temp)+"°C";
    document.querySelector(".humidity").innerHTML="Humidity="+data.main.humidity+"%";
    document.querySelector(".condition").innerHTML="Condition="+data.weather[0].main;
    let speed=Math.round(data.wind.speed*3.6);
    console.log(speed);
    document.querySelector(".speed").innerHTML="Windspeed="+speed+"km/h";
    if(data.weather[0].main=="Clouds"){
        icon.src="./images/cloudy.png"
    }
    else if(data.weather[0].main=="Rain"){
        icon.src="./images/rain.png"
    }
    else if(data.weather[0].main=="Clear"){
        icon.src="./images/sunny.png"
    }
    else if(data.weather[0].main=="Storm"){
        icon.src="./images/storm.png"
    }
    else if(data.weather[0].main=="Snow"){
        icon.src="./images/snowy.png"
    }
}
btn.addEventListener("click",()=>{
    checkWheather(input.value)
})