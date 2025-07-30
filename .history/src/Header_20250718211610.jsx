import React, { useEffect, useState } from 'react';
import './Header.css';
import axios from 'axios';

export default function Header() {
    const [temperature, setTemperature] = useState(null);

    useEffect(() => {
        const fetchWeather = async () => {
            try {
                const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
                const response = await axios.get(
                  `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=Astana&lang=ru`
                );                

                const current = response.data.current;
                setTemperature(Math.round(current.temp_c));
            } catch (error) {
                console.error('Ошибка при получении погоды:', error);
            }
        };

        fetchWeather();

        const interval = setInterval(fetchWeather, 600000);
        return () => clearInterval(interval);
    }, []);

    return (
        <header className='header'>
            <div className='navbar--menu'>
                <div className='navbar-1'>
                    <div className='button-box'>
                        <a href="#">
                            <img src="/images/thumbs_up.png" alt="image" />
                            <p className='button'>Оставить отзыв</p>
                        </a>
                    </div>
                </div>
                <div className='navbar-2'>
                    <a href="#" className='logo-globe'><img src="/images/globe.png" alt="" /></a>
                    <a href="#" className='logo-person'><img src="/images/person.png" alt="" /></a>
                </div>
            </div>
            <div className='menu-2'>
                <div className='logo-flags'>
                    <a href="#" className='logo-russia'><img src="/images/russia.png" alt="" />6.4</a>
                    <a href="#" className='logo-usa'><img src="/images/usa.png" alt="" />516</a>
                    <a href="#" className='logo-euro'><img src="/images/euro.png" alt="" />604</a>
                </div>
                <div className='weather'>
                    {/* https://www.weatherapi.com/my/ - Получение ключа API только после регистрации */}
                    {temperature !== null ? (
                        <a
                            href="https://www.gismeteo.kz/weather-nur-sultan-5164/"
                            target="_blank"
                            rel="noopener noreferrer"
                            title="Нажмите, чтобы посмотреть прогноз на Gismeteo"
                        >
                            Сейчас +{temperature}°C
                        </a>
                    ) : (
                        <a href="#">Загрузка погоды...</a>
                    )}
                </div>
            </div>
        </header>
    );
}