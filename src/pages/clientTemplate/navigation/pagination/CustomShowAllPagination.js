import { Pagination } from 'antd'
import React from 'react'

const CustomShowAllPagination = () => (
  <Pagination
    total={85}
    showSizeChanger
    showQuickJumper
    showTotal={(total) => `Total ${total} items`}
  />
)

export default CustomShowAllPagination
