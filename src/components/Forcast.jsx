import React from "react";

export default function Forcast({ title }) {
  return (
    <div>
      <div className="mt-6 justify-start flex items-center">
        <p className="text-white font-medium uppercase">{title}</p>
      </div>
      <hr className="my-2 " />
      <div className="flex flex-row items-center justify-between text-white">
        <div className="flex flex-col items-center justify-center">
          <p className="font-light text-sm"> 04:30 PM</p>
          <img
            src="http://openweathermap.org/img/wn/01d@2x.png"
            alt=""
            className="w-12 m-1 "
          />
          <p className="font-medium">22⁰</p>
        </div>
      </div>
    </div>
  );
}
