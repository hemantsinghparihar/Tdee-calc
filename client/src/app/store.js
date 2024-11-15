import { configureStore } from '@reduxjs/toolkit'
import  calcSlice  from '../feature/calcSlice'


export const store = configureStore({
  reducer: {
    calc:calcSlice,
  },
  
})

