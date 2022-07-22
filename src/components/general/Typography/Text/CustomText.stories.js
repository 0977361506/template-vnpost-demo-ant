import React from 'react'
import CustomText from './CustomText'

export default {
  title: 'General/Typography/CustomText',
  component: CustomText,
}

const Template = (args) => <CustomText {...args} />

export const Default = Template.bind({})

Default.args = {
  type: '',
  text: 'Default Text',
}

export const Secondary = Template.bind({})
Secondary.args = {
  type: 'secondary',
  text: 'Secondary Text',
}

export const Success = Template.bind({})
Success.args = {
  type: 'success',
  text: 'Success Text',
}

export const Warning = Template.bind({})
Warning.args = {
  type: 'warning',
  text: 'Warning Text',
}

export const Danger = Template.bind({})
Danger.args = {
  type: 'danger',
  text: 'Danger Text',
}

export const Disable = Template.bind({})
Disable.args = {
  disabled: true,
  text: 'Disabled Text',
}

export const Mark = Template.bind({})
Mark.args = {
  mark: true,
  text: 'Mark Text',
}

export const Code = Template.bind({})
Code.args = {
  code: true,
  text: 'Code Text',
}

export const Keyboard = Template.bind({})
Keyboard.args = {
  keyboard: true,
  text: 'Keyboard Text',
}

export const Underline = Template.bind({})
Underline.args = {
  underline: true,
  text: 'Underline Text',
}

export const Strong = Template.bind({})
Strong.args = {
  strong: true,
  text: 'Strong Text',
}

export const Italic = Template.bind({})
Italic.args = {
  italic: true,
  text: 'Italic Text',
}
