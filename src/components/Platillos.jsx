import { Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { fetchCategoria } from  "../hooks/api.js"
import { useDispatch } from 'react-redux'
import { titleCategoria } from '../slices/tienda/tiendaSlice.js'
export default function Platillos() {
    const dispatch=useDispatch()

    const [platos,setplatos]=useState("")
  
    useEffect(()=>{
        const traerdatos=async()=>{
          const datos= await fetchCategoria();
          
          setplatos(datos)
        }
        traerdatos()
        },[])
  
    const [indice,setindice]=useState(1)
    const cambio=(index)=>{
 setindice(index.idCategory)
  dispatch(titleCategoria(index.strCategory))
    }
  return (
    <>
    <Box className="iconos_menu" >
    {
       platos&& platos.map((item)=>(

    <Box onClick={()=>cambio(item)} key={item.idCategory} className={`${indice==item.idCategory?"active":""}`}>
        <p>{item.strCategory}</p>
    </Box>
   
   
        ))
    }
    
    </Box>
    </>
  )
}
