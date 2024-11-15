import { createSlice } from '@reduxjs/toolkit'

export const calcSlice=createSlice({
    name:'calc',
    initialState:{
        statsData:{}
        
    },
    reducers:{
        setStatsData:(state,action)=>{
            state.statsData=action.payload
            
        },
       
    }
})

export const {setStatsData}=calcSlice.actions
export default calcSlice.reducer