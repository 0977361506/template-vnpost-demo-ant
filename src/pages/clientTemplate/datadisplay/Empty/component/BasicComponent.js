import { Empty } from 'antd'
import React from 'react'

const BasicComponent = () => {
  return (
    <>
      <Empty />
      <br />
      <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
    </>
  )
}

export default BasicComponent
