import styled from 'styled-components'
import { Col, Row, Radio, Space } from 'antd'
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
const RadioPage = () => {
  const [value, setValue] = useState(1)
  const onChange = (e) => {
    console.log('radio checked', e.target.value)
    setValue(e.target.value)
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
              <h3 className="mb-2">Basic Radio </h3>
              <Radio>Radio</Radio>
            </div>
            <div className="mb-3">
              <h3 className="mb-2">II, Radio disabled</h3>
              <Radio defaultChecked={false} disabled>
                Disabled
              </Radio>
            </div>
            <div className="mb-3">
              <h3 className="mb-2">III, Radio group</h3>
              <Radio.Group onChange={onChange} value={value}>
                <Radio value={1}>A</Radio>
                <Radio value={2}>B</Radio>
                <Radio value={3}>C</Radio>
                <Radio value={4}>D</Radio>
              </Radio.Group>
            </div>
            <div className="mb-3">
              <h3 className="mb-2">IV, Vertical Radio Group</h3>
              <Radio.Group onChange={onChange} value={value}>
                <Space direction="vertical">
                  <Radio value={112}>Option A</Radio>
                  <Radio value={2123}>Option B</Radio>
                  <Radio value={1231}>Option C</Radio>
                </Space>
              </Radio.Group>
            </div>
          </Wrapper>
        </Col>
      </Row>
    </div>
  )
}
export default RadioPage
