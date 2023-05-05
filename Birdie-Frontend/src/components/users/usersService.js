import axios from 'axios'

const API_USERS_URL = 'http://localhost:8081/api/users/'
const API_USER_URL = 'http://localhost:8081/api/user/'
const API_USER_BY_ID_URL = 'http://localhost:8081/api/userById/'
const API_USERNAME_URL = 'http://localhost:8081/api/usersbyusername'
const API_FOLLOW_USER_URL = 'http://localhost:8081/api/follows/'
const API_UNFOLLOW_USER_URL = 'http://localhost:8081/api/unfollow/'
const API_FOLLOWERS_URL = 'http://localhost:8081/api/followers'
const API_FOLLOWING_URL = 'http://localhost:8081/api/following'

const getUsers = async () => {
  const response = await axios.get(API_USERS_URL)

  return response.data
}

const getUsersByUsername = async (username) => {
  const response = await axios.get(`${API_USERNAME_URL}?username=${username}`)

  return response.data
}
const getUserById = async (data) => {
  const response = await axios.get(`${API_USER_BY_ID_URL}`, {
    params: {
      userId: data.userId,
      followedUserId: data.followedUserId,
    },
  })

  return response.data
}

const editUser = async (user) => {
  const response = await axios.put(`${API_USER_URL}${user.id}`, user)
}

const followUser = async (data) => {
  const response = await axios.post(API_FOLLOW_USER_URL, data, {
    headers: {
      // Overwrite Axios's automatically set Content-Type
      'Content-Type': 'application/json',
    },
  })

  return response.data
}

const unfollowUser = async (data) => {
  const response = await axios.delete(API_UNFOLLOW_USER_URL, {
    headers: {
      // Overwrite Axios's automatically set Content-Type
      'Content-Type': 'application/json',
    },
    data: { data },
  })

  return response.data
}

const getFollowers = async (data) => {
  const response = await axios.get(
    `${API_FOLLOWERS_URL}?userId=${data.userId}&homeUserId=${data.homeUserId}`
  )

  return response.data
}

const getFollowedUsers = async (data) => {
  const response = await axios.get(
    `${API_FOLLOWING_URL}?userId=${data.userId}&homeUserId=${data.homeUserId}`
  )

  return response.data
}

const usersService = {
  getUsers,
  getUsersByUsername,
  getUserById,
  editUser,
  followUser,
  unfollowUser,
  getFollowers,
  getFollowedUsers,
}

export default usersService
