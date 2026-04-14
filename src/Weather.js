import React from "react";
import axios from "axios";

export default function Weather(props) {
   
    function handleResponse(response) {
      alert(
        `The weather in ${response.data.name} is ${response.data.main.temp}℃`
);
}
let apiKey = "25fb3dce5bdd0825104d2cf9360c6708";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(handleResponse);
return (
<div>
    <h1>Hello World</h1>
</div>
)
}