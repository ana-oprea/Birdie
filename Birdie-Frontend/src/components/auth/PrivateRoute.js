import { useSelector } from "react-redux"
import { Navigate, useLocation } from "react-router-dom"
import React from "react"

export default function PrivateRoute({ children }) {
  const location = useLocation()
  const isAuth = useSelector((state) => state.auth.user)

  return isAuth ? (
    children
  ) : (
    <Navigate
      replace={true}
      to='/login'
      state={{ from: `${location.pathname}${location.search}` }}
    />
  )
}
