import React from "react";

function TImeandLocation(props) {
  return (
    <div>
      <div className="flex items-center justify-center my-3">
        <p className="text-white text-xl font-normal">
          {/* Tuesday, 31 March 2022 | Local time: 12:00 PM */}
          {new Date(props.weather.dt * 1000).toLocaleDateString("en-US", {
            day: "2-digit",
            month: "short",
            year: "numeric",
          })}
        </p>
      </div>

      <div className="flex items-center justify-center my-3">
        <p className="text-white text-3xl font-medium">
          {props.weather.name + ", " + props.weather.country}
        </p>
      </div>
    </div>
  );
}

export default TImeandLocation;
