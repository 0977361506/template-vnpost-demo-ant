import React, { useState } from 'react'
import Button from './index'

export default {
  title: 'Example/Button',
  component: Button,
  parameters: {
    layout: 'fullscreen',
  },
}
const [value, setValue] = useState(3)

const defaultArgs = {
  showNumber: true,
  max: 24,
  min: 0,
  value,
  upHandler: () => {
    setValue(value + 1)
  },
  downHandler: () => {
    setValue(value - 1)
  },
}

const Template = (args) => <Button {...args} />

export const Primary = Template.bind({})

Primary.args = defaultArgs
