/* eslint-disable react/destructuring-assignment */
import styled from 'styled-components'
import React from 'react'
import { Typography, Button } from 'antd'

const { Text } = Typography
const ButtonCustom = styled(Button)`
  &&& {
    width: 124px;
    float: right;
  }
`
const DivCustom = styled.div`
  &&& {
    margin-top: 16px;
    height: 44px;
    display: flex;
    align-items: center;
  }
`
const TextCustom = styled(Text)`
  &&& {
    flex: 1;
  }
`

const CustomStepper = (pros) => {
  return (
    <DivCustom>
      <TextCustom>{pros.label}</TextCustom>
      <ButtonCustom {...pros} />
    </DivCustom>
  )
}

export default CustomStepper
