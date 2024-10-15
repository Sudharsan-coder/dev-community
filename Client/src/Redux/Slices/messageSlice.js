import { notifications } from "@mantine/notifications";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  messageList: [],
  page: 1,
  totalPages: 1,
  hasMore: true,
  error: null,
  success: false,
  isGettingChats: false,
  chats: {
    data: [],
    page: 1,
    totalPages: 1,
    hasMore: true,
  },
};

const messageSlice = createSlice({
  name: "message",
  initialState,
  reducers: {
    newMessage: (state, action) => {
      state.messageList.push(action.payload);
    },
    sendMessageSuccess: (state) => {
      state.success = true;
    },
    sendMessageFailed: (state, action) => {
      state.error = action.payload;
    },
    getMessageList: (state, action) => {
      state.messageList = [...action.payload.message, ...state.messageList];
      state.page += 1;
      state.totalPages = action.payload.totalPages;
    },
    getNoMoreMessage: (state) => {
      state.hasMore = false;
    },
    resetMessageList: (state) => {
      state.page = 1;
      state.totalPages = 1;
      state.hasMore = true;
      state.messageList = [];
    },
    getChatsStarted: (state) => {
      state.isGettingChats = true;
    },
    getChatsSucess: (state, action) => {
      state.isGettingChats = false
      state.chats.data=[ ...state.chats.data,...action.payload.chats];
      state.chats.page += 1;
      state.chats.totalPages = action.payload.totalPages;
    },
    getChatsFailed: (state, action) => {
      state.isGettingChats = false
      notifications.show({
        title: "Your Chats",
        message: action.payload,
        color: "red",
        id: "chats",
      });
    },
    resetChats:(state)=>{
      state.chats = {
        data: [],
        page: 1,
        totalPages: 1,
        hasMore: true,
      }
    },
    getNoMoreChats: (state) => {
      state.chats.hasMore = false;
    },
  },
});

export default messageSlice.reducer;
export const {
  newMessage,
  sendMessageFailed,
  sendMessageSuccess,
  resetMessageList,
  getMessageList,
  getNoMoreMessage,
  getChatsSucess,
  getChatsFailed,
  getChatsStarted,
  getNoMoreChats,
  resetChats
} = messageSlice.actions;
