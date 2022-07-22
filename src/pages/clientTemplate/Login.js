/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { Button, Input } from 'antd'
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom'
import { LockOutlined, UserOutlined } from '@ant-design/icons'

const Login = () => {
  const navigate = useNavigate()
  const [token, setToken] = useState(Cookies.get('token'))
  const handler = (key) => {
    Cookies.set('token', key || '', { expires: 1 })
    setToken(key)
    if (key) {
      navigate('/')
    }
  }
  return (
    <>
      <div className="bg_login">
        <div className="login-warp">
          <div>
            <img src="/img/logo.svg" alt="logo" />
          </div>
          <div className="mt-4">
            <h1>Đăng nhập</h1>
            <div className="mt-4">
              <div>
                <Input
                  size="large"
                  style={{ width: '360px' }}
                  placeholder="Tên đăng nhập"
                  prefix={<UserOutlined />}
                />
              </div>
              <div className="mt-4">
                <Input
                  size="large"
                  type="password"
                  style={{ width: '360px' }}
                  placeholder="Mật khẩu"
                  prefix={<LockOutlined />}
                />
              </div>
              <Button
                size="large"
                style={{
                  width: '360px',
                  margin: '24px auto 12px auto',
                  color: '#000000',
                  backgroundColor: '#FCB71E',
                  border: 'none',
                }}
                onClick={() => handler('123')}
              >
                Đăng nhập
              </Button>
              <div>
                <a href="/a"> Bạn quên mật khẩu?</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        {/* <Button type={!token && 'primary'} onClick={() => handler()}>
          logout
        </Button> */}
        {/* <Button type={token && 'primary'} onClick={() => handler('123')}>
          login
        </Button> */}
      </div>
    </>
  )
}

export default Login
