/* eslint-disable react/no-array-index-key */
import { Button, Space } from 'antd'
import React from 'react'

const WrapComponent = () => (
  <Space size={[8, 16]} wrap>
    {new Array(25).fill(null).map((_, index) => (
      <Button key={index}>Button</Button>
    ))}
  </Space>
)

export default WrapComponent
