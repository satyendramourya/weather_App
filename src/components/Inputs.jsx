import React, { useState } from "react";
import { UilSearchAlt, UilLocationPinAlt } from "@iconscout/react-unicons";

function Inputs(props) {
  const [city, setCity] = useState("");

  const fecthCityWeather = async () => {
    if (city != "") props.setQuerry({ q: city });
  };

  const changeUnitsTo = (e) => {
    const unitName = e.currentTarget.name;
    if (unitName != props.units) {
      props.setUnits(unitName);
    }
  };

  const currentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        props.setQuerry({
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        });
      });
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  };

  return (
    <div className="flex items-center justify-center my-6">
      <div className="flex flex-row w-3/4 items-center justify-center space-x-4">
        <input
          type="text"
          placeholder="search for city..."
          className="text-xl font-light p-2 w-full shadow-xl placeholder:lowercase placeholder:placeholder-gray-500 placeholder:font-light placeholder:text-xl rounded-md outline-lime-50 capitalize"
          onChange={(e) => setCity(e.target.value)}
        />
        <UilSearchAlt
          color={"white"}
          size={35}
          className="transition cursor-pointer ease-out hover:scale-125"
          onClick={fecthCityWeather}
        />
        <UilLocationPinAlt
          color={"white"}
          size={35}
          className="transition cursor-pointer ease-out hover:scale-125"
          onClick={() => {
            currentLocation();
          }}
        />
      </div>
      <div className="flex flex-row w-1/4 items-center justify-center space-x-4">
        <button
          name="metric"
          className="text-xl text-white  font-medium hover:scale-125"
          onClick={changeUnitsTo}
        >
          ⁰C
        </button>
        <p className="text-xl text-white font-medium">|</p>
        <button
          name="imperial"
          className="text-xl text-white font-medium hover:scale-125"
          onClick={changeUnitsTo}
        >
          ⁰F
        </button>
      </div>
    </div>
  );
}

export default Inputs;
