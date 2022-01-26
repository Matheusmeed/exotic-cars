import { createSlice } from '@reduxjs/toolkit';
import { CarColorAction, IInitialState, SelectedCarInfoAction } from './types';

const stock = createSlice({
  name: 'stock',

  initialState: {
    selectedCarInfo: {},
  } as IInitialState,
  reducers: {
    setSelectedCar(state, action: SelectedCarInfoAction) {
      state.selectedCarInfo = action.payload;
    },
    setCarColor(state, action: CarColorAction) {
      let newArr = state.selectedCarInfo.colors;
      newArr.forEach((color) => {
        if (color.id === action.payload) {
          newArr.splice(newArr.indexOf(color), 1);
          newArr.splice(Math.round(newArr.length / 2), 0, color);
        } else if (newArr.indexOf(color) === action.payload) {
          newArr.splice(newArr.indexOf(color), 1);
          newArr.splice(Math.round(newArr.length / 2), 0, color);
        }
      });

      state.selectedCarInfo.colors = newArr;
    },
  },
});

export const { setSelectedCar, setCarColor } = stock.actions;

export default stock.reducer;
