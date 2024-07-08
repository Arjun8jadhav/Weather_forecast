
import { Box, Button, Container, Typography } from '@mui/material';// Ensure this path is correct
import axios from 'axios';
import { Navbar } from './Navbar';




export const Home = () => {

   return (
      <>
         <Navbar />

         <Container maxWidth="sm" style={{ marginTop: '100px', alignItems: 'center', justifyContent: 'center' }} >
            <Typography variant='h2' align='center' gutterBottom>Forcast for weather</Typography>
            <Typography variant='h5' align='center' gutterBottom>In this Project We are using weather API  for Providing current weather condition and Forcasting next 7 days</Typography>
            <Box display="flex" gap="10px" alignItems="center" justifyContent="center" marginTop='20px'>
               <Button href='/' variant='contained'>Source Code</Button>
               <Button href='/main' variant='contained'>Get Started</Button>
            </Box>
         </Container>

      </>

   );
};
