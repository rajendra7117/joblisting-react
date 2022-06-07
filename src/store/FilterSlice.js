import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
    name: 'filterSlice',
    initialState: {filterList: []},
    reducers:{
        addCategory(state, action){
            if(state.filterList.length===0){
                state.filterList =[action.payload]
            
            }
            else{
                let cat = action.payload
                let ind = state.filterList.findIndex((category) => category===cat)
                if(ind<0){
                    state.filterList = [...state.filterList, cat]
                
                }
               
            }

          
           
         
        },
        removeCategory(state, action){
            state.filterList = state.filterList.filter((cat) => cat!==action.payload)
        },
        clearCategories(state){
            state.filterList = []
        }

    }
})

export const filterSliceActions = filterSlice.actions

export default filterSlice;