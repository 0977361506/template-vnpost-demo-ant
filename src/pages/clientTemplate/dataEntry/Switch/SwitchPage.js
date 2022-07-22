import styled from 'styled-components'
import { Col, Row, Switch } from 'antd'
import React from 'react'

const Wrapper = styled.section`
  border: 1px solid rgba(0, 0, 0, 0.06);
  border-radius: 2px;
  min-height: 200px;
  padding: 60px;
  height: 85vh;
  overflow: auto;
  overflow-x: hidden;
`
const SwitchPage = () => {
  const onChange = (checked) => {
    console.log(`switch to ${checked}`)
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
              <h3 className="mb-2">I, Basic Switch </h3>
              <Switch defaultChecked onChange={onChange} />
            </div>
            <div className="mb-3">
              <h3 className="mb-2">II, Change size switch</h3>
              <Switch defaultChecked className="mb-3" />
              <br />
              <Switch size="small" defaultChecked />
            </div>
          </Wrapper>
        </Col>
      </Row>
    </div>
  )
}
export default SwitchPage
