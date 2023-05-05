import axios from 'axios'

const API_TWEETS_URL = 'http://localhost:8081/api/tweets/'
const API_TWEET_URL = 'http://localhost:8081/api/tweet/'
const API_LIKE_TWEET_URL = 'http://localhost:8081/api/likeTweet/'
const API_DISLIKE_TWEET_URL = 'http://localhost:8081/api/dislikeTweet/'
const API_TWEETS_BY_USER_ID_URL = 'http://localhost:8081/api/tweetsByUserId/'
const API_TWEETS_HOME_URL = 'http://localhost:8081/api/tweetsForHome/'
const API_LIKE_URL = 'http://localhost:8081/api/likes/'
const API_DELETE_LIKE_URL = 'http://localhost:8081/api/deleteLike/'
const API_RETWEETS_URL = 'http://localhost:8081/api/retweets/'
const API_GET_RETWEETS_URL = 'http://localhost:8081/api/getRetweetsByUserId/'
const API_RETWEET_TWEET_URL = 'http://localhost:8081/api/retweetTweet/'
const API_UNRETWEET_TWEET_URL = 'http://localhost:8081/api/unretweetTweet/'
const API_UPLOAD_URL = 'http://localhost:8081/api/upload'

const getTweets = async () => {
  const response = await axios.get(API_TWEETS_URL)

  return response.data
}

const getTweetById = async (data) => {
  const response = await axios.get(
    `${API_TWEET_URL}${data.tweetId}/${data.userId}`
  )

  return response.data
}

const getTweetsByUserId = async (userId) => {
  const response = await axios.get(`${API_TWEETS_BY_USER_ID_URL}${userId}`)

  return response.data
}

const getTweetsForHome = async (userId) => {
  const response = await axios.get(`${API_TWEETS_HOME_URL}${userId}`)

  return response.data
}

const getReplies = async (tweetId) => {
  const response = await axios.get(`${API_TWEETS_URL}${tweetId}`)

  return response.data
}

const addTweet = async (tweetData) => {
  console.log({ tweetData })
  const response = await axios.post(API_TWEETS_URL, tweetData, {
    headers: {
      // Overwrite Axios's automatically set Content-Type
      'Content-Type': 'application/json',
    },
  })

  return response.data
}

const addRetweet = async (data) => {
  const response = await axios.post(API_RETWEETS_URL, data, {
    headers: {
      // Overwrite Axios's automatically set Content-Type
      'Content-Type': 'application/json',
    },
  })

  return response.data
}

const deleteRetweet = async (data) => {
  const response = await axios.delete(API_RETWEETS_URL, {
    headers: {
      // Overwrite Axios's automatically set Content-Type
      'Content-Type': 'application/json',
    },
    data: { data },
  })

  return response.data
}

const getRetweetsForHome = async (userId) => {
  const response = await axios.get(`${API_RETWEETS_URL}${userId}`)

  return response.data
}

const getRetweetsByUserId = async (userId) => {
  const response = await axios.get(`${API_GET_RETWEETS_URL}${userId}`)

  return response.data
}

const deleteTweet = async (tweetId) => {
  const response = await axios.delete(`${API_TWEET_URL}${tweetId}`)

  return response.data
}

const addLike = async (tweetId) => {
  const response = await axios.post(API_LIKE_URL, tweetId, {
    headers: {
      // Overwrite Axios's automatically set Content-Type
      'Content-Type': 'application/json',
    },
  })

  return response.data
}

const deleteLike = async (data) => {
  const response = await axios.delete(API_DELETE_LIKE_URL, {
    headers: {
      // Overwrite Axios's automatically set Content-Type
      'Content-Type': 'application/json',
    },
    data: { data },
  })

  return response.data
}

const likeTweet = async (tweetId) => {
  const response = await axios.put(`${API_LIKE_TWEET_URL}${tweetId}`)

  return response.data
}

const dislikeTweet = async (tweetId) => {
  const response = await axios.put(`${API_DISLIKE_TWEET_URL}${tweetId}`)

  return response.data
}

const retweetTweet = async (tweetId) => {
  const response = await axios.put(`${API_RETWEET_TWEET_URL}${tweetId}`)

  return response.data
}

const unretweetTweet = async (tweetId) => {
  const response = await axios.put(`${API_UNRETWEET_TWEET_URL}${tweetId}`)

  return response.data
}

const uploadMedia = async (data) => {
  console.log({ data })
  const d = JSON.stringify({ data: data })
  const response = await axios.post(API_UPLOAD_URL, d, {
    headers: {
      // Overwrite Axios's automatically set Content-Type
      'Content-Type': 'application/json',
    },
  })

  return response.data
}

const tweetsService = {
  getTweets,
  getTweetById,
  getReplies,
  addTweet,
  deleteTweet,
  addLike,
  deleteLike,
  likeTweet,
  dislikeTweet,
  getTweetsByUserId,
  getTweetsForHome,
  addRetweet,
  getRetweetsForHome,
  getRetweetsByUserId,
  deleteRetweet,
  retweetTweet,
  unretweetTweet,
  uploadMedia,
}

export default tweetsService
