import { useState } from "react";
import styles from "./App.css";
import SearchInput from "./components/SearchInput/SearchInput";
import Weather from "./components/Weather/Weather";

const API = {
  key: "b45788acdfaf42cf43e576e428f65b00",
  base: "https://api.openweathermap.org/data/2.5/",
};

function App() {
  const [appClass, setAppClass] = useState("default");
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});

  const search = (e) => {
    if (e.key === "Enter") {
      fetch(`${API.base}weather?q=${query}&appid=${API.key}`)
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
        })
        .then((result) => {
          setQuery("");
          setWeather(result);
          setAppClass(result.weather[0].main);
        })
        .catch((error) => {
          setWeather(null);
        });
    }
  };

  const queryHandler = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div className={`App ${appClass}`}>
      <SearchInput getQuery={queryHandler} search={search} />
      {typeof weather.main !== "undefined" && <Weather weather={weather} />}
    </div>
  );
}

export default App;
