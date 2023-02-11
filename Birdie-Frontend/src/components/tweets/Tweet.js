import React, { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import {
  Avatar,
  List,
  Skeleton,
  Typography,
  Carousel,
  Image,
  Space,
} from "antd"
import {
  CommentOutlined,
  HeartOutlined,
  RetweetOutlined,
  HeartFilled,
  LeftOutlined,
  RightOutlined,
} from "@ant-design/icons"
import { useNavigate, Link } from "react-router-dom"
import {
  likeTweet,
  dislikeTweet,
  addLike,
  deleteLike,
  addRetweet,
  deleteRetweet,
  setIsLiked,
  setIsRetweeted,
  unretweetTweet,
  retweetTweet,
} from "./tweetsSlice"
import moment from "moment"
import "./tweets.css"

const { Text } = Typography

function Tweet({ tweet, setIsModalVisible, setModalTweet, index }) {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.auth)
  const handleGoToTweet = (tweet) => navigate(`/tweets/${tweet.id}`)
  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 1300px)").matches
  )

  const SlickButtonFix = ({ currentSlide, slideCount, children, ...props }) => (
    <span {...props}>{children}</span>
  )

  useEffect(() => {
    window
      .matchMedia("(min-width: 1300px)")
      .addEventListener("change", (e) => setMatches(e.matches))
  }, [])

  const handleLikeTweet = (tweetId, value) => {
    const data = {
      userId: user.id,
      likedTweetId: tweet.id,
    }
    dispatch(
      setIsLiked({
        value: value,
        tweetId: tweet.id,
        type: tweet.isRetweet === true ? "retweet" : "tweet",
      })
    )

    if (value === true) {
      dispatch(likeTweet(tweetId))
      dispatch(addLike(data))
    } else {
      dispatch(dislikeTweet(tweetId))
      dispatch(deleteLike(data))
    }
  }

  const handleRetweetTweet = (tweetId, value) => {
    dispatch(
      setIsRetweeted({
        index: index,
        tweetId: tweet.id,
        value: value,
        type: tweet.isRetweet === true ? "retweet" : "tweet",
      })
    )
    const data = {
      userId: user.id,
      retweetedTweetId: tweet.id,
    }

    if (value === true) {
      dispatch(retweetTweet(tweet.id))
      dispatch(addRetweet(data))
    } else {
      dispatch(unretweetTweet(tweet.id))
      dispatch(deleteRetweet(data))
    }
  }

  return (
    <List.Item
      style={{
        boxShadow: "rgba(0, 0, 0, 0.04) 0px 3px 5px",
        marginBottom: "7px",
        padding: "5px",
      }}
      actions={[
        <a key='list-loadmore-edit'>
          {tweet.isLiked && (
            <HeartFilled
              style={{ fontSize: "20px", color: "#e63946" }}
              onClick={() => handleLikeTweet(tweet.id, false)}
            />
          )}
          {!tweet.isLiked && (
            <HeartOutlined
              style={{ fontSize: "20px" }}
              onClick={() => handleLikeTweet(tweet.id, true)}
            />
          )}{" "}
          {tweet.likes}
        </a>,
        <a key='list-loadmore-edit'>
          {tweet.isRetweetedByHomeUser && (
            <RetweetOutlined
              style={{ fontSize: "20px", color: "green" }}
              onClick={() => handleRetweetTweet(tweet.id, false)}
            />
          )}
          {!tweet.isRetweetedByHomeUser && (
            <RetweetOutlined
              style={{ fontSize: "20px" }}
              onClick={() => handleRetweetTweet(tweet.id, true)}
            />
          )}{" "}
          {tweet.retweets}
        </a>,
        <a
          key='list-loadmore-edit'
          onClick={() => {
            setIsModalVisible(true)
            setModalTweet({
              id: tweet.id,
              username: tweet.username,
              text: tweet.text,
              avatar: tweet.avatar,
            })
          }}
        >
          <CommentOutlined style={{ fontSize: "20px" }} />{" "}
        </a>,
      ]}
    >
      {tweet.isRetweet === true && (
        <Text type='secondary'>
          <RetweetOutlined
            style={{ fontSize: "20px" }}
            onClick={() => handleRetweetTweet(tweet.id)}
          />
          {tweet.retweetedUsername} retweeted
        </Text>
      )}
      <Skeleton avatar title={false} loading={tweet.loading} active>
        <List.Item.Meta
          style={{ textAlign: "start" }}
          avatar={<Avatar src={tweet.avatar} />}
          // description={tweet.name}
          title={
            <Link to={`/profile/${tweet.userId}`} style={{ marginBottom: "0" }}>
              {tweet.name} <Text type='secondary'>@{tweet.username}</Text>
              <Text type='secondary'>
                {" "}
                {moment(tweet.createdAt, "X").fromNow()}
              </Text>
            </Link>
          }
        />
      </Skeleton>
      <div onClick={() => handleGoToTweet(tweet)}>{tweet.text}</div>
      <div
        style={{
          display: "flex",
          alignContent: "center",
        }}
      >
        {tweet?.url?.length > 0 && matches && (
          <div
            style={{
              width: "100%",
            }}
          >
            <Image.PreviewGroup>
              <Space size={[4, 4]} wrap align='center'>
                {tweet?.url?.map((url) => (
                  <Image width={300} src={url} />
                ))}
              </Space>
            </Image.PreviewGroup>
          </div>
        )}
      </div>

      {tweet.url.length > 0 && !matches && (
        <div
          style={{
            width: "100%",
          }}
        >
          <Carousel
            style={{
              backgroundColor: "black",
            }}
            arrows
            prevArrow={
              <SlickButtonFix>
                <LeftOutlined />
              </SlickButtonFix>
            }
            nextArrow={
              <SlickButtonFix>
                <RightOutlined />
              </SlickButtonFix>
            }
          >
            {tweet?.url?.map((url) => (
              <div className='container'>
                <Image
                  src={url}
                  // fluid='true'
                  style={{
                    margin: "auto",
                  }}
                  width={"100%"}
                  height={"auto"}
                />
              </div>
            ))}
          </Carousel>
        </div>
      )}
    </List.Item>
  )
}

export default Tweet
