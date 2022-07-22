/* eslint-disable no-unused-vars */
import React from 'react'
import PropTypes from 'prop-types'
import { Button } from 'antd'

const CustomButton = ({ type, size, icon, disabled, loading, text, shape, ...props }) => {
  return (
    <Button
      type={type}
      size={size}
      shape={shape}
      icon={icon}
      disabled={disabled}
      loading={loading}
      {...props}
    >
      {text}
    </Button>
  )
}

export default CustomButton

CustomButton.propTypes = {
  type: PropTypes.oneOf(['default', 'primary', 'dashed', 'link']),
  size: PropTypes.oneOf(['small', 'default', 'large']),
  shape: PropTypes.oneOf(['', 'circle', 'round']),
  icon: PropTypes.string,
  disabled: PropTypes.bool,
  text: PropTypes.string,
  onClick: PropTypes.func,
}

CustomButton.defaultProps = {
  type: 'default',
  size: 'default',
  icon: '',
  disabled: false,
  shape: '',
  text: 'Custom Button',
  onClick: undefined,
}
