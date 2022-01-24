import { createSlice } from '@reduxjs/toolkit';
import { IInitialState, SelectedCarInfoAction } from './types';

const stock = createSlice({
  name: 'stock',

  initialState: {
    selectedCarInfo: {},
  } as IInitialState,
  reducers: {
    setSelectedCar(state, action: SelectedCarInfoAction) {
      state.selectedCarInfo = action.payload;
    },
  },
});

export const { setSelectedCar } = stock.actions;

export default stock.reducer;
