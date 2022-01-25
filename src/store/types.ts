import { IColors } from '../@types';

type carType = {
  id: number;
  brand: string;
  name: string;
  price: number;
  image: string;
  logo: string;
  colors: IColors[];
};

interface SelectedCarInfoAction {
  payload: carType;
}

interface IInitialState {
  selectedCarInfo: carType;
}

export type { IInitialState, SelectedCarInfoAction };
