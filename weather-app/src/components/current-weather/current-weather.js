import "./current-weather.css"

const CurrentWeather = () => {
    return (
        <div className="weather">
            <div className="top">
                <div>
                    <p className="city">Belgrade</p>
                    <p className="weather-desciption">Sunny</p>
                </div>
                <img alt="weather" className="weather-icon" src="icons/01d.png"></img>
            </div>

            <div className="bottom">
                <p className="temperature">18℃</p>
                <div className="details">
                    <div className="parameter-row">
                        <span className="parameter-label top">Details</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-row">Feels like</span>
                        <span className="parameter-row">Feels like</span>    
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-row">Wind</span>
                        <span className="parameter-row">2 m/s</span>    
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-row">Humidity</span>
                        <span className="parameter-row">15%</span>    
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-row">Pressure</span>
                        <span className="parameter-row">15 hPa</span>    
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CurrentWeather