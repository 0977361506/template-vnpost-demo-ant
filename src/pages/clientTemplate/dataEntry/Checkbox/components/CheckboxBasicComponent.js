import { Checkbox } from 'antd'
import React from 'react'

const onChange = (e) => {
  console.log(`checked = ${e.target.checked}`)
}

const CheckboxBasicComponent = () => {
  return (
    <div>
      <Checkbox onChange={onChange} className="mt-3">
        Checkbox
      </Checkbox>
      <Checkbox defaultChecked={false} disabled className="mt-3">
        Checkbox disable
      </Checkbox>
    </div>
  )
}

export default CheckboxBasicComponent
