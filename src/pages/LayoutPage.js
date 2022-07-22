import { Layout } from 'antd'
import { Route, Routes } from 'react-router-dom'
import React from 'react'
import Login from 'pages/clientTemplate/Login'
import WithCookie from 'pages/withCookie'

const LayoutPage = () => {
  return (
    <Layout style={{ height: '100vh' }} className="app-layout">
      <Routes>
        <Route key="/login" path="/login" element={<Login />} />
        <Route path="*" element={<WithCookie />} />
      </Routes>
    </Layout>
  )
}

export default LayoutPage
