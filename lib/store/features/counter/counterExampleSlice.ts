import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {
  value: number,
  isLoading: boolean
}

const initialState: CounterState = {
  isLoading: false,
  value: 0,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    initializeCount: (state) => {
      state.value = 3
    },
    increment: (state) => {
      state.value += 2
    },
    decrement: (state) => { 
      if(state.value === 0){
        return
      }
      state.value -= 1
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { 
  increment, 
  decrement, 
  incrementByAmount, 
  initializeCount 
} = counterSlice.actions

export default counterSlice.reducer