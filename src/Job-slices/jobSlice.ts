
import { createSlice,PayloadAction } from "@reduxjs/toolkit";

interface jobsState{
    jdUid:string,
    companyName:string,
    jobRole:string,
    location:string,
    jobDetailsFromCompany:string,
    minExp:number,
    jdLink:string,
    salaryCurrencyCode:string,
    minJdSalary:number,
    maxJdSalary:number,
    logoUrl:string
}

const initialJob:{job:jobsState[]}={
    job:[]
}

const jobSlice=createSlice({
    name:"job",
    initialState:initialJob,
    reducers:{
        newJob(state,action:PayloadAction<jobsState[]>){
            state.job.push(...action.payload);
        }
    }
});

export const {newJob}=jobSlice.actions;
export default jobSlice.reducer;
