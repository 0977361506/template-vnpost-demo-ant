import { UserOutlined, AntDesignOutlined } from '@ant-design/icons'
import React from 'react'
import { Avatar, Image, Badge } from 'antd'

const AvatarPage = () => {
  return (
    <div className="content-warp-content">
      <h3>
        1. Avatars can be used to represent people or objects. It supports images, Icons, or
        letters.
      </h3>
      <div className="w-full common-warp-layout">
        <Avatar size={64} icon={<UserOutlined />} />
        <Avatar size="large" icon={<UserOutlined />} />
        <Avatar icon={<UserOutlined />} />
        <Avatar size="small" icon={<UserOutlined />} />
      </div>
      <br />
      <div className="w-full common-warp-layout">
        <Avatar shape="square" size={64} icon={<UserOutlined />} />
        <Avatar shape="square" size="large" icon={<UserOutlined />} />
        <Avatar shape="square" icon={<UserOutlined />} />
        <Avatar shape="square" size="small" icon={<UserOutlined />} />
      </div>
      <br />
      <div className="w-full common-warp-layout">
        <Avatar icon={<UserOutlined />} />
        <Avatar>U</Avatar>
        <Avatar size={40}>USER</Avatar>
        <Avatar src="https://joeschmoe.io/api/v1/random" />
        <Avatar src={<Image src="https://joeschmoe.io/api/v1/random" style={{ width: 32 }} />} />
        <Avatar style={{ color: '#f56a00', backgroundColor: '#fde3cf' }}>U</Avatar>
        <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
      </div>
      <br />
      <h3>- size follow screen</h3>
      <div className="w-full common-warp-layout">
        <Avatar
          size={{
            xs: 24,
            sm: 32,
            md: 40,
            lg: 64,
            xl: 80,
            xxl: 100,
          }}
          icon={<AntDesignOutlined />}
        />
      </div>
      <br />
      <div className="w-full flex">
        <div className="mr-5">
          <span className="avatar-item">
            <Badge count={1}>
              <Avatar shape="square" icon={<UserOutlined />} />
            </Badge>
          </span>
        </div>
        <div>
          <span>
            <Badge dot>
              <Avatar shape="square" icon={<UserOutlined />} />
            </Badge>
          </span>
        </div>
      </div>
      <br />
      <div className="w-full">
        <div className="warp-avatar">
          <Avatar
            size={{
              xs: 24,
              sm: 32,
              md: 40,
              lg: 64,
              xl: 100,
              xxl: 120,
            }}
            src="https://joeschmoe.io/api/v1/random"
          />
          <div>
            <img src="/img/icon_star_avt.svg" alt="" />
          </div>
          <div className="warp-text-avt">
            <h3>Nguyễn Ngọc Anh</h3>
            <p>100 lớp</p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default AvatarPage
