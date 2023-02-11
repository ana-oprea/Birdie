import React, { createContext } from "react"
import { Routes, Route } from "react-router-dom"
import LayoutPage from "./components/layoutPage/LayoutPage"
import Error from "./pages/Error"
import Profile from "./pages/Profile"
import EditProfile from "./pages/EditProfile"
import TweetItem from "./components/tweets/TweetItem"
import "./App.css"
import Tweets from "./components/tweets/Tweets"
import Login from "./components/auth/Login"
import Register from "./components/auth/Register"
import PrivateRoute from "./components/auth/PrivateRoute"
import Search from "./pages/Search"
import Chat from "./components/chat/Chat"
import Conversation from "./components/chat/Conversation"
import socketIO from "socket.io-client"

const SocketContext = createContext()
const socket = socketIO.connect("http://localhost:5000")

function App() {
  return (
    <div className='App'>
      <SocketContext.Provider value={socket}>
        <Routes>
          <Route
            path='/'
            element={
              <PrivateRoute>
                <LayoutPage socket={socket} />
              </PrivateRoute>
            }
          >
            <Route index element={<Tweets socket={socket} />} />
            <Route path='tweets' element={<Tweets socket={socket} />} />
            <Route
              path='profile/:userId/edit'
              element={<EditProfile socket={socket} />}
            />
            <Route
              path='profile/:userId'
              element={<Profile socket={socket} />}
            />
            <Route
              path='tweets/:tweetId'
              element={<TweetItem socket={socket} />}
            />
            <Route path='search' element={<Search socket={socket} />} />
          </Route>
          <Route path='chat' element={<Chat socket={socket} />}>
            <Route path=':chatId' element={<Conversation socket={socket} />} />
          </Route>
          <Route path='login' element={<Login socket={socket} />} />
          <Route path='register' element={<Register socket={socket} />} />
          <Route path='*' element={<Error socket={socket} />} />
        </Routes>
      </SocketContext.Provider>
    </div>
  )
}

export default App
