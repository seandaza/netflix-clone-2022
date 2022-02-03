import { createSlice } from '@reduxjs/toolkit';



export const priceSlice = createSlice({
  name: 'price',
  initialState: {
    value: 0,
  },
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    setPrice: (state, action) => {
      state.price = action.payload;
    }, 
  },
});
   
export const { setPrice } = priceSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectPrice = state => state.price.price;



export default priceSlice.reducer;
