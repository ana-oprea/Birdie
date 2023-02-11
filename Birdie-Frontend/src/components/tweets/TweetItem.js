import { useParams } from "react-router-dom"
import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import TweetsList from "./TweetsList"
import AddTweet from "./AddTweet"
import { getTweetById, getReplies } from "./tweetsSlice"

function TweetItem() {
  const dispatch = useDispatch()
  const params = useParams()
  const tweetId = params.tweetId
  const { currentTweet, tweets } = useSelector((state) => state.tweets)
  const { user } = useSelector((state) => state.auth)

  useEffect(() => {
    const data = {
      userId: user.id,
      tweetId,
    }
    dispatch(getTweetById(data))
    dispatch(getReplies(tweetId))
  }, [tweetId])

  return (
    <div>
      {currentTweet && <TweetsList tweets={[currentTweet]} />}
      {currentTweet && <AddTweet parentId={tweetId} />}
      {tweets && <TweetsList tweets={tweets} />}
    </div>
  )
}

export default TweetItem
