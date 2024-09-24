import { Box, Button, Typography } from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import React, { useEffect, useState } from 'react'
import { platos } from '../hooks/api.js';
import Modal from './modal';
import { useSelector ,useDispatch} from 'react-redux';
import Contadonres from './Contadonres';
import { recibirdatos } from '../slices/tienda/tiendaSlice';
import {  GridLoader } from 'react-spinners';


export default function Cards({dark}) {
  const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };
  
  const [loading,setLoading]=useState(false)
  const [datosComida,setdatosComida]=useState([])
  
  const {categoria}= useSelector(item=>item.tienda)

 useEffect(()=>{
  const platosComida=async()=>{
  try {
    setLoading(true)
    const datos= await platos(categoria)
    setdatosComida(datos)
  } catch (error) {
     console.log(error)
  }
   finally{
    setLoading(false)
   }
    
  }
  platosComida()
 },[categoria])

const dispatch=useDispatch()


  const [carrito,setcarrito]=useState("")
 
 const [modal,setmodal]=useState(false)
 const modalabrir=(item)=>{
   dispatch(recibirdatos(item))
   setmodal(!modal)
 }

  return (
    
   <>
 {
  loading?( <GridLoader

    color={"#36D7B7"}
    loading={loading}
    cssOverride={override}
    size={80}
    aria-label="Loading Spinner"
    data-testid="loader"
  />):(
    
    datosComida&&datosComida.map((item)=>(
      
   <Box  sx={{width:"240px",borderRadius:3,bgcolor:`${dark?"white":"black"}`,display:"flex",flexDirection:"column",overflow:"hidden"}} key={item.id} className="data">
    <Box sx={{width:"100%",height:120,overflow:"hidden"}}>
     <Box component={"img"}  src={item.strMealThumb} width={"100%"} height={"100%"} sx={{objectFit:"cover",overflow:"hidden"}} />
    </Box>
    <Box sx={{paddingX:2 }}>
    <Box>
      <Typography variant='h6' sx={{fontWeight:900,py:1,textAlign:"center",fontSize:16 ,color:`${dark?"black":"white"}`}}> {item.strMeal}</Typography>
      <Typography  variant='body2' sx={{fontSize:13}} className='letras'> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, maiores!</Typography>
    </Box>
    <Box sx={{display:"flex",justifyContent:"space-around",alignItems:"center",flexGrow:1}}>
        <Box  sx={{color:"orangered",fontWeight:900,fontSize:20}}>
        S/ 10.20
        </Box>
   <Contadonres cant={item} dark={dark}/>
    </Box>
   
    </Box>
   <Box sx={{py:1,px:2,flexGrow:1,pb:2}}>
   <Button variant='contained'  onClick={()=>modalabrir(item)} sx={{width:"100%",fontSize:12,p:1.2,fontWeight:900,borderRadius:2 }} size="small" startIcon={<ShoppingCartIcon/>} color="warning">Añadir al carrito</Button>
   </Box>
    
   </Box>
   
       ))
    
   
  )
 }  

  
  {
    modal&&
    <Modal dark={dark} carrito={carrito} modal={modal} setcarrito={setcarrito}  setmodal={setmodal}/>
  }
   </>
  )
}
