import { WbSunny } from '@mui/icons-material'
import { AppBar, CssBaseline, Toolbar, Typography } from '@mui/material'
import React from 'react'

export const Navbar = () => {
  return (
    <>
      <CssBaseline/>
        <AppBar>
         <Toolbar>
            <WbSunny/>
            <Typography variant='h6'>Weather Forcast</Typography>
         </Toolbar>
        </AppBar>
    </>
  )
}
