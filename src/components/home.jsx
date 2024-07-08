
import { Box, Button, Container, Typography } from '@mui/material';
import { Navbar } from './Navbar';




export const Home = () => {

   return (
      <>
         <Navbar />

         <Container maxWidth="sm" style={{ marginTop: '100px', alignItems: 'center', justifyContent: 'center' }} >
            <Typography variant='h2' align='center' gutterBottom>Forcast for weather</Typography>
            <Typography variant='h6' align='center' gutterBottom>This weather forecast app allows users to search for weather conditions in any city, displaying details like temperature, wind speed, humidity, and daily chance of rain. It includes responsive design elements for an optimal user experience across devices. Additionally, the app visualizes rain probability over a week using a line chart.</Typography>
            <Box display="flex" gap="10px" alignItems="center" justifyContent="center" marginTop='20px'>
               <Button href='https://github.com/Arjun8jadhav/Weather_forecast' variant='contained'>Source Code</Button>
               <Button href='/main' variant='contained'>Get Started</Button>
            </Box>
         </Container>

      </>

   );
};
