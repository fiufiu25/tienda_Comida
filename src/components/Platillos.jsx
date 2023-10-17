import { Box } from '@mui/material'
import React, { useState } from 'react'

export default function Platillos() {
    const platos=[
        {name:"platillos"},{name:"Pizzas"},{name:"Hamburguesas"},{name:"Bebidas"},{name:"Postres"}
    ]
    const [indice,setindice]=useState(0)
    const cambio=(index)=>{
 setindice(index)
    }
  return (
    <>
    <Box className="iconos_menu" >
    {
        platos.map((item,index)=>(

    <Box onClick={()=>cambio(index)} key={index} className={`${indice==index?"active":""}`}>
        <p>{item.name}</p>
    </Box>
   
   
        ))
    }
    
    </Box>
    </>
  )
}
