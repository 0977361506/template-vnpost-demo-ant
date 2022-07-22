// import React from 'react'
// import Calendar from 'components/layout/Calendar'

// export default () => {
//   return <Calendar />
// }

import React from 'react'
import { Space, Typography } from 'antd'

const { Title, Text, Link } = Typography

const TypographyPage = () => {
  return (
    <div className="content-warp-content">
      <h3>I, Display title in different level.</h3>
      <br />
      <div className="w-100">
        <Title level={1}>h1. Ant Design</Title>
        <Title level={2}>h2. Ant Design</Title>
        <Title level={3}>h3. Ant Design</Title>
        <Title level={4}>h4. Ant Design</Title>
        <Title level={5}>h5. Ant Design</Title>
      </div>
      <br />
      <h3>II, Provides multiple types of text and link.</h3>
      <br />
      <div className="w-100">
        <Space direction="vertical">
          <Text>Ant Design (default)</Text>
          <Text type="secondary">Ant Design (secondary)</Text>
          <Text type="success">Ant Design (success)</Text>
          <Text type="warning">Ant Design (warning)</Text>
          <Text type="danger">Ant Design (danger)</Text>
          <Text disabled>Ant Design (disabled)</Text>
          <Text mark>Ant Design (mark)</Text>
          <Text code type="">
            Ant Design (code)
          </Text>
          <Text keyboard>Ant Design (keyboard)</Text>
          <Text underline>Ant Design (underline)</Text>
          <Text delete>Ant Design (delete)</Text>
          <Text strong>Ant Design (strong)</Text>
          <Text italic>Ant Design (italic)</Text>
          <Link href="https://ant.design" target="_blank">
            Ant Design (Link)
          </Link>
        </Space>
      </div>
    </div>
  )
}

export default TypographyPage
