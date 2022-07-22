import React from 'react'
import CustomTitle from './CustomTitle'

export default {
  title: 'General/Typography/CustomTitle',
  component: CustomTitle,
}

const Template = (args) => <CustomTitle {...args} />

export const H1 = Template.bind({})

H1.args = {
  level: 1,
  text: 'H1 Title',
}

export const H2 = Template.bind({})
H2.args = {
  level: 2,
  text: 'H2 Title',
}

export const H3 = Template.bind({})
H3.args = {
  level: 3,
  text: 'H3 Title',
}

export const H4 = Template.bind({})
H4.args = {
  level: 4,
  text: 'H4 Title',
}

export const H5 = Template.bind({})
H5.args = {
  level: 5,
  text: 'H5 Title',
}
