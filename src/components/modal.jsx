import { Box, Button, Typography } from '@mui/material'
import React, { useState } from 'react'
import Contadonres from './Contadonres'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Swal from 'sweetalert2'
import { useSelector,useDispatch } from 'react-redux';
import { aumentar, descripcion, disminuir, enviardata } from '../slices/tienda/tiendaSlice';

export default function Modal({dark,modal,setmodal}) {
  const dispatch=useDispatch()
  const [desc,setDes]=useState("")

   const  {carrito}=useSelector(state=>state.tienda)
 
    const [leer,setleer]=useState()
   const leerdescripcion=(e)=>{
    setDes(e.target.value)
  
    dispatch(descripcion(desc))

   }
    const enviar=(item)=>{
     
        Swal.fire({
            position: "center",
            icon: 'success',
            title: 'agregado carrito con exito',
            showConfirmButton: false,
            timer: 1500
          })
          setTimeout(()=>{
            setmodal(!modal)    
          },1500)
         
      dispatch(enviardata(item))
        
    }
    

    const mas=(carrito)=>{
         dispatch(aumentar(carrito))
          
    }
    const menos=(carrito)=>{
      dispatch(disminuir(carrito))
    }
  return (
    <>
    <Box sx={{bgcolor:`${dark?"rgba(0, 0, 0, 0.547)":"rgba(0, 0, 0, 0.850)"}`, position:"fixed",width:"100%",display:"grid",placeItems:"center",top:0,left:0,height:"100vh"}}>
<Box sx={{textAlign:"center",maxWidth:500,minWidth:300,bgcolor:`${dark?"white":"black"}`,padding:5,borderRadius:3}}> 
    <Box>
<Box component={"img"}  src={carrito.strMealThumb} width={300} height={200}/>
    </Box>
   <Box>
    <Typography variant='h6' sx={{fontWeight:900,pt:1,textAlign:"center",color:`${dark?"black":"white"}`}}>
        {carrito.strMeal}
    </Typography>
    <Typography  variant='body2' sx={{fontSize:14, color:`${dark?"black":"white"}`,my:2}}>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod velit eiu
    </Typography>
    <textarea className={`${dark?"textarea":"textarea-active"}`} id="note" cols="30" rows="10" placeholder="Agregar instrucciones" onChange={leerdescripcion}/>
   </Box>
   <Box sx={{py:1}}>
   <Box  sx={{display:"flex",gap:1,p:1,pt:2,alignItems:"center",justifyContent:"center"}}>
            <Box  onClick={()=>menos(carrito)} sx={{bgcolor:`${dark?"#c4c4c4":"#3E3E3E"}`,width:20,height:20,color:"white",fontSize:18,display:"grid",placeItems:"center" ,cursor:"pointer"}} className="btnicon">
                <span>-</span> 
                </Box>
               <Box sx={{color:`${dark?"black":"white"}`}}  >4</Box>
               <Box onClick={()=>mas(carrito)} sx={{bgcolor:`${dark?"#c4c4c4":"#3E3E3E"}`,width:20,height:20,color:"white",fontSize:18,display:"grid",placeItems:"center",cursor:"pointer"}} className="btnicon">
                <span>+</span> 
                </Box>
        </Box>
   </Box>
  
   <Box sx={{display:"flex",justifyContent:"center",alignItems:"center",gap:2}}>
<Button variant='contained' onClick={()=>enviar(carrito)} sx={{fontSize:12,p:1.2,fontWeight:900,borderRadius:2 }} size="small" startIcon={<ShoppingCartIcon/>} color="warning">Añadir al carrito</Button>
<Button variant='contained' onClick={()=>setmodal(!modal)} color="error" sx={{fontSize:12,p:1.2,fontWeight:900,borderRadius:2 }}>cerrar</Button>
</Box>
</Box>
    </Box>
    </>
  )
}
