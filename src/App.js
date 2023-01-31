import "./App.css";
import TopButtons from "./components/TopButtons";
import Inputs from "./components/Inputs";
import TImeandLocation from "./components/TImeandLocation";
import TemperatureAndDetails from "./components/TemperatureAndDetails";
import getFormattedWeatherData from "./services/WeatherServices";
import { useEffect, useState } from "react";

function App() {
  const [querry, setQuerry] = useState({ q: "Nagpur" });
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);
  console.log(weather);
  useEffect(() => {
    const fetchWeatherData = async () => {
      await getFormattedWeatherData({ ...querry, units }).then((data) => {
        setWeather(data);
      });
    };
    fetchWeatherData();
  }, [querry, units]);

  return (
    <div
      className="text-center top-0 bottom-0 mt-4 py-5 px-4  bg-gradient-to-br from-cyan-700 to-blue-700 h-fit
     shadow-xl shadow-gray-400  md:mx-auto md:max-w-screen-md md:px-32 "
    >
      <TopButtons setQuerry={setQuerry} />
      <Inputs setQuerry={setQuerry} units setUnits={setUnits} />
      {weather && (
        <div>
          <TImeandLocation weather={weather} />
          <TemperatureAndDetails weather={weather} />
        </div>
      )}
    </div>
  );
}

export default App;
