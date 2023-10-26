import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import userSlice from "../slice/userSlice";

export const store = configureStore({
  reducer: {
    user: userSlice,
  },
});
export const persistor = store;

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
