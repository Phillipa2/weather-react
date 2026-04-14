import React, {useState} from "react";
import axios from "axios";
import {Grid} from "react-loader-spinner";

export default function Weather(props) {
   const [loading, setLoading] = useState(true);
   
    function handleResponse(response) {
      alert(
        `The weather in ${response.data.name} is ${Math.round(response.data.main.temp)}℃`
);
     setLoading(false);
}
if (loading) {
  let apiKey = "25fb3dce5bdd0825104d2cf9360c6708";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(handleResponse);
return (
  <Grid
visible={true}
height="80"
width="80"
color="#4d5ea9"
ariaLabel="grid-loading"
radius="12.5"
wrapperStyle={{}}
wrapperClass="grid-wrapper"
/>
);
}

}