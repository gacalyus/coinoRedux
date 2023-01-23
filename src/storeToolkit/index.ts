import { configureStore } from "@reduxjs/toolkit"; 
import { TypedUseSelectorHook, useDispatch ,useSelector } from "react-redux";
import slice from "../features/slice";

const store = configureStore({
    reducer: {
        product:slice
    }
})

export default store;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector : TypedUseSelectorHook<RootState> = useSelector;