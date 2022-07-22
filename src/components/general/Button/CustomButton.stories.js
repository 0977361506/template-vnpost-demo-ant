/* eslint-disable no-unused-vars */
/* eslint-disable react/destructuring-assignment */

import React from 'react'
import { DownloadOutlined, AlertOutlined } from '@ant-design/icons'
import CustomButton from './CustomButton'

export default {
  title: 'General/Button/CustomButton',
  component: CustomButton,
}

const Icons = {
  DownloadOutlined,
  AlertOutlined,
}

const Template = ({ icon, ...args }) => {
  const Component = icon && Icons[icon]
  return Component ? <CustomButton {...args} icon={<Component />} /> : <CustomButton {...args} />
}

export const ButtonWithIcon = Template.bind({})

ButtonWithIcon.args = {
  text: 'Button With Icon',
  icon: 'AlertOutlined',
}

export const DefaultButton = Template.bind({})

DefaultButton.args = {
  text: 'Default Button',
  icon: '',
}
