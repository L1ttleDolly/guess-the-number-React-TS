import {createSlice} from "@reduxjs/toolkit";

type TStats = {
    plusRep: number;
    minusRep: number;
}

const initialState: TStats = {
    plusRep: 0,
    minusRep: 0,
}

const cardsStatsSlice = createSlice({
    name: 'cardsStats',
    initialState,
    reducers: {}
})

export default cardsStatsSlice.reducer