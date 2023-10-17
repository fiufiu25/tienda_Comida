import React, { useEffect, useState } from 'react'
import Cards from './components/Cards'
import { Box, IconButton} from '@mui/material'
import Modal from './components/modal'
import Navegacion from './components/Navbar'
import Titulo from './components/Titulo'
import Platillos from './components/Platillos'
import NightlightRoundIcon from '@mui/icons-material/NightlightRound';
import Brightness5Icon from '@mui/icons-material/Brightness5';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux'
import Compras from './components/compras'
export default function App() {
const [dark,setdark]=useState(true)
   useEffect(()=>{
    document.body.style.backgroundColor=`${
      dark?"ghostwhite":"#242424"
    }`
   },[dark])
  return (
    <>
    <header>
      <nav>
      <Navegacion  dark={dark}/>
      </nav>
   
    
    </header>
    <Box sx={{pt:10,m:3}}>

      <Titulo dark={dark}/>
      <Box sx={{my:5}}>
      <Platillos/>
      </Box>
     
    </Box>
    <Box className="card-items">
    <Cards dark={dark}/>
  
    </Box>
    <IconButton sx={{position:"fixed",top:80,right:10}} onClick={()=>setdark(!dark)}>
    {
      dark?(

    <NightlightRoundIcon/>

      )
      :
      (
      
    <Brightness5Icon sx={{color:"white"}}/>
  
      )
    }
    </IconButton>
     <Compras dark={dark}/>
    </>
  )
}
