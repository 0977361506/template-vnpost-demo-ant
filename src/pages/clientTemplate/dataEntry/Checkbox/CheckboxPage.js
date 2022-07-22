import { Col, Row } from 'antd'
import React from 'react'
import styled from 'styled-components'
import CheckboxAllComponent from './components/CheckboxAllComponent'
import CheckboxAllWithRowComponent from './components/CheckboxAllWithRowComponent'
import CheckboxBasicComponent from './components/CheckboxBasicComponent'

const Wrapper = styled.section`
  border: 1px solid rgba(0, 0, 0, 0.06);
  border-radius: 2px;
  transition: all 0.2s;
  height: 300px;
  padding: 60px;
`

const CheckboxPage = () => {
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
        <Col className="gutter-row mt-4" span={12}>
          <Wrapper>
            <h3>I, Checkbox Basic</h3>
            <br />
            <CheckboxBasicComponent />
          </Wrapper>
        </Col>
        <Col className="gutter-row mt-4" span={12}>
          <Wrapper>
            <h3>II, Checkbox All</h3>
            <br />
            <CheckboxAllComponent />
          </Wrapper>
        </Col>
        <Col className="gutter-row mt-4" span={24}>
          <Wrapper>
            <h3>III, Checkbox all with row</h3>
            <br />
            <CheckboxAllWithRowComponent />
          </Wrapper>
        </Col>
      </Row>
    </div>
  )
}
export default CheckboxPage
