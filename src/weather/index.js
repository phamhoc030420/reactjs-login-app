import { React, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Input, Button } from 'reactstrap';
import './weather.scss'
const api = {
    key: 'a556822ada44025f13df7dd229cfdd30',
    base: 'https://api.openweathermap.org/data/2.5/'
}
function Weather() {
    const [query, setQuery] = useState('');
    const [weather, setWeather] = useState({
        "coord": {
            "lon": 105.8412,
            "lat": 21.0245
        },
        "weather": [
            {
                "id": 804,
                "main": "Clouds",
                "description": "overcast clouds",
                "icon": "04n"
            }
        ],
        "base": "stations",
        "main": {
            "temp": 21,
            "feels_like": 21.53,
            "temp_min": 21,
            "temp_max": 21,
            "pressure": 1013,
            "humidity": 91,
            "sea_level": 1013,
            "grnd_level": 1012
        },
        "visibility": 10000,
        "wind": {
            "speed": 4.13,
            "deg": 121,
            "gust": 8.53
        },
        "clouds": {
            "all": 87
        },
        "dt": 1643205632,
        "sys": {
            "type": 1,
            "id": 9308,
            "country": "VN",
            "sunrise": 1643153714,
            "sunset": 1643193760
        },
        "timezone": 25200,
        "id": 1581130,
        "name": "Hanoi",
        "cod": 200
    });
    const history = useHistory();
    const search = event => {
        if (event.key === 'Enter') {
            fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
                .then(res => res.json())
                .then(result => {
                    setWeather(result);
                    setQuery('');
                    console.log(result);
                })

        }
    }

    const handleDate = (item) => {
        let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        let day = days[item.getDay()];
        let date = item.getDate();
        let month = months[item.getMonth()];
        let year = item.getFullYear();
        return `${day} ${date} ${month} ${year}`;
    }
    const handleHome = () => {
        history.push('photos');
    }
    return (<>
        <div className={(typeof weather.main != 'undefined') ?
            (weather.main.temp > 10 ? 'app' : 'cool')
            : 'app'}>

            <main>
                <h3 style={{ marginLeft: 10, marginTop: 5, cursor: 'pointer' }} className='home' onClick={handleHome}>Home</h3>
                <div className='search-box'>
                    <Input
                        type='text'
                        placeholder='Search'
                        className='search-bar'
                        onChange={e => setQuery(e.target.value)}
                        onKeyPress={search}
                        value={query}
                    />

                </div>
                {(typeof weather.main != 'undefined') ?
                    <>
                        <div className='box'>
                            <div className='location'>
                                {weather.name} - {weather.sys.country}
                            </div>
                            <div className='date'>
                                {handleDate(new Date())}
                            </div>

                        </div>
                        <div className='weather-box'>
                            <div className='temp'>
                                {Math.round(weather.main.temp)} &#8451;
                                <h6 className='humidity'> <i className="fas fa-tint"></i> {weather.main.humidity} %</h6>

                            </div>
                            <div className='weather'>
                                {weather.weather[0].main}
                            </div>
                        </div>
                    </> : (
                        <div className='error'>
                            Error
                        </div>
                    )}

            </main>
        </div>
    </>)
}
export default Weather;