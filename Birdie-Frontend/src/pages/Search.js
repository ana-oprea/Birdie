import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { useSearchParams } from "react-router-dom"
import { getUsersByUsername } from "../components/users/usersSlice"

function Search() {
  const [searchParams, setSearchParams] = useSearchParams()
  const dispatch = useDispatch()
  const q = searchParams.get("q")
  const src = searchParams.get("src")
  const f = searchParams.get("f")
  const { searchedUsers } = useSelector((state) => state.users)

  useEffect(() => {
    dispatch(getUsersByUsername(q))
  }, [q])

  return (
    <>
      <div>Search {q}</div>
      <h1>Users:</h1>
      {searchedUsers.length > 0 ? (
        searchedUsers.map((user) => {
          return (
            <>
              <h2>
                {user.id} & {user.username}
              </h2>
              <hr />
            </>
          )
        })
      ) : (
        <h2>no user with the username {q}</h2>
      )}
    </>
  )
}

export default Search
