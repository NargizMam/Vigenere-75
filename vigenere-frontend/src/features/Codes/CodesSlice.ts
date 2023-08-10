import {createSlice} from "@reduxjs/toolkit";
import {Message} from "../../types";
import {decodeMessage, encodeMessage} from "./CodesThunk";
import {RootState} from "../../app/store";

interface CodesState {
    messages: Message,
    loading: boolean,
}
const initialState: CodesState = {
    messages: {
        password: '',
        encodeText: '',
        decodeText: '',
    },
    loading: false,
}

export const CodesSlice = createSlice({
    name: 'messages',
    initialState,
    reducers: {},
    extraReducers:(builder) => {
        builder.addCase(encodeMessage.pending, (state, ) => {
            state.loading = true;
        });
        builder.addCase(encodeMessage.fulfilled, (state, {payload: message}) => {
            state.loading = false;
            state.messages = message;
        });
        builder.addCase(encodeMessage.rejected, (state) => {
            state.loading = false;
        });
        builder.addCase(decodeMessage.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(decodeMessage.fulfilled, (state, {payload: message}) => {
            state.loading = false;
            state.messages = message;
        });
        builder.addCase(decodeMessage.rejected, (state) => {
            state.loading = false;
        });
    }
});

export const codesReducer = CodesSlice.reducer;
export const selectMessage = (state: RootState) => state.codes.messages;
export const selectLoading = (state: RootState) => state.codes.loading;

