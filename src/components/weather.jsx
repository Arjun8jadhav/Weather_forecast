import {  useState } from 'react';
import { Navbar } from './Navbar';
import { Box, Button, Card, Container, Input, Typography } from '@mui/material';
import axios from 'axios';
import { prof } from '../assets/background/background';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import MyLocationIcon from '@mui/icons-material/MyLocation';
import './weather.css';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export const Weather = () => {
  const [start, setStart] = useState(false);
  const [arr, setArr] = useState([]);
  const [city, setCity] = useState(''); 
  const [bardat, setBardat] = useState([]);

  const handleInputChange = (event) => {
    setCity(event.target.value);
  };

  const weather = async () => {
    try {
      const app = await axios.get(
        `https://api.weatherapi.com/v1/forecast.json?key=16d9e62be23a4ebb8ff63139240607&q=${city}&days=7&aqi=no&alerts=no`
      );
      console.log(app.data);
      setArr(app.data);
      const rainChances = app.data.forecast.forecastday.map((data) => data.day.daily_chance_of_rain);
      setBardat(rainChances);
      setStart(true);
    } catch (error) {
      console.error('Error fetching weather data', error);
    }
  };

  const data = {
    labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7'],
    datasets: [
      {
        label: 'Daily Chance of Rain (%)',
        data: bardat,
        fill: false,
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
      },
    ],
  };

  return (
    <>
      <Navbar />
      <Container sx={{ marginTop: '100px', display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
        <Input
          type="text"
          placeholder="Enter City"
          value={city}
          onChange={handleInputChange}
        />
        <Button onClick={weather} variant="contained">
          Search
        </Button>
      </Container>

      {start && (
        <Container
          sx={{
            marginTop: '30px',
            display: 'flex',
            flexDirection: 'column',
            padding: '10px',
            alignItems: { xs: 'center', sm: 'flex-start' },
            justifyContent: 'center',
            marginLeft: { xs: '0', sm: '50px' },
            color: 'dark',
            fontFamily: 'monospace',
          }}
        >
          <Box display='flex' alignItems='center' gap='10px'>
            <MyLocationIcon />
            <Typography variant='h6'>Location Information</Typography>
          </Box>
          <Typography variant='body1'>City: {arr.location.name}</Typography>
          <Typography variant='body1'>Region: {arr.location.region}</Typography>
          <Typography variant='body1'>Country: {arr.location.country}</Typography>
          <Typography variant='body1'>Condition: {arr.current.condition.text}</Typography>
        </Container>
      )}

      <Container sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '20px', marginTop: '40px' }}>
        {start ? (
          <>
            <Card sx={{ display: 'flex', flexDirection: 'column', padding: '20px', width: '100%', maxWidth: '300px' }}>
              <Box sx={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                <Typography variant='h4'>{arr.current.temp_c}&#8451;</Typography>
                <img src={arr.current.condition.icon} alt="weather icon" />
              </Box>
              <p>Last updated: {arr.location.localtime}</p>
              <Typography variant='h6'>Sunrise: {arr.forecast.forecastday[0].astro.sunrise}</Typography>
              <Typography variant='h6'>Sunset: {arr.forecast.forecastday[0].astro.sunset}</Typography>
            </Card>

            <Card sx={{ display: 'flex', flexDirection: 'column', padding: '20px', width: '100%', maxWidth: '300px' }}>
              <Box sx={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                <Typography variant='h4'>Moon</Typography>
                <img style={{ width: '40px' }} src={prof.moon} alt="moon icon" />
              </Box>
              <p>Illumination: {arr.forecast.forecastday[0].astro.moon_illumination} %</p>
              <Typography variant='h6'>Moonrise: {arr.forecast.forecastday[0].astro.moonrise}</Typography>
              <Typography variant='h6'>Moonset: {arr.forecast.forecastday[0].astro.moonset}</Typography>
            </Card>

            <Card sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', width: '100%', maxWidth: '300px' }}>
              <Box sx={{ display: 'flex', gap: '10px' }}>
                <Typography variant='h4'>Winds</Typography>
                <img style={{ width: '50px' }} src={prof.winds} alt="winds icon" />
              </Box>
              <p>Speed: {arr.current.wind_kph} KPH</p>
            </Card>

            <Card sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', width: '100%', maxWidth: '300px' }}>
              <Box sx={{ display: 'flex', gap: '10px' }}>
                <Typography variant='h4'>Humidity</Typography>
                <img style={{ width: '50px' }} src={prof.humadity} alt="humidity icon" />
              </Box>
              <p>Estimate: {arr.forecast.forecastday[0].day.avghumidity} %</p>
            </Card>

            <Card sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', width: '100%', maxWidth: '300px' }}>
              <Box sx={{ display: 'flex', gap: '10px' }}>
                <Typography variant='h4'>Rain</Typography>
                <img style={{ width: '50px' }} src={prof.rain} alt="rain icon" />
              </Box>
              <p>Estimate: {arr.forecast.forecastday[0].day.avghumidity} %</p>
            </Card>

            <Box sx={{ width: '100%', maxWidth: '600px', marginTop: '20px' }}>
              <Line data={data} />
            </Box>
          </>
        ) : (
          <p>Enter your city name to get started</p>
        )}
      </Container>
    </>
  );
};
