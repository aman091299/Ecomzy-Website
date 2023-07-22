import { createSlice } from "@reduxjs/toolkit"

export const CartSlice=createSlice({
      name:"cart",
      initialState:[],
      reducers:{ 
        add:(state,action)=>{
          //action.payload is input parameter send by reducer
          state.push(action.payload)   
        },
        remove:(state,action)=>{
          return state.filter((item)=>item.id !=action.payload)
        },
      }
})
console.log("hey slice")
console.log(CartSlice.reducer,"hey ")
console.log(CartSlice,"hey ")
export const {add,remove}=CartSlice.actions
export default CartSlice.reducer;