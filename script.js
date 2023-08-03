let city =document.getElementById("city");
let image =document.getElementById("img");
let type =document.getElementById("type");
let temp =document.getElementById("temp");
let input =document.getElementById("inp");
let humidity =document.getElementById("humidity");
let windspeed =document.getElementById("windspeed");
let API_key ="5cf04e5edb78f4494004601a2e30e234";

const data =async function(search){
    let getdata = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${API_key}&units=metric`)

    let jsondata = await getdata.json();

    console.log(jsondata);


    city.innerHTML =jsondata.name;
    temp.innerHTML =Math.floor(jsondata.main.temp)+'℃';
    type.innerHTML =jsondata.weather[0].main;
    windspeed.innerHTML =jsondata.wind.speed+"km/h";
    humidity.innerHTML =jsondata.main.humidity+"%";

    if(type.innerHTML == "Clouds"){
        image.src ="cloud.png";
    }else if(type.innerHTML == "Clear"){
        image.src ="clear.png";
    } else if(type.innerHTML == "Snow"){
        image.src ="snow.png";
    }else if(type.innerHTML == "Haze"){
            image.src ="haze.png";
        }else if(type.innerHTML == "Rain"){
            image.src ="rain.png";
        }else if(type.innerHTML == "Thunderstorm"){
            image.src ="strom.png";
}
}
function myfun(){
    search =input.value;

   data(search);

}





