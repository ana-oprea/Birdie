import React, { useState, useRef } from "react"
import { useSelector } from "react-redux"
import { List, BackTop } from "antd"
import TweetCommentModal from "./TweetCommentModal"
import Tweet from "./Tweet"

function TweetsList({ tweets }) {
  const { isLoading } = useSelector((state) => state.tweets)
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [modalTweet, setModalTweet] = useState({
    id: "",
    username: "",
    text: "",
  })

  const handleCancel = () => {
    setIsModalVisible(false)
  }

  return (
    <>
      <List
        loading={isLoading}
        itemLayout='vertical'
        dataSource={tweets}
        style={{ textAlign: "start" }}
        renderItem={(tweet, index) => (
          <Tweet
            tweet={tweet}
            index={index}
            setIsModalVisible={setIsModalVisible}
            setModalTweet={setModalTweet}
          />
        )}
      />
      {isModalVisible && (
        <TweetCommentModal
          isModalVsible={isModalVisible}
          modalTweet={modalTweet}
          handleCancel={handleCancel}
        />
      )}
      <BackTop />
    </>
  )
}

export default TweetsList
