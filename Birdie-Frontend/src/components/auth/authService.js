import axios from "axios"

const API_USER_LOGIN_URL = "http://localhost:8080/api/getLoggedUser/"
const API_USER_REGISTER_URL = "http://localhost:8080/api/user/"
//register user
const register = async (userData) => {
  const response = await axios.post(API_USER_REGISTER_URL, userData, {
    headers: {
      // Overwrite Axios's automatically set Content-Type
      "Content-Type": "application/json",
    },
  })

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data))
  }
  return response.data
}

//login user
const login = async (userData) => {
  const response = await axios.get(
    `${API_USER_LOGIN_URL}${userData.email}/?pwd=${userData.password}`
  )

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data))
  }
  return response.data
}

const logout = async () => {
  localStorage.removeItem("user")
}

const authService = { register, login, logout }

export default authService
