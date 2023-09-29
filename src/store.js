import { configureStore } from '@reduxjs/toolkit';

import ListenSlice from '~/layouts/components/PlayerControls/ListenSlice';
import UserSlice from './page/Auth/UserSlice';
import AppSlice from './app.slice';
// ...

export const store = configureStore({
  reducer: {
    listen: ListenSlice,
    user: UserSlice,
    app: AppSlice,
  },
});
