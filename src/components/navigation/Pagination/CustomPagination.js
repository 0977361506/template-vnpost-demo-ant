import React from 'react'
import PropTypes from 'prop-types'
import { Pagination } from 'antd'

const CustomPagination = ({
  current,
  total,
  pageSize,
  onChange,
  showSizeChanger,
  showQuickJumper,
  showTotal,
  size,
  simple,
  disabled,
  ...props
}) => {
  return (
    <Pagination
      current={current}
      total={total}
      pageSize={pageSize}
      onChange={onChange}
      showSizeChanger={showSizeChanger}
      showQuickJumper={showQuickJumper}
      simple={simple}
      disabled={disabled}
      size={size}
      {...props}
    />
  )
}

export default CustomPagination

CustomPagination.propTypes = {
  current: PropTypes.number,
  total: PropTypes.number,
  pageSize: PropTypes.number,
  onChange: PropTypes.func,
  showSizeChanger: PropTypes.bool,
  showQuickJumper: PropTypes.bool,
  size: PropTypes.oneOf(['small', 'default']),
  simple: PropTypes.bool,
  disabled: PropTypes.bool,
}

CustomPagination.defaultProps = {
  current: 1,
  total: 50,
  pageSize: 10,
  onChange: () => {},
  showSizeChanger: false,
  showQuickJumper: false,
  size: 'default',
  simple: false,
  disabled: false,
}
