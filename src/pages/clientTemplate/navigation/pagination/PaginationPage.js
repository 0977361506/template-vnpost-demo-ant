import { Pagination } from 'antd'
import React from 'react'
import CustomShowAllPagination from './CustomShowAllPagination'
import CustomSimplePagination from './CustomSimplePagination'

const PaginationPage = () => {
  return (
    <div>
      <Pagination simple defaultCurrent={2} total={50} />
      <br />
      <CustomSimplePagination />
      <br />
      <CustomShowAllPagination />
    </div>
  )
}

export default PaginationPage
