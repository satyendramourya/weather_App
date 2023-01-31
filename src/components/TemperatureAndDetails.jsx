import React from "react";
import {
  UilArrowUp,
  UilArrowDown,
  UilTemperature,
  UilTear,
  UilWind,
  UilSun,
  UilSunset,
} from "@iconscout/react-unicons";
import { iconUrlfromCode } from "../services/WeatherServices";

function TemperatureAndDetails(props) {
  return (
    <div>
      <p className="text-cyan-300 font-bold"> {props.weather.details}</p>

      <div className="flex flex-col md:flex-row items-center justify-between text-white py-3">
        <img
          src={`http://openweathermap.org/img/wn/${props.weather.icon}@2x.png`}
          className="w-20 "
          alt=""
        />
        <p className=" text-5xl font-medium">{props.weather.temp}⁰</p>

        <div className="flex flex-col space-y-2 my-6">
          <div className="flex items-center justify-center font-light text-sm">
            <UilTemperature size={18} className="mr-2" />
            Real feel:
            <span className="font-medium ml-1">
              {props.weather.feels_like}⁰
            </span>
          </div>

          <div className="flex items-center justify-center font-light text-sm">
            <UilTear size={18} className="mr-2" />
            Humidity:
            <span className="font-medium ml-1">{props.weather.humidity}%</span>
          </div>
          <div className="flex items-center justify-center font-light text-sm">
            <UilWind size={18} className="mr-2" />
            Wind:
            <span className="font-medium ml-1">{props.weather.temp} km/hr</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-9 justify-evenly items-center py-3 space-x-2 text-white text-sm">
        <div className="grid grid-cols-3 gap-2 justify-center md:justify-center md:items-center items-center">
          <UilSun />
          <p className="font-light col-span-2">
            Rise:
            <span className="ml-1 font-medium">
              {new Date(props.weather.sunrise * 1000).toLocaleTimeString(
                "en-US",
                {
                  hour: "2-digit",
                  minute: "2-digit",
                  hour12: true,
                }
              )}
            </span>
          </p>
        </div>

        {/* <p className="font-light">|</p> */}
        <div className="grid grid-cols-3 gap-6 md:justify-center md:items-center">
          <UilSun />
          <p className="font-light col-span-2">
            Set:
            <span className="ml-1 font-medium">
              {new Date(props.weather.sunset * 1000).toLocaleTimeString(
                "en-US",
                {
                  hour: "2-digit",
                  minute: "2-digit",
                  hour12: true,
                }
              )}
            </span>
          </p>
        </div>

        {/* <p className="font-light">|</p> */}
        <div className="grid grid-cols-3 gap-6 md:justify-center md:items-center">
          <UilSun />
          <p className="font-light col-span-2">
            High:
            <span className="ml-1 font-medium"> {props.weather.temp_max}⁰</span>
          </p>
        </div>
        {/* <p className="font-light">|</p> */}

        <div className="grid grid-cols-3 gap-6 md:justify-center md:items-center">
          <UilSun />
          <p className="font-light col-span-2">
            Low:
            <span className="ml-1 font-medium">{props.weather.temp_min}⁰</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default TemperatureAndDetails;
