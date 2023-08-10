import {createAsyncThunk} from "@reduxjs/toolkit";
import {Message} from "../../type";
import axiosApi from "../../axios";

export const encodeMessage = createAsyncThunk<Message, Message>(
    'messages/encode',
    async (encodeMessage) => {
      const responseEncodeMessage: Message =  await axiosApi.post('/messages/encode', encodeMessage);
      return responseEncodeMessage;
    }
);
export const decodeMessage = createAsyncThunk<Message, Message>(
    'messages/decode',
    async (decodeMessage) => {
       const responseDecodeMessage: Message = await axiosApi.post('/messages/decode', decodeMessage);
        return responseDecodeMessage;
    }
);
