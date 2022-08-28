import { configureStore } from '@reduxjs/toolkit';
import carReduser from '../features/car/carSlice';
export const store = configureStore({
  reducer: {
    car: carReduser,
  },
});
