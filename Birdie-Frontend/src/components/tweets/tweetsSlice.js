import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import tweetsService from "./tweetsService"

const initialState = {
  tweets: [],
  retweets: [],
  currentTweet: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  isLoadingLike: false,
  message: "",
  mediaUrl: null,
}

export const getTweets = createAsyncThunk(
  "tweets/getTweets",
  async (thunkAPI) => {
    try {
      return await tweetsService.getTweets()
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

export const getTweetsForHome = createAsyncThunk(
  "tweets/getTweetsForHome",
  async (userId, thunkAPI) => {
    try {
      return await tweetsService.getTweetsForHome(userId)
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

export const addTweet = createAsyncThunk(
  "tweets/addTweet",
  async (tweet, thunkAPI) => {
    try {
      return await tweetsService.addTweet(tweet)
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

export const getTweetById = createAsyncThunk(
  "tweets/getTweetById",
  async (data, thunkAPI) => {
    try {
      return await tweetsService.getTweetById(data)
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

export const getReplies = createAsyncThunk(
  "tweets/getReplies",
  async (tweetId, thunkAPI) => {
    try {
      return await tweetsService.getReplies(tweetId)
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

export const addLike = createAsyncThunk(
  "tweets/addLike",
  async (data, thunkAPI) => {
    try {
      return await tweetsService.addLike(data)
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

export const deleteLike = createAsyncThunk(
  "tweets/deleteLike",
  async (data, thunkAPI) => {
    try {
      return await tweetsService.deleteLike(data)
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

export const likeTweet = createAsyncThunk(
  "tweets/likeTweet",
  async (tweetId, thunkAPI) => {
    try {
      return await tweetsService.likeTweet(tweetId)
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

export const dislikeTweet = createAsyncThunk(
  "tweets/dislikeTweet",
  async (tweetId, thunkAPI) => {
    try {
      return await tweetsService.dislikeTweet(tweetId)
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

export const retweetTweet = createAsyncThunk(
  "tweets/retweetTweet",
  async (tweetId, thunkAPI) => {
    try {
      return await tweetsService.retweetTweet(tweetId)
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

export const unretweetTweet = createAsyncThunk(
  "tweets/unretweetTweet",
  async (tweetId, thunkAPI) => {
    try {
      return await tweetsService.unretweetTweet(tweetId)
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

export const addRetweet = createAsyncThunk(
  "tweets/addRetweet",
  async (data, thunkAPI) => {
    try {
      return await tweetsService.addRetweet(data)
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

export const deleteRetweet = createAsyncThunk(
  "tweets/deleteRetweet",
  async (data, thunkAPI) => {
    try {
      return await tweetsService.deleteRetweet(data)
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

export const getTweetsByUserId = createAsyncThunk(
  "tweets/getTweetsByUserId",
  async (userId, thunkAPI) => {
    try {
      return await tweetsService.getTweetsByUserId(userId)
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

export const getRetweetsForHome = createAsyncThunk(
  "tweets/getRetweetsForHome",
  async (userId, thunkAPI) => {
    try {
      return await tweetsService.getRetweetsForHome(userId)
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

export const getRetweetsByUserId = createAsyncThunk(
  "tweets/getRetweetsByUserId",
  async (userId, thunkAPI) => {
    try {
      return await tweetsService.getRetweetsByUserId(userId)
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

export const uploadMedia = createAsyncThunk(
  "tweets/uploadMedia",
  async (data, thunkAPI) => {
    try {
      return await tweetsService.uploadMedia(data)
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

const tweetsSlice = createSlice({
  name: "tweets",
  initialState,
  reducers: {
    reset(state) {
      state.isLoading = false
      state.isSuccess = false
      state.isError = false
      state.message = ""
      state.currentTweet = null
    },
    setIsLiked(state, action) {
      const filteredTweets = state.tweets.filter(
        (tweet) => tweet.id === action.payload.tweetId
      )

      filteredTweets.forEach((tweet) => {
        const index = state.tweets.indexOf(tweet)
        state.tweets[index].isLiked = action.payload.value
        if (action.payload.value === true) {
          state.tweets[index].likes++
        } else {
          state.tweets[index].likes--
        }
      })

      const filteredRetweets = state.retweets.filter(
        (tweet) => tweet.id === action.payload.tweetId
      )

      filteredRetweets.forEach((retweet) => {
        const index = state.retweets.indexOf(retweet)
        state.retweets[index].isLiked = action.payload.value
        if (action.payload.value === true) {
          state.retweets[index].likes++
        } else {
          state.retweets[index].likes--
        }
      })
    },
    setIsRetweeted(state, action) {
      const filteredTweets = state.tweets.filter(
        (tweet) => tweet.id === action.payload.tweetId
      )

      filteredTweets.forEach((tweet) => {
        const index = state.tweets.indexOf(tweet)
        state.tweets[index].isRetweetedByHomeUser = action.payload.value
        if (action.payload.value === true) {
          state.tweets[index].retweets++
        } else {
          state.tweets[index].retweets--
        }
      })

      const filteredRetweets = state.retweets.filter(
        (tweet) => tweet.id === action.payload.tweetId
      )

      filteredRetweets.forEach((retweet) => {
        const index = state.retweets.indexOf(retweet)
        state.retweets[index].isRetweetedByHomeUser = action.payload.value
        if (action.payload.value === true) {
          state.retweets[index].retweets++
        } else {
          state.retweets[index].retweets--
        }
      })
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getTweets.pending, (state) => {
        state.isLoading = true
        state.tweets = []
      })
      .addCase(getTweets.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.tweets = action.payload
        state.currentTweet = null
      })
      .addCase(getTweets.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
        state.tweets = []
      })
      .addCase(addTweet.pending, (state) => {
        state.isLoading = true
      })
      .addCase(addTweet.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        if (state.currentTweet === null && action.payload.parentId === null)
          state.tweets = [action.payload, ...state.tweets]
        else {
          if (state.currentTweet !== null) {
            if (state.currentTweet.id === action.payload.parentId)
              state.tweets = [action.payload, ...state.tweets]
          }
        }
      })
      .addCase(addTweet.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
        state.tweets = []
      })
      .addCase(getTweetById.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getTweetById.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.currentTweet = action.payload
      })
      .addCase(getTweetById.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
        state.currentTweet = null
      })
      .addCase(getReplies.pending, (state) => {
        state.isLoading = true
        state.tweets = []
      })
      .addCase(getReplies.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.tweets = action.payload
      })
      .addCase(getReplies.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
        state.currentTweetReplies = null
      })
      .addCase(addLike.pending, (state) => {
        state.isLoadingLike = true
      })
      .addCase(addLike.fulfilled, (state, action) => {
        state.isLoadingLike = false
        state.isSuccess = true
      })
      .addCase(addLike.rejected, (state, action) => {
        state.isLoadingLike = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(deleteLike.pending, (state) => {
        state.isLoadingLike = true
      })
      .addCase(deleteLike.fulfilled, (state, action) => {
        state.isLoadingLike = false
        state.isSuccess = true
      })
      .addCase(deleteLike.rejected, (state, action) => {
        state.isLoadingLike = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(retweetTweet.pending, (state) => {
        state.isLoadingLike = true
      })
      .addCase(retweetTweet.fulfilled, (state, action) => {
        state.isLoadingLike = false
        state.isSuccess = true
      })
      .addCase(retweetTweet.rejected, (state, action) => {
        state.isLoadingLike = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(unretweetTweet.pending, (state) => {
        state.isLoadingLike = true
      })
      .addCase(unretweetTweet.fulfilled, (state, action) => {
        state.isLoadingLike = false
        state.isSuccess = true
      })
      .addCase(unretweetTweet.rejected, (state, action) => {
        state.isLoadingLike = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(addRetweet.pending, (state) => {
        state.isLoading = true
      })
      .addCase(addRetweet.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
      })
      .addCase(addRetweet.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(deleteRetweet.pending, (state) => {
        state.isLoadingRetweet = true
      })
      .addCase(deleteRetweet.fulfilled, (state, action) => {
        state.isLoadingRetweet = false
        state.isSuccess = true
      })
      .addCase(deleteRetweet.rejected, (state, action) => {
        state.isLoadingRetweet = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(likeTweet.pending, (state) => {
        state.isLoadingLike = true
      })
      .addCase(likeTweet.fulfilled, (state, action) => {
        state.isLoadingLike = false
        state.isSuccess = true
      })
      .addCase(likeTweet.rejected, (state, action) => {
        state.isLoadingLike = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(dislikeTweet.pending, (state) => {
        state.isLoadingLike = true
      })
      .addCase(dislikeTweet.fulfilled, (state, action) => {
        state.isLoadingLike = false
        state.isSuccess = true
      })
      .addCase(dislikeTweet.rejected, (state, action) => {
        state.isLoadingLike = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(getTweetsByUserId.pending, (state) => {
        state.isLoading = true
        state.tweets = []
      })
      .addCase(getTweetsByUserId.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.tweets = action.payload
        state.currentTweet = null
      })
      .addCase(getTweetsByUserId.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
        state.tweets = null
      })
      .addCase(getTweetsForHome.pending, (state) => {
        state.isLoading = true
        state.tweets = []
      })
      .addCase(getTweetsForHome.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.tweets = action.payload
        state.currentTweet = null
      })
      .addCase(getTweetsForHome.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
        state.tweets = []
      })
      .addCase(getRetweetsForHome.pending, (state) => {
        state.isLoading = true
        state.retweets = []
      })
      .addCase(getRetweetsForHome.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.retweets = action.payload
        state.currentTweet = null
      })
      .addCase(getRetweetsForHome.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
        state.retweets = []
      })
      .addCase(getRetweetsByUserId.pending, (state) => {
        state.isLoading = true
        state.retweets = []
      })
      .addCase(getRetweetsByUserId.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.retweets = action.payload
        state.currentTweet = null
      })
      .addCase(getRetweetsByUserId.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
        state.retweets = []
      })
      .addCase(uploadMedia.pending, (state) => {
        state.isLoading = true
      })
      .addCase(uploadMedia.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.mediaUrl = action.payload
      })
      .addCase(uploadMedia.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
  },
})

export const { setIsLiked, setIsRetweeted } = tweetsSlice.actions
export default tweetsSlice.reducer
