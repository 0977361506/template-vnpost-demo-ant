import { Tooltip } from 'antd'
import React from 'react'

const BasicComponent = () => {
  return (
    <Tooltip title="prompt text">
      <span>Tooltip will show on mouse enter.</span>
    </Tooltip>
  )
}

export default BasicComponent
