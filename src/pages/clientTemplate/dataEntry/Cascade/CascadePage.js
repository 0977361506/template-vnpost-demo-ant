import React from 'react'
import styled from 'styled-components'
import { Col, Row } from 'antd'
import CascadeDefaultComponent from './components/CascadeDefaultComponent'
import CascadeSearchComponent from './components/CascadeSearchComponent'
import CascadeCheckboxComponent from './components/CascadeCheckboxComponent'

const Wrapper = styled.section`
  border: 1px solid rgba(0, 0, 0, 0.06);
  border-radius: 2px;
  min-height: 200px;
  padding: 60px;
`
const CascadePage = () => {
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
        <Col className="gutter-row mt-3" span={8}>
          <Wrapper>
            <h3>I, Casecade Basic</h3>
            <br />
            <CascadeDefaultComponent />
          </Wrapper>
        </Col>
        <Col className="gutter-row mt-3" span={8}>
          <Wrapper>
            <h3>II, Casecade with default value</h3>
            <br />
            <CascadeSearchComponent />
          </Wrapper>
        </Col>
        <Col className="gutter-row mt-3" span={8}>
          <Wrapper>
            <h3>III, Casecade hover</h3>
            <br />
            <CascadeSearchComponent />
          </Wrapper>
        </Col>
        <Col className="gutter-row mt-3" span={8}>
          <Wrapper>
            <h3>IV, Casecade Checkbox</h3>
            <br />
            <CascadeCheckboxComponent />
          </Wrapper>
        </Col>
      </Row>
    </div>
  )
}
export default CascadePage
