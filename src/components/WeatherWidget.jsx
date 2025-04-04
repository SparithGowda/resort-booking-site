import { useEffect, useState } from "react";

const WeatherWidget = () => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(async (position) => {
      const { latitude, longitude } = position.coords;
      const apiKey = "9ed4c9b5092ff37127e7a33bc6df8086";  // Replace with your actual API key
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKey}`;
      
      try {
        const response = await fetch(url);
        if (!response.ok) throw new Error("Failed to fetch weather data");
        const data = await response.json();
        setWeather(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    });
  }, []);

  if (loading) return <p>Loading weather...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!weather) return null;

  return (
    <div className="hidden md:block bg-gradient-to-br from-[#3a3b3c] to-[#4a4b4d] px-6 py-1 rounded full">

      <h3 className="text-white font-bold">{weather.name}</h3>
      {/* <p>{weather.weather[0].description}</p> */}
      <p className="text-white">{Math.round(weather.main.temp)}°C</p>
    </div>
  );
};

export default WeatherWidget;
