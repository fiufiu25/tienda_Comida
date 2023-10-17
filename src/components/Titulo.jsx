import { Box, Typography } from '@mui/material'
import React from 'react'

export default function Titulo({dark}) {
  return (
    <>
    <Box>
      <Typography className='titulomenu' variant='h5' sx={{fontSize:"2.5rem",fontWeight:900,m:2,textAlign:"center",color:`${dark?"black":"white"}`}}>Nuestro <span className='menu'>Menú</span></Typography>
    </Box>
    </>
  )
}
