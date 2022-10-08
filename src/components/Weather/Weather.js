import styles from "./Weather.module.css";

const Weather = (props) => {
  const tempInDegree = Math.round(props.weather?.main?.temp - 273.15);
  return (
    <div className={styles["weather-result"]}>
      <h3>
        {props.weather.name}, {props.weather.sys.country}
      </h3>
      <small>
        <i>Wednesday, 31 August 2022</i>
      </small>
      <p className={styles.degrees}>{tempInDegree} °C</p>
      <h3>{props.weather.weather[0].main}</h3>
    </div>
  );
};

export default Weather;
