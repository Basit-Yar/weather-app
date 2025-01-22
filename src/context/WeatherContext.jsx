import { createContext, useContext, useState} from "react";

const WeatherContext = createContext();

export const WeatherContextProvider = (props) => {

    const [searchCity, setSearchCity] = useState("Bhopal");
    const [isKelvin, setIsKelvin] = useState(true);

    return (
        <WeatherContext.Provider value={{searchCity, setSearchCity, isKelvin, setIsKelvin}}>
            {props.children}
        </WeatherContext.Provider>
    );
}

export const useWeather = () => {
    return useContext(WeatherContext);
}