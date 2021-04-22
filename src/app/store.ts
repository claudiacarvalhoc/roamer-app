import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import appReducer from '../slice/appSlice';
import menuReducer from '../slice/menuSlice';

export const store = configureStore({
    reducer: {
        app: appReducer,
        menu: menuReducer,
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;
