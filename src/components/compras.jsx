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
     function formatearDetalle(detalle) {
      return detalle!=undefined ? `el detalle es ${detalle}` : "";
    }
    const enviarMesseger=()=>{
      const data=enviarcarrito.map(p => `4 ${p.strMeal}, el precio es S/ 40.80 `)
      const mensaje = `Buenas tardes, usted a pedido: ${data}.      el total es ${(enviarcarrito.length * 40.80).toFixed(2)}`;
      console.log(mensaje)
      const mensajeCodificado = encodeURIComponent(mensaje);
      const urlWhatsApp = `https://wa.me/${+51925221012}?text=${mensajeCodificado}`;
       window.location.href=urlWhatsApp
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
          <Box component={"img"} src={item.strMealThumb} width={100} height={70}/>
        </Box>
        <Box> 
   <Typography variant='body2'  sx={{fontWeight:900,fontSize:16,py:1,textAlign:"center",color:"black"}}>
    {item.strMeal.length>30?item.strMeal.slice(0,25)+"...":item.strMeal}
   </Typography>
   <Typography variant='body2' sx={{color:`${dark?"black":"white"}`}}>
    {`${item.detalle?"Nota:":""}`} {item.detalle}
   </Typography>
   <Box sx={{display:"flex",alignItems:"center",gap:1}}> 
   <Typography  sx={{fontSize:14}}>
     cantidad:4 
   </Typography>
   <Box   component={"span"} sx={{color:"orangered",fontWeight:900,fontSize:13}}>
        S/ 40.80
     </Box>
   </Box>
   
        </Box>
        <IconButton onClick={()=>eliminarcomida(item.idMeal)}><CloseIcon sx={{color:"rgb(255, 136, 0)"}}/> </IconButton>
      
    
        
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
            subtotal: ${(enviarcarrito.length * 40.80).toFixed(2)}
            </Typography>  
            <Typography sx={{fontWeight:900}}>
            Total:  ${(enviarcarrito.length * 40.80).toFixed(2)}
            </Typography> 
        <Button onClick={enviarMesseger} variant='contained'  sx={{ marginY:2}} startIcon={<WhatsAppIcon/>} color="success">
            Realizar pedido
        </Button>
                </Box>
    )
   }
  </Box>
  </>
  )
}
