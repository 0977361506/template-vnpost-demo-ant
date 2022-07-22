import { Cascader } from 'antd'
import React from 'react'

const { SHOW_CHILD } = Cascader
const options = [
  {
    label: 'Light',
    value: 'light',
    children: new Array(20).fill(null).map((_, index) => ({
      label: `Number ${index}`,
      value: index,
    })),
  },
  {
    label: 'Bamboo',
    value: 'bamboo',
    children: [
      {
        label: 'Little',
        value: 'little',
        children: [
          {
            label: 'Toy Fish',
            value: 'fish',
          },
          {
            label: 'Toy Cards',
            value: 'cards',
          },
          {
            label: 'Toy Bird',
            value: 'bird',
          },
        ],
      },
    ],
  },
]

const CascadeCheckboxComponent = () => {
  const onChange = (value) => {
    console.log(value)
  }

  return (
    <Cascader
      style={{
        width: '100%',
      }}
      options={options}
      onChange={onChange}
      multiple
      maxTagCount="responsive"
      showCheckedStrategy={SHOW_CHILD}
      defaultValue={[
        ['bamboo', 'little', 'fish'],
        ['bamboo', 'little', 'cards'],
        ['bamboo', 'little', 'bird'],
      ]}
    />
  )
}

export default CascadeCheckboxComponent
