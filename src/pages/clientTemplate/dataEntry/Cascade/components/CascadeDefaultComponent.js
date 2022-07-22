import { Cascader } from 'antd'
import React, { useState } from 'react'

const CascadeDefaultComponent = () => {
  const [value, setValue] = useState([])
  const options = [
    {
      value: 'Bắc Ninh',
      label: 'Bưu cục tỉnh bắc ninh',
      children: [
        {
          value: 'Gia bình',
          label: 'Bưu cục huyện gia bình',
          children: [
            {
              value: 'Đông cứu',
              label: 'Bưu cục đông cứu',
            },
          ],
        },
      ],
    },
    {
      value: 'Hà nội',
      label: 'Bưu cục tỉnh Hà nội',
      children: [
        {
          value: 'Nam từ liêm',
          label: 'Bưu cục huyện nam từ liêm',
          children: [
            {
              value: 'Hà đông',
              label: 'Bưu cục Hà Đông',
            },
            {
              value: 'Mỹ Đình',
              label: 'Bưu cục Mỹ Đình',
            },
          ],
        },
      ],
    },
  ]

  const onChange = (data) => {
    setValue(data)
    console.log(data)
  }

  return (
    <Cascader
      value={value}
      style={{
        width: '100%',
      }}
      // size="large"
      options={options}
      onChange={onChange}
      placeholder="Chọn đơn vị"
      allowClear="true"
    />
  )
}
export default CascadeDefaultComponent
