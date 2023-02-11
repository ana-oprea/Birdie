import { useAuth } from "../utils/authUtil"
import { Navigate } from "react-router-dom"
import React from "react"

function ProtectedRoute({ children }) {
  const auth = useAuth()

  if (!auth.user) {
    return <Navigate to='/auth' />
  }
  return children
}

export default ProtectedRoute
