import React, { useState } from 'react'
import Cookies from 'js-cookie'
import AsideComponent from 'components/layout/AsideComponent'
import HeaderComponent from 'components/layout/HeaderComponent'
import { Layout } from 'antd'
import routes from 'routes'
import { Route, Routes } from 'react-router-dom'

const { Content } = Layout

const withCookie = () => {
  const [collapsed, setCollapsed] = useState(false)
  const setupAccountInfo = () => {
    // call api get info user
  }
  const token = Cookies.get('token')
  if (token) {
    setupAccountInfo()
    return (
      <>
        <HeaderComponent collapsed={collapsed} callback={setCollapsed} />
        <Layout className="site-layout">
          <AsideComponent collapsed={collapsed} callback={setCollapsed} />
          <Content
            className="site-layout-background"
            style={{
              marginTop: '48px',
              padding: 24,
              height: 'auto',
              minHeight: 280,
              maxHeight: 'calc(100vh - 48px)',
              marginLeft: collapsed ? 48 : 300,
              overflow: 'auto',
            }}
          >
            <Routes>
              {routes.map(({ path, main, exact }) => {
                return <Route exact={exact} key={path} path={path} element={main()} />
              })}
            </Routes>
          </Content>
        </Layout>
      </>
    )
  }

  window.location.assign('/login')
  return <></>
}

export default withCookie
