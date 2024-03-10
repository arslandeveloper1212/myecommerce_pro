import { configureStore } from '@reduxjs/toolkit'
import cartSlicereducer from './slices/cartslices'
export const store = configureStore({
  reducer: {
   allcart: cartSlicereducer
  },
})