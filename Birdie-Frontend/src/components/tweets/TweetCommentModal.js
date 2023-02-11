import React from "react"
import { Avatar, Comment, Modal } from "antd"
import AddTweet from "./AddTweet"
import { useNavigate } from "react-router-dom"

function TweetCommentModal({ isModalVsible, handleCancel, modalTweet }) {
  const navigate = useNavigate()
  const handleGoToTweet = (tweet) => navigate(`/tweets/${tweet.id}`)

  return (
    <Modal visible={isModalVsible} onCancel={handleCancel} footer={[]}>
      <Comment
        author={<a>{modalTweet.username}</a>}
        avatar={<Avatar src={modalTweet.avatar} alt='Han Solo' />}
        content={
          <div>
            <p onClick={() => handleGoToTweet(modalTweet)}>{modalTweet.text}</p>
            <hr />
          </div>
        }
      ></Comment>

      <AddTweet parentId={modalTweet.id} />
    </Modal>
  )
}

export default TweetCommentModal
