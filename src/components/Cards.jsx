import { Box, Button, Typography } from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import React, { useState } from 'react'

import Modal from './modal';
import { useSelector ,useDispatch} from 'react-redux';
import Contadonres from './Contadonres';
import { recibirdatos } from '../slices/tienda/tiendaSlice';


export default function Cards({dark}) {
const dispatch=useDispatch()

const {data}=useSelector(item=>item.tienda)

  const [carrito,setcarrito]=useState("")
 
 const [modal,setmodal]=useState(false)
 const modalabrir=(item)=>{
   dispatch(recibirdatos(item))
   setmodal(!modal)
 }
  return (
    
   <>
   
{
    data.map((item)=>(
<Box  sx={{width:"240px",borderRadius:3,bgcolor:`${dark?"white":"black"}`,display:"flex",flexDirection:"column"}} key={item.id} className="data">
 <Box sx={{width:"100%",height:120,overflow:"hidden"}}>
  <Box component={"img"}  src={item.img} width={"100%"} height={"100%"} sx={{objectFit:"cover"}} />
 </Box>
 <Box sx={{paddingX:2 }}>
 <Box>
   <Typography variant='h6' sx={{fontWeight:900,py:1,textAlign:"center",color:`${dark?"black":"white"}`}}> {item.nombre}</Typography>
   <Typography  variant='body2' sx={{fontSize:13}} className='letras'>{item.descripcion}</Typography>
 </Box>
 <Box sx={{display:"flex",justifyContent:"space-around",alignItems:"center",flexGrow:1}}>
     <Box  sx={{color:"orangered",fontWeight:900,fontSize:20}}>
        ${item.precio}
     </Box>
<Contadonres cant={item} dark={dark}/>
 </Box>

 </Box>
<Box sx={{py:1,px:2,flexGrow:1,pb:2}}>
<Button variant='contained'  onClick={()=>modalabrir(item)} sx={{width:"100%",fontSize:12,p:1.2,fontWeight:900,borderRadius:2 }} size="small" startIcon={<ShoppingCartIcon/>} color="warning">Añadir al carrito</Button>
</Box>
 
</Box>

    ))
 
}
  
  {
    modal&&
    <Modal dark={dark} carrito={carrito} modal={modal} setcarrito={setcarrito}  setmodal={setmodal}/>
  }
   </>
  )
}
