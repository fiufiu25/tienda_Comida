import { Box } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { mas, menos } from '../slices/tienda/tiendaSlice';
export default function Contadonres({dark,cant}) {
    const dispatch=useDispatch();
    const disminuir=(item)=>{
      dispatch(menos(item))
    }
    const aumentar=(item)=>{
   dispatch(mas(item))
    }
  
  return (
    <>
    
            <Box  sx={{display:"flex",gap:1,p:1,pt:2,alignItems:"center",justifyContent:"center"}}>
            <Box  onClick={()=>disminuir(cant.id)} sx={{bgcolor:`${dark?"#c4c4c4":"#3E3E3E"}`,width:20,height:20,color:"white",fontSize:18,display:"grid",placeItems:"center" ,cursor:"pointer"}} className="btnicon">
                <span>-</span> 
                </Box>
               <Box sx={{color:`${dark?"black":"white"}`}}  >{cant.cantidad}</Box>
               <Box onClick={()=>aumentar(cant.id)} sx={{bgcolor:`${dark?"#c4c4c4":"#3E3E3E"}`,width:20,height:20,color:"white",fontSize:18,display:"grid",placeItems:"center",cursor:"pointer"}} className="btnicon">
                <span>+</span> 
                </Box>
        </Box>
    
       
    </>
  )
}
