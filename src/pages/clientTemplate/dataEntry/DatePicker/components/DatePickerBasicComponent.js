import { DatePicker } from 'antd'
import React from 'react'
import moment from 'moment'

const onChange = (date, dateString) => {
  console.log(date, dateString) // dateString is value send to server
}

const DatePickerBasicComponent = () => {
  const { RangePicker } = DatePicker
  const dateFormat = 'DD/MM/YYYY'
  return (
    <>
      <h3 className="mt-3">I, Select date</h3>
      <DatePicker onChange={onChange} className="mt-3" />
      <br />
      <h3 className="mt-3">II, Select month</h3>
      <DatePicker onChange={onChange} picker="month" className="mt-3" />
      <br />
      <h3 className="mt-3">III, Select year</h3>
      <DatePicker onChange={onChange} picker="year" className="mt-3" />
      <br />
      <h3 className="mt-3">III, Select range date</h3>
      <RangePicker
        defaultValue={[moment('2015/01/01', dateFormat), moment('2015/01/01', dateFormat)]}
        format={dateFormat}
        className="mt-3"
      />
    </>
  )
}

export default DatePickerBasicComponent
