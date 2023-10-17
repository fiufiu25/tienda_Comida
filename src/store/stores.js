import { configureStore } from '@reduxjs/toolkit'
import { tiendaSlice } from '../slices/tienda/tiendaSlice.js'
export const store = configureStore({
  reducer: {
    tienda:tiendaSlice.reducer
  },
})