import axios from "axios"

const API_USERS_URL = "http://localhost:8080/api/getUserChats/"
const API_FIND_CHAT_URL = "http://localhost:8080/api/find/"
const API_GET_CHAT_BY_ID = "http://localhost:8080/api/getChatById/"
const API_GET_MESSAGES = "http://localhost:8080/api/getMessagesByChatId/"
const API_ADD_MESSAGE_URL = "http://localhost:8080/api/addMessage"
const API_ADD_CHAT_URL = "http://localhost:8080/api/createChat"

const getUsers = async (userId) => {
  const response = await axios.get(`${API_USERS_URL}${userId}`)

  return response.data
}

const getChatId = async (data) => {
  const response = await axios.get(
    `${API_FIND_CHAT_URL}${data.firstUserId}/${data.secondUserId}`
  )

  return response.data
}

const getChatById = async (data) => {
  const response = await axios.get(
    `${API_GET_CHAT_BY_ID}${data.chatId}/${data.userId}`
  )

  return response.data
}

const addChat = async (data) => {
  const response = await axios.post(API_ADD_CHAT_URL, data, {
    headers: {
      // Overwrite Axios's automatically set Content-Type
      "Content-Type": "application/json",
    },
  })

  return response.data
}

const getMessages = async (chatId) => {
  const response = await axios.get(`${API_GET_MESSAGES}${chatId}`)

  return response.data
}

const addMessage = async (data) => {
  const response = await axios.post(API_ADD_MESSAGE_URL, data, {
    headers: {
      // Overwrite Axios's automatically set Content-Type
      "Content-Type": "application/json",
    },
  })

  return response.data
}

const chatService = {
  getUsers,
  getChatId,
  getChatById,
  addChat,
  getMessages,
  addMessage,
}

export default chatService
