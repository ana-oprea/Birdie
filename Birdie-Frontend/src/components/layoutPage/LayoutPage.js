import React, { useState, useEffect } from 'react';
import 'antd/dist/antd.css';
import './layout.css';
import { Layout, Menu, Input, Row, Col, Dropdown, Button, Avatar } from 'antd';
import { Outlet, NavLink, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getUsersByUsername } from '../users/usersSlice.js';
import { logout } from '../auth/authSlice';

let activeClassName = 'underline';
const { Header, Content, Footer } = Layout;
const { Search } = Input;

function LayoutPage({ socket }) {
  const { user } = useSelector((state) => state.auth);
  const [searchItem, setSearchItem] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { searchedUsers, isLoading } = useSelector((state) => state.users);
  const [visible, setVisible] = useState(false);
  const menuItems = [
    {
      key: '',
      label: (
        <NavLink
          to='/'
          className={({ isActive }) => (isActive ? activeClassName : undefined)}
          onClick={() => (href = window.location.href.split('/'))}
        >
          {/* <Button>Tweets</Button> */}
          Tweets
        </NavLink>
      ),
    },
    {
      key: 'profile',
      label: (
        <>
          <Avatar src={user.avatar} />{' '}
          <NavLink
            to={`/profile/${user.id}`}
            className={({ isActive }) =>
              isActive ? activeClassName : undefined
            }
            onClick={() => (href = window.location.href.split('/'))}
          >
            {/* <Button>Profile</Button> */}
            Profile
          </NavLink>
        </>
      ),
    },
    {
      key: 'chat',
      label: (
        <NavLink
          to='/chat'
          className={({ isActive }) => (isActive ? activeClassName : undefined)}
          onClick={() => (href = window.location.href.split('/'))}
        >
          {/* <Button>tweet1</Button> */}
          Messages
        </NavLink>
      ),
    },
    {
      key: 'logout',
      label: (
        <Button
          ghost={true}
          style={{
            border: 'none',
            color: 'hsla(0,0%,100%,.65)',
          }}
          onClick={() => {
            dispatch(logout());
            // socket.disconnect()
            navigate('/login');
            // window.location.reload()
          }}
        >
          Log Out
        </Button>
      ),
    },
  ];
  let href = window.location.href.split('/');

  const handleMenuClick = (e) => {
    setVisible(false);
    navigate(`/profile/${e.key}`);
  };

  const menu = (
    <Menu
      onClick={handleMenuClick}
      items={[
        {
          key: searchedUsers.length > 0 ? searchedUsers[0].id : '',
          label: searchedUsers.length > 0 ? searchedUsers[0].username : '',
        },
      ]}
    />
  );

  const handleVisibleChange = (flag) => {
    setVisible(flag);
  };

  const onSearch = (value) => {
    setSearchItem(value);
  };

  useEffect(() => {
    dispatch(getUsersByUsername(searchItem));
  }, [searchItem]);

  return (
    <Layout className='layout'>
      <Header>
        <div className='logo' />
        {/* <Menu
        theme='dark'
        mode='horizontal'
        defaultSelectedKeys={["2"]}
        items={menuItems}
      /> */}
        {/* {menuItems.map((item) => item.label)} */}
        <Row>
          <Col span={9}>
            <Menu
              theme='dark'
              mode='horizontal'
              selectedKeys={href[3]}
              items={menuItems}
            />
          </Col>
          <Col span={6} style={{ marginTop: '12px' }}>
            <Dropdown
              overlay={menu}
              onVisibleChange={handleVisibleChange}
              visible={visible}
            >
              <Search
                className='navbar--search'
                placeholder='Search Twitter'
                enterButton='Search'
                loading={isLoading}
                size='large'
                onSearch={onSearch}
              />
            </Dropdown>
          </Col>
          <Col span={9}></Col>
        </Row>
      </Header>
      <Content
        style={{
          padding: '50px 0',
          margin: '0 10%',
          minHeight: '100vh',
        }}
      >
        <div
          className='site-layout-content'
          style={{
            boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
          }}
        >
          <Outlet />
        </div>
      </Content>
      <Footer
        style={{
          textAlign: 'center',
        }}
      >
        Ant Design ©2018 Created by Ant UED
      </Footer>
    </Layout>
  );
}
export default LayoutPage;
