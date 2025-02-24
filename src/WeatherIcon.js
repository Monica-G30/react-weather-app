import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

export default function WeatherIcon(props) {
  const codeMapping = {
    "01d": "CLEAR_DAY",
    "01n": "CLEAR_NIGHT",
    "02d": "PARTLY_CLOUDY_DAY",
    "02n": "PARTLY_CLOUDY_NIGHT",
    "03d": "CLOUDY_DAY",
    "03n": "CLOUDY_NIGHT",
    "04d": "RAIN_DAY",
    "04n": "RAIN_NIGHT",
    "09d": "SLEET_DAY",
    "09n": "SLEET_NIGHT",
    "010d": "SNOW_DAY",
    "010n": "SNOW_NIGHT",
    "011d": "WIND_DAY",
    "011n": "WIND_NIGHT",
    "013d": "FOG_DAY",
    "013n": "FOG_NIGHT",
    "050d": "THUNDERSTORM_DAY",
    "050n": "THUNDERSTORM_NIGHT",
  };

  return (
    <ReactAnimatedWeather
      icon={codeMapping[props.code]}
      color="black"
      size={40}
      animate={true}
    />
  );
}
