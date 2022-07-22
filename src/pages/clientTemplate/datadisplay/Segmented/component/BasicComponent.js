import React from 'react'
import { Segmented } from 'antd'

const BasicComponent = () => {
  return (
    <>
      <Segmented options={['Daily', 'Weekly', 'Monthly', 'Quarterly', 'Yearly']} />
    </>
  )
}

export default BasicComponent
