import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import { useSelector,useDispatch } from 'react-redux';

import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import { cantidadTotal, modificarstado, precioTotal } from '../slices/tienda/tiendaSlice';


export default function Navegacion({dark}) {
  

  const dispatch=useDispatch()
  const istienda=()=>{
    dispatch(modificarstado())
  }
  const {enviarcarrito,cTotal}=useSelector(state=>state.tienda)
 
 const totalCarrito = React.useMemo(() => {
  // Calcula la suma total a partir del carrito
  return enviarcarrito.reduce((acc, item) => acc + (item.cantidad * parseFloat(item.precio)), 0);
}, [enviarcarrito]); 
const totalcantidad = React.useMemo(() => {
  // Calcula la suma total de cantidades en el carrito
  return enviarcarrito.reduce((acc, item) => acc + item.cantidad, 0);
}, [enviarcarrito]); // dependencia: enviarcarrito
// Dispatch para enviar la cantidad total al store de Redux
dispatch(cantidadTotal(totalcantidad));
dispatch(precioTotal(totalCarrito))
  return (
    <>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{bgcolor:`${dark?"white":"black"}`,width:"100%"}}>
        <Toolbar sx={{display:"flex",justifyContent:"space-around",alignItems:"center"}} >
         <Typography variant='h4' sx={{color:"rgb(255, 136, 0)",fontWeight:900}}>LOGO</Typography>
          <Box sx={{display:"flex",gap:2,alignItems:"center"}}>
          <Typography variant="body1"  component="div" sx={{cursor:"pointer",color:"rgb(255, 136, 0)",fontWeight:500}}>
            Menu
          </Typography>
          <Typography variant="body1" component="div" sx={{cursor:"pointer",color:"rgb(255, 136, 0)",fontWeight:500}}>
            Contacto
          </Typography>
          </Box>
         
         <Box sx={{width:30,height:30,position:"relative",cursor:"pointer"}} onClick= {istienda}   >
            <ShoppingBagOutlinedIcon  sx={{width:30,height:30,color:`${dark?"black":"white"}`}}/>
            <Typography variant='body1' sx={{position:"absolute",bottom:-5,right:-5,bgcolor:"rgb(255,136,0)",width:20,height:20,borderRadius:"50%",fontSize:12,display:"grid",placeItems:"center",color:"black"
            ,fontWeight:700}} >{cTotal}</Typography >
            </Box>
        </Toolbar>
      </AppBar>
    </Box>
    
    </>
    
    
  );
}
