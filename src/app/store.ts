import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import appReducer from '../slice/appSlice';
import menuReducer from '../slice/menuSlice';
import projectReducer from '../slice/projectSlice';

export const store = configureStore({
    reducer: {
        app: appReducer,
        menu: menuReducer,
        project: projectReducer,
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
