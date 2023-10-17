import { Box, Button, IconButton, Typography } from '@mui/material'
import React from 'react'
import CloseIcon from '@mui/icons-material/Close';
import { useSelector,useDispatch } from 'react-redux';
import { eliminar } from '../slices/tienda/tiendaSlice';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
export default function Compras({dark}) {
 const dispatch=useDispatch()
    const {abrirtienda,enviarcarrito,pTotal}=useSelector(state=>state.tienda)
     const eliminarcomida=(id)=>{
        dispatch(eliminar(id))
     }
  return (
  <>
  <Box sx={{maxWidth:320,minWidth:270,position:"fixed",top:80,bgcolor:"white",p:2,borderRadius:2 }} className= { `tienda ${abrirtienda?"tiendaActive":" "}` } >
    {
        enviarcarrito.length<1 ?(
            <Typography sx={{textAlign:"center"}}>
                El carrito esta vacio
            </Typography>
        ): (
          enviarcarrito.map(item=>(
            
 <Box sx={{display:"flex",gap:2,alignItems:"center"}} key={item.id} >
        <Box>
          <Box component={"img"} src={item.img} width={100} height={70}/>
        </Box>
        <Box> 
   <Typography sx={{fontWeight:900,py:1,textAlign:"center",color:`${dark?"black":"white"}`}}>
    {item.nombre}
   </Typography>
   <Typography variant='body2' sx={{color:`${dark?"black":"white"}`}}>
    {`${item.detalle?"Nota:":""}`} {item.detalle}
   </Typography>
   <Box sx={{display:"flex",alignItems:"center",gap:1}}> 
   <Typography>
     cantidad:{item.cantidad} 
   </Typography>
   <Box   component={"span"} sx={{color:"orangered",fontWeight:900,fontSize:20}}>
          ${item.precio}
     </Box>
   </Box>
   
        </Box>
        <IconButton onClick={()=>eliminarcomida(item.id)}><CloseIcon sx={{color:"rgb(255, 136, 0)"}}/> </IconButton>
      
    
        
    </Box>
   


          ))  
           )
        
    }

   {
    enviarcarrito.length<1?(
    ""
    ):(
        <Box sx={{textAlign:"center",py:1}} > 
        <Typography>
            subtotal: ${pTotal}
            </Typography>  
            <Typography sx={{fontWeight:900}}>
            Total: ${pTotal}
            </Typography> 
        <Button variant='contained' startIcon={<WhatsAppIcon/>} color="success">
            Realizar pedido
        </Button>
                </Box>
    )
   }
  </Box>
  </>
  )
}
