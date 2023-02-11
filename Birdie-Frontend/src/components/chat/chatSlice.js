import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import chatService from "./chatService"

const initialState = {
  users: [],
  messages: [],
  currentUser: null,
  currentChat: {},
  isError: false,
  isSuccess: false,
  isLoading: false,
  isLoadingAddChat: false,
  isLoadingUsers: false,
  isLoadingConversation: false,
  message: "",
}

export const getUsers = createAsyncThunk(
  "chat/getUsers",
  async (userId, thunkAPI) => {
    try {
      return await chatService.getUsers(userId)
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)

export const getChatId = createAsyncThunk(
  "chat/getChatId",
  async (data, thunkAPI) => {
    try {
      return await chatService.getChatId(data)
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)

export const getChatById = createAsyncThunk(
  "chat/getChatById",
  async (data, thunkAPI) => {
    try {
      return await chatService.getChatById(data)
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)

export const addChat = createAsyncThunk(
  "chat/addChat",
  async (data, thunkAPI) => {
    try {
      return await chatService.addChat(data)
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)

export const getMessages = createAsyncThunk(
  "chat/getMessages",
  async (chatId, thunkAPI) => {
    try {
      return await chatService.getMessages(chatId)
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)

export const addMessage = createAsyncThunk(
  "chat/addMessage",
  async (data, thunkAPI) => {
    try {
      return await chatService.addMessage(data)
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)

const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    reset(state) {
      state.isLoading = false
      state.isSuccess = false
      state.isError = false
      state.message = ""
      state.currentChat = null
      state.isLoadingUsers = false
      state.isLoadingConversation = false
    },
    setMessages(state, action) {
      state.messages = [...state.messages, action.payload]
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUsers.pending, (state) => {
        state.isLoadingUsers = true
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.isLoadingUsers = false
        state.isSuccess = true
        state.users = action.payload
        state.currentUser = state.users.find(
          (user) => user.id === state.currentChat.userId
        )
      })
      .addCase(getUsers.rejected, (state, action) => {
        state.isLoadingUsers = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(getChatId.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getChatId.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.currentChat = action.payload
      })
      .addCase(getChatId.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(getChatById.pending, (state) => {
        state.isLoadingConversation = true
      })
      .addCase(getChatById.fulfilled, (state, action) => {
        state.isLoadingConversation = false
        state.isSuccess = true
        state.currentChat = action.payload
        state.currentUser = state.users.find(
          (user) => user.id === action.payload.userId
        )
      })
      .addCase(getChatById.rejected, (state, action) => {
        state.isLoadingConversation = false
        state.isError = true
        state.message = action.payload
        state.currentChat = null
      })
      .addCase(addChat.pending, (state) => {
        state.isLoadingAddChat = true
      })
      .addCase(addChat.fulfilled, (state, action) => {
        state.isLoadingAddChat = false
        state.isSuccess = true
        state.currentChat = action.payload
        state.currentUser = state.users.find(
          (user) => user.id === action.payload.userId
        )
      })
      .addCase(addChat.rejected, (state, action) => {
        state.isLoadingAddChat = false
        state.isError = true
        state.message = action.payload
        state.currentChat = null
      })
      .addCase(getMessages.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getMessages.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.messages = action.payload
      })
      .addCase(getMessages.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.messages = []
      })
      .addCase(addMessage.pending, (state) => {
        state.isLoading = true
      })
      .addCase(addMessage.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.messages = [...state.messages, action.payload]
      })
      .addCase(addMessage.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.messages = []
      })
  },
})

export const { setMessages, reset } = chatSlice.actions
export default chatSlice.reducer
