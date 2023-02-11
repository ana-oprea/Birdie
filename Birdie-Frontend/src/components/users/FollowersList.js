import React, { useEffect } from 'react';
import 'antd/dist/antd.css';
import { Modal, Avatar, List, Button, Spin } from 'antd';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
  getFollowedUsers,
  getFollowers,
  followUser,
  unfollowUser,
  toggleFollow,
} from './usersSlice';
import { LoadingOutlined } from '@ant-design/icons';
import '../../pages/profile.css';

function FollowersList({
  userId,
  userType,
  homeUserId,
  setIsModalVisible,
  isModalVisible,
}) {
  const dispatch = useDispatch();
  const { isLoading, followers, followedUsers } = useSelector(
    (state) => state.users
  );

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleOnClickFollow = (user, index) => {
    if (user.id !== userId) {
      const data = { userId: homeUserId, followedUserId: user.id };
      if (user.isFollowed === false) {
        dispatch(followUser(data));
        dispatch(toggleFollow({ index, userType }));
      } else {
        dispatch(unfollowUser(data));
        dispatch(toggleFollow({ index, userType }));
      }
    }
  };

  useEffect(() => {
    const data = {
      userId: userId,
      homeUserId: homeUserId,
    };
    userType === 'followers'
      ? dispatch(getFollowers(data))
      : dispatch(getFollowedUsers(data));
  }, []);

  return (
    <>
      <Modal
        title={userType === 'followers' ? 'Followers' : 'Following'}
        visible={isModalVisible}
        centered
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        {isLoading && (
          <Spin
            indicator={
              <LoadingOutlined
                style={{
                  fontSize: '50px',
                  marginLeft: '175px',
                }}
                spin
              />
            }
          />
        )}

        {isLoading === false && (
          <List
            itemLayout='horizontal'
            dataSource={userType === 'followers' ? followers : followedUsers}
            renderItem={(user, index) => (
              <List.Item>
                <List.Item.Meta
                  avatar={<Avatar src={user.avatar} />}
                  title={
                    <Link
                      to={`/profile/${user.id}`}
                      onClick={() => handleCancel()}
                    >
                      {user.name}
                    </Link>
                  }
                />
                {userType === 'followedUsers' && homeUserId != user.id && (
                  <Button
                    shape='round'
                    className={
                      user.isFollowed === false ? 'btn-white' : 'btn-blue'
                    }
                    onClick={() => handleOnClickFollow(user, index)}
                  >
                    {/* {user.isFollowed === false ? <>Follow</> : <>Following</>} */}
                    {user.isFollowed === true ? (
                      <>Following</>
                    ) : user.followsHomeUser === true ? (
                      <>Follow back</>
                    ) : (
                      <>Follow</>
                    )}
                  </Button>
                )}
                {userType === 'followers' && homeUserId != user.id && (
                  <Button
                    shape='round'
                    className={
                      user.isFollowed === false ? 'btn-white' : 'btn-blue'
                    }
                    onClick={() => handleOnClickFollow(user, index)}
                  >
                    {user.isFollowed === true ? (
                      <>Following</>
                    ) : user.followsHomeUser === true ? (
                      <>Follow back</>
                    ) : (
                      <>Follow</>
                    )}
                  </Button>
                )}
              </List.Item>
            )}
          />
        )}
      </Modal>
    </>
  );
}

export default FollowersList;
