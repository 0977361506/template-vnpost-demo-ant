import styled from 'styled-components'
import { Col, Row, Rate } from 'antd'
import React, { useState } from 'react'

const Wrapper = styled.section`
  border: 1px solid rgba(0, 0, 0, 0.06);
  border-radius: 2px;
  min-height: 200px;
  padding: 60px;
  height: 85vh;
  overflow: auto;
  overflow-x: hidden;
`
const RatePage = () => {
  const [value, setValue] = useState(1)
  const onChange = (value_) => {
    console.log('rate value', value_)
    setValue(value_)
  }
  const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful']
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
              <h3 className="mb-2">I, Basic Rate </h3>
              <Rate />
            </div>
            <div className="mb-3">
              <h3 className="mb-2">II, Rate Half star</h3>
              <Rate allowHalf defaultValue={2.5} />
            </div>
            <div className="mb-3">
              <h3 className="mb-2">III, Rate show message</h3>
              <span>
                <Rate tooltips={desc} onChange={onChange} value={value} />
                {value ? <span className="ant-rate-text">{desc[value - 1]}</span> : ''}
              </span>
            </div>
          </Wrapper>
        </Col>
      </Row>
    </div>
  )
}
export default RatePage
