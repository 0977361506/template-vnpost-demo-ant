import React from 'react'
import styled from 'styled-components'
import { Col, Row } from 'antd'
import DatePickerBasicComponent from './components/DatePickerBasicComponent'

const Wrapper = styled.section`
  border: 1px solid rgba(0, 0, 0, 0.06);
  border-radius: 2px;
  min-height: 200px;
  padding: 60px;
`
const DatePickerPage = () => {
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
        <Col className="gutter-row mt-3" span={24}>
          <Wrapper>
            <DatePickerBasicComponent />
          </Wrapper>
        </Col>
      </Row>
    </div>
  )
}
export default DatePickerPage
