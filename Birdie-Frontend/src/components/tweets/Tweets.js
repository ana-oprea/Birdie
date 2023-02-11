import React, { useEffect, useRef } from "react"
import { useSelector, useDispatch } from "react-redux"
import AddTweet from "./AddTweet"
import TweetsList from "./TweetsList"
import { getTweetsForHome, getRetweetsForHome } from "./tweetsSlice"
import { Divider } from "antd"

function Tweets() {
  const dispatch = useDispatch()
  const { tweets, retweets } = useSelector((state) => state.tweets)
  const { user } = useSelector((state) => state.auth)
  const tweetsAndRetweets = [...tweets, ...retweets]
  tweetsAndRetweets.sort((a, b) =>
    a.createdAt < b.createdAt ? 1 : b.createdAt < a.createdAt ? -1 : 0
  )

  useEffect(() => {
    dispatch(getTweetsForHome(user.id))
    dispatch(getRetweetsForHome(user.id))
  }, [])

  return (
    <div style={{ padding: "10px 20px" }}>
      <AddTweet parentId={null} />
      <Divider style={{ marginTop: "0" }} />
      <TweetsList tweets={tweetsAndRetweets} />
    </div>
  )
}

export default Tweets
