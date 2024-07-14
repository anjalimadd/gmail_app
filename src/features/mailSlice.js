import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchCount } from "./counter/counterAPI";




export const mailSlice = createSlice({
  name: "mail",
  initialState:{
    sendMessageIsOpen: false,
  },

  reducers: {
    OpenSendMessage: (state) => {
    
      state.OpenSendMessage=true;
    },
    closeSendMessage: (state) => {
      state.closeSendMessage=false;
    },

  },

  
});

export const { OpenSendMessage,closeSendMessage } = mailSlice.actions;



export const selectsendMessageIsOpen= (state) => state.mail.value;


export default mailSlice.reducer;
