import React from 'react'
import PropTypes from 'prop-types'
import { Typography } from 'antd'

const { Text } = Typography

const CustomText = ({ type, disabled, mark, code, keyboard, underline, strong, italic, text }) => {
  return (
    <Text
      type={type}
      disabled={disabled}
      mark={mark}
      code={code}
      keyboard={keyboard}
      underline={underline}
      strong={strong}
      italic={italic}
    >
      {text}
    </Text>
  )
}

export default CustomText

CustomText.propTypes = {
  type: PropTypes.oneOf(['', 'secondary', 'success', 'warning', 'danger']),
  disabled: PropTypes.bool,
  mark: PropTypes.bool,
  code: PropTypes.bool,
  keyboard: PropTypes.bool,
  underline: PropTypes.bool,
  strong: PropTypes.bool,
  italic: PropTypes.bool,
  text: PropTypes.string,
}

CustomText.defaultProps = {
  type: '',
  disabled: false,
  mark: false,
  code: false,
  keyboard: false,
  underline: false,
  strong: false,
  italic: false,
  text: 'Custom Text',
}
