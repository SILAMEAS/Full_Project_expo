import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface CounterState {
  value: number;
  Email: string;
  Name: string;
  Password: string;
}

const initialState: CounterState = {
  value: 0,
  Email: "",
  Name: "",
  Password: "",
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,

  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    setEmail: (state, action) => {
      state.Email = action.payload;
    },
    setName: (state, action) => {
      state.Name = action.payload;
    },
    setPassword: (state, action) => {
      state.Password = action.payload;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  increment,
  decrement,
  incrementByAmount,
  setEmail,
  setName,
  setPassword,
} = counterSlice.actions;

export default counterSlice.reducer;
