import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Form, Input } from 'antd';
import { useNavigate, useParams } from 'react-router-dom';
import { getUserById, editUser } from '../components/users/usersSlice.js';

const { TextArea } = Input;

function EditProfile() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const params = useParams();
  const userId = params.userId;
  const { userData } = useSelector((state) => state.users);
  const { user } = useSelector((state) => state.auth);
  useEffect(() => {
    const data = {
      userId: user.id,
      followedUserId: userId,
    };
    dispatch(getUserById(data));
  }, []);

  const handleFinish = (values) => {
    dispatch(editUser({ ...values, id: userId }));
    navigate(`/profile/${userId}`);
  };

  const onFinishFailed = (errorInfo) => {};

  return (
    <>
      {userData && (
        <Form
          style={{ margin: '0 25%' }}
          name='editUser'
          initialValues={{
            avatar: userData.avatar,
            background: userData.background,
            name: userData.name,
            bio: userData.bio,
          }}
          onFinish={handleFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item name='avatar' label='Upload Avatar'>
            <Input placeholder='Avatar link' />
          </Form.Item>

          <Form.Item name='background' label='Upload Background'>
            <Input placeholder='Background link' />
          </Form.Item>

          <Form.Item name='name'>
            <Input placeholder='Name' />
          </Form.Item>

          <Form.Item name='bio'>
            <TextArea placeholder='Bio' />
          </Form.Item>

          <Form.Item>
            <Button
              type='primary'
              htmlType='submit'
              className='login-form-button'
            >
              Submit
            </Button>
          </Form.Item>

          <Form.Item>
            <Button
              type='primary'
              htmlType='cancel'
              className='login-form-button'
            >
              Cancel
            </Button>
          </Form.Item>
        </Form>
      )}
    </>
  );
}

export default EditProfile;
