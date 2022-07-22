import styled from 'styled-components'
import { Col, Row, TimePicker } from 'antd'
import React from 'react'
import moment from 'moment'

const Wrapper = styled.section`
  border: 1px solid rgba(0, 0, 0, 0.06);
  border-radius: 2px;
  min-height: 200px;
  padding: 60px;
  height: 85vh;
  overflow: auto;
  overflow-x: hidden;
`
const TimePickerPage = () => {
  const onChange = (time, timeString) => {
    console.log(time, timeString)
  }

  return (
    <div className="content-warp-content">
      <Row
        gutter={{
          xs: 8,
          sm: 16,
          md: 24,
          lg: 32,
        }}
      >
        <Col className="gutter-row mb-3" span={24}>
          <Wrapper>
            <div className="mb-3">
              <h3 className="mb-2">I, TimePicker format HH:mm:ss </h3>
              <TimePicker onChange={onChange} defaultOpenValue={moment('12:08:23', 'HH:mm:ss')} />
            </div>
            <div className="mb-3">
              <h3 className="mb-2">II, Change size TimePicker</h3>
              <TimePicker
                defaultValue={moment('12:08:23', 'HH:mm:ss')}
                size="large"
                className="mr-4"
              />
              <TimePicker defaultValue={moment('12:08:23', 'HH:mm:ss')} className="mr-4" />
              <TimePicker
                defaultValue={moment('12:08:23', 'HH:mm:ss')}
                size="small"
                className="mr-4"
              />
            </div>
            <div className="mb-3">
              <h3 className="mb-2">III, TimePicker format HH:ss </h3>
              <TimePicker
                onChange={onChange}
                defaultOpenValue={moment('12:08:23', 'HH:mm')}
                format="HH:mm"
              />
            </div>
            <div className="mb-3">
              <h3 className="mb-2">IV, TimePicker range time </h3>
              <TimePicker.RangePicker />
            </div>
          </Wrapper>
        </Col>
      </Row>
    </div>
  )
}
export default TimePickerPage
