import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  data:[
    {id:1
        ,
        img: 'https://images.ctfassets.net/nj7g53ympxio/5iIlwojj2095aNpZMTGCNs/53d06c5e0d4430833f6b85802cd36cef/asparagus-steak-veal-steak-veal-361184.jpeg',
        cantidad:1,nombre: 'Carne Asada',
        descripcion: 'Una selección de cortes de carne asados a la parrilla',
        precio: 16
      },
      {id:2
        ,
        img: 'https://images.ctfassets.net/nj7g53ympxio/2kzDXL8MyHbeBKuv1W91CP/711658b4c4640e0d0dfb42b58f4a5f2d/239857.jpg',
        cantidad:1,nombre: 'Empanadas',
        descripcion: 'Empanadas rellenas con jugosa carne sazonada y condimentada',
        precio: 10
      },
      {id:3
        ,
        img: 'https://images.ctfassets.net/nj7g53ympxio/5G3lQkzWGuzF5Um3VDmFSH/d136c05117b3a9cdc50372d3a7fb685e/milanesas-de-ternera.jpg',
        cantidad:1,nombre: 'Milanesa',
        descripcion: 'Carne empanizada y frita, similar a una schnitzel, servida con ensalada',
        precio: 18
      },
      {id:4
        ,
        img: 'https://images.ctfassets.net/nj7g53ympxio/S8ZdzoBjGrWgTVc39E3Ao/a0cbcfa1279cff419d9d12b937261069/sorrentinos-rellenos-de-jamon-y-queso-con-salsa-marinara.jpg',
        cantidad:1,nombre: 'Sorrentinos',
        descripcion: 'Delicada pasta rellena similar a los raviolis, con un toque argentino. Estos suculentos discos de pasta están rellenos de una exquisita combinación de carnes, queso y especias, creando una explosión de sabores en cada mordisco',
        precio: 10
      },
      {id:5
        ,
        img: 'https://images.ctfassets.net/nj7g53ympxio/3zszO4NgP50iEuVaiPHDOl/7276d28441dcb14227f457acc6a37d94/6414e0e39512e.jpeg',    
        cantidad:1,nombre: 'Canelones',
        descripcion: 'Deliciosos canelones rellenos con suave carne de pavo',
        precio: 5
      },
      {id:6
        ,
        img: 'https://images.ctfassets.net/nj7g53ympxio/54hHZJ8pRq5vY9ix3vJBzz/d1a5251f152e65bbdfa572d462c0b5a8/receta-sencilla-de-pollo-con-chipotle-rico.jpg',
        cantidad:1,nombre: 'Pollo al Chipotle',
        descripcion: 'Pollo asado en una deliciosa salsa de chipotle, acompañado de arroz y frijoles',
        precio: 12.99
      },
      {id:7
        ,
        img: 'https://images.ctfassets.net/nj7g53ympxio/3gu8Ax6NiwUMkGJ4OAtuVt/6a8d433b545b1909e252a353f7601387/enchiladas_verdes_mexicanas_42253_orig.jpg',
        cantidad:1,nombre: 'Enchiladas Verdes',
        descripcion: 'Tortillas rellenas de pollo, bañadas en salsa verde y gratinadas con queso. Acompañadas de arroz y frijoles',     
        precio: 11.99
      },
      {id:8
        ,
        img: 'https://images.ctfassets.net/nj7g53ympxio/6CpIGYAKZWdHYtsHShgRUG/e49cf7489332e34559a500eee0b6f478/236509.jpg',
        cantidad:1,nombre: 'Tacos al Pastor',
        descripcion: 'Tortillas de maíz suaves y calientes rellenas de carne de cerdo marinada con especias y piña. Acompañados de cebolla, cilantro y salsa',
        precio: 14.99
      },
      {id:9
        ,
        img: 'https://images.ctfassets.net/nj7g53ympxio/3jcxOLe1xPlYc3dUYrBiar/04749bd96d8aebe26d794272077de1c1/stuffed-chileschiles-rellenos.jpg',
        cantidad:1,nombre: 'Chiles Rellenos',
        descripcion: 'Chiles poblanos asados y rellenos de queso, bañados en salsa de jitomate y gratinados con queso. Acompañados de arroz y frijoles',
        precio: 9.99
      }
  ],
  carrito:"",
  enviarcarrito:[
    
  ],
  cTotal:0,
  pTotal:0,
  abrirtienda:false,
  categoria:"Beef"

}

export const tiendaSlice = createSlice({
  name: 'tienda',
  initialState,
  reducers: {
   mas:(state,action)=>{
    state.data = state.data.map((item) =>
    item.id === action.payload ? { ...item, cantidad: item.cantidad + 1 } : item
  );
   }  ,
   menos:(state,action)=>{
     state.data= state.data.map((item)=>{
        if (item.id === action.payload) {
            // Verificar si la cantidad es mayor que 0 antes de disminuir
            if (item.cantidad > 1) {
                return { ...item, cantidad: item.cantidad - 1 };
            }
        }
        return item;
     })
   },
   recibirdatos:(state,action)=>{
    console.log(action.payload)
    state.carrito=action.payload
     
   
   } ,
   aumentar:(state,action)=>{
    const data =action.payload;
  
    state.carrito={...data,cantidad:data.cantidad+1 }
    },
    disminuir:(state,action)=>{
        const data =action.payload;
     
       if(data.cantidad<2){
        state.carrito={...data,cantidad:1}
       }
       else{
        state.carrito={...data,cantidad:data.cantidad-1}
       }
    },
    descripcion:(state,action)=>{
   const data=action.payload
  
   state.carrito={...state.carrito,detalle:data}
   

    },
    enviardata:(state,action)=>{
        const newData = action.payload;
        const datos=state.enviarcarrito.find(item=> item.idMeal==newData.idMeal)
        if(datos){
        
         
          datos.cantidad =datos.cantidad+newData.cantidad;
        
        }
        
         else{
          state.enviarcarrito=[...state.enviarcarrito,newData]
         }
         
        },
    cantidadTotal:(state,action)=>{
    const data=action.payload
  state.cTotal=data
    },
    precioTotal:(state,action)=>{
        const data=action.payload
state.pTotal=data
    },
    modificarstado:(state,action)=>{
  state.abrirtienda=!state.abrirtienda
    },
    eliminar:(state,action)=>{
     const data=action.payload;
     state.enviarcarrito=state.enviarcarrito.filter(item=>item.idMeal!==data)
    },
    titleCategoria:(state,action)=>{
      const data=action.payload;
      state.categoria=data;
    }


},
    

})

// Action creators are generated for each case reducer function
export const {menos,mas,recibirdatos,aumentar,
  disminuir,descripcion ,enviardata,cantidadTotal,
  precioTotal,modificarstado,eliminar,titleCategoria} = tiendaSlice.actions

