import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchCount } from "./counter/counterAPI";




export const mailSlice = createSlice({
  name: "mail",
  initialState:{
    sendMessageIsOpen: false,
  },

  reducers: {
    OpenSendMessage: (state) => {
    
      state.sendMessageIsOpen=true;
    },
    closeSendMessage: (state) => {
      state.sendMessageIsOpen=false;
    },

  },

  
});

export const { OpenSendMessage,closeSendMessage } = mailSlice.actions;



export const selectSendMessageIsOpen= (state) => state.mail.sendMessageIsOpen;


export default mailSlice.reducer;
