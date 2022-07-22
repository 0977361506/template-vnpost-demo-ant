import React from 'react'
import PropTypes from 'prop-types'
import { Typography } from 'antd'

const { Title } = Typography

const CustomTitle = ({ level, text }) => {
  return <Title level={level}>{text}</Title>
}

export default CustomTitle

CustomTitle.propTypes = {
  level: PropTypes.number,
  text: PropTypes.string,
}

CustomTitle.defaultProps = {
  level: 1,
  text: 'Default Title',
}
