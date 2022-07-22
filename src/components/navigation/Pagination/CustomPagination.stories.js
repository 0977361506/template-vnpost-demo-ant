import React from 'react'
import CustomPagination from './CustomPagination'

export default {
  title: 'Navigation/Pagination/CustomPagination',
  component: CustomPagination,
}

const Template = (args) => {
  return <CustomPagination {...args} />
}
export const DefaultPagination = Template.bind({})

DefaultPagination.args = {
  current: 1,
  total: 50,
  pageSize: 10,
  onChange: () => {},
  showSizeChanger: true,
  showQuickJumper: true,
  size: 'default',
  simple: false,
  disabled: false,
}
