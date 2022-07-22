import { Divider, Space, Typography } from 'antd'
import React from 'react'

const SplitComponent = () => (
  <Space split={<Divider type="vertical" />}>
    <Typography.Link>Link</Typography.Link>
    <Typography.Link>Link</Typography.Link>
    <Typography.Link>Link</Typography.Link>
  </Space>
)

export default SplitComponent
