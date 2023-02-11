import { configureStore } from "@reduxjs/toolkit"
import tweetsReducer from "./components/tweets/tweetsSlice"
import usersReducer from "./components/users/usersSlice"
import authSlice from "./components/auth/authSlice"
import chatReducer from "./components/chat/chatSlice"

const store = configureStore({
  reducer: {
    chats: chatReducer,
    tweets: tweetsReducer,
    users: usersReducer,
    auth: authSlice,
  },
})

export default store
