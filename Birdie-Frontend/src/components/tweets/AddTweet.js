import React, { useEffect, useState } from "react"
import { Avatar, Button, Comment, Row, Col, Input, Form, Upload } from "antd"
import { addTweet } from "./tweetsSlice"
import { useDispatch, useSelector } from "react-redux"
import { UploadOutlined } from "@ant-design/icons"
import "./tweets.css"

const { TextArea } = Input

function AddTweet({ parentId }) {
  const [form] = Form.useForm()
  const [tweetText, setTweetText] = useState("")
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.auth)
  const [fileList, setFileList] = useState([])

  const handleFinish = () => {
    const fileListUrls = []
    if (fileList.length > 0) {
      fileList.forEach((file) => {
        fileListUrls.push(file.url)
      })
      console.log({ fileListUrls })
    }

    dispatch(
      addTweet({
        tweetData: {
          parentId: parentId === null ? null : parentId,
          userId: user.id,
          text: tweetText,
          likes: "0",
          retweets: "0",
        },
        url: fileListUrls,
      })
    )
  }

  const onChange = ({ file, fileList }) => {
    setFileList(fileList)
    console.log({ file, fileList })

    const reader = new FileReader()
    reader.readAsDataURL(file.originFileObj)

    reader.onloadend = () => {
      console.log("reader.result", reader.result)
      file.url = reader.result
      console.log("onloadend")
      console.log({ file, fileList })
    }

    if (file.status !== "uploading") {
      console.log(file, fileList)
    }
  }

  const onPreview = async (file) => {
    let src = file.url
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader()
        reader.readAsDataURL(file.originFileObj)
        console.log({ reader })
        reader.onload = () => resolve(reader.result)
      })
    }

    const image = new Image()
    image.src = src
    const imgWindow = window.open(src)
    imgWindow?.document.write(image.outerHTML)
  }

  return (
    <Comment
      className='align-tweets'
      author={<a>{user.username}</a>}
      avatar={<Avatar src={user.avatar} alt='Han Solo' />}
      content={
        <Form
          form={form}
          name='addTweet'
          initialValues={{ tweetText: "", fileInputState: "" }}
          onFinish={handleFinish}
        >
          <Row gutter={16}>
            <Col span={20}>
              <Form.Item name='tweetText'>
                <TextArea
                  value={tweetText}
                  data-cy='addtweet--textarea'
                  placeholder="What's happening?"
                  onChange={(e) => setTweetText(e.target.value)}
                  autoSize={{
                    minRows: 3,
                    maxRows: 5,
                  }}
                />
              </Form.Item>

              <Form.Item name='upload'>
                <Upload
                  listType='picture-card'
                  fileList={fileList}
                  onChange={onChange}
                  onPreview={onPreview}
                  customRequest={({ onSuccess }) => {
                    setTimeout(() => {
                      onSuccess("ok")
                    }, 0)
                  }}
                >
                  Upload
                </Upload>
              </Form.Item>
            </Col>

            <Col span={1}>
              <Form.Item>
                <Button htmlType='submit' shape='round' type='primary'>
                  Tweet
                </Button>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      }
    />
  )
}

export default AddTweet
