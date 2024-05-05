import { configureStore } from "@reduxjs/toolkit";
import jobsReducer from "../Job-slices/jobSlice";

export const store=configureStore({
    reducer:{
        jobsy:jobsReducer
    }
});

export type JobDispatch=typeof store.dispatch;

export type RootState=ReturnType<typeof store.getState>