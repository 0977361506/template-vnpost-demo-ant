import {
  BellOutlined,
  CloseOutlined,
  LogoutOutlined,
  QuestionCircleOutlined,
  SearchOutlined,
  // MenuFoldOutlined,
  // MenuUnfoldOutlined,
  UserOutlined,
} from '@ant-design/icons'
import { Dropdown, Image, Layout, Menu, Space, Input } from 'antd'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Cookies from 'js-cookie'

// import appLogo from '/img/LogoVNPOST.svg'
const { Search } = Input
const { Header } = Layout
const onSearch = (value) => console.log(value)
const HeaderComponent = () => {
  const [openSearch, setOpenSearch] = useState(false)

  return (
    <>
      <Header className="site-layout-background app-header">
        <div className="left">
          {/* <div className="toggle">
            {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: () => callback(!collapsed),
            })}
          </div> */}
          <a href="/" className="app-header-logo flex">
            <img style={{ width: '61px' }} src="/img/LogoVNPOST.svg" alt="" />
            <div>Tên hệ thống</div>
          </a>
        </div>
        <Space className="right" size={24}>
          <div className="flex align-items-center">
            <Search
              placeholder="input search text"
              onSearch={onSearch}
              style={{
                width: 300,
                marginRight: '12px',
              }}
              className={`${openSearch ? '' : 'hidden_search'} transition_all_02`}
            />

            {React.createElement(openSearch ? CloseOutlined : SearchOutlined, {
              className: 'trigger',
              onClick: () => setOpenSearch(!openSearch),
            })}
          </div>
          <div>
            <QuestionCircleOutlined
              style={{ fontSize: '18px', marginRight: '10px', cursor: 'pointer' }}
            />
          </div>
          <div>
            <BellOutlined style={{ fontSize: '18px', marginRight: '10px', cursor: 'pointer' }} />
          </div>
          <Dropdown
            className="ms-3 dropdown-box-login"
            overlay={
              <Menu
                style={{
                  marginRight: '40px',
                  width: '240px',
                  height: '120px',
                  boxShadow: '0px 4px 16px rgba(0, 0, 0, 0.16)',
                  borderRadius: '8px',
                }}
                className="ul-container"
              >
                <Menu.Item icon={<UserOutlined />} key={2}>
                  <Link to="/userInformation">Thông tin tài khoản</Link>
                </Menu.Item>
                <Menu.Item icon={<LogoutOutlined />} key={3}>
                  <Link to="/login">Đăng nhập</Link>
                </Menu.Item>
                <Menu.Item icon={<LogoutOutlined />} key={3}>
                  <Link onClick={() => Cookies.set('token', '')} to="/login">
                    Đăng xuất
                  </Link>
                </Menu.Item>
              </Menu>
            }
            placement="bottom"
            key="avatar"
            trigger={['click']}
          >
            <Space style={{ cursor: 'pointer' }}>
              <Image
                src="https://scontent.fhan4-3.fna.fbcdn.net/v/t1.6435-9/185807983_3629035960654199_844363685957488110_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=174925&_nc_ohc=ksuw1SSwGPkAX-DENir&_nc_ht=scontent.fhan4-3.fna&oh=00_AT9o86t4ibciKVSYURtB99nxCqOjcGf3jwNhn1abjg0_Vw&oe=62F32FC0"
                preview={false}
                style={{
                  cursor: 'pointer',
                  borderRadius: '50%',
                }}
                height={32}
                width={32}
              />
              <div>Serati Ma</div>
            </Space>
          </Dropdown>
          <Dropdown
            overlay={
              <Menu
                style={{
                  marginRight: '40px',
                  width: '100px',
                  height: '80px',
                  boxShadow: '0px 4px 16px rgba(0, 0, 0, 0.16)',
                  borderRadius: '8px',
                }}
                className="ul-container"
              >
                <Menu.Item key={7}>
                  <Link to="#a">Tiếng Việt</Link>
                </Menu.Item>
                <Menu.Item key={8}>
                  <Link to="#a">Anh</Link>
                </Menu.Item>
              </Menu>
            }
            placement="bottom"
            key="lang"
            trigger={['click']}
          >
            <img style={{ cursor: 'pointer' }} src="/img/icon_language.svg" alt="lang" />
          </Dropdown>
        </Space>
      </Header>
    </>
  )
}
export default HeaderComponent
