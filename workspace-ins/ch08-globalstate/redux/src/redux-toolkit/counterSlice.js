import { createSlice } from "@reduxjs/toolkit";

// immer 라이브러리를 내부적으로 사용
const counterSlice = createSlice({
  name: 'myCounter',
  initialState: { count: 10 },
  reducers: {
    countUp: (state, action) => {
      state.count += action.payload
    },
    countDown: (state, action) => {
      state.count -= action.payload
    },
    countReset: state => {
      state.count = 0
    }
  }
});

export const { countUp, countDown, countReset } = counterSlice.actions;
export default counterSlice;