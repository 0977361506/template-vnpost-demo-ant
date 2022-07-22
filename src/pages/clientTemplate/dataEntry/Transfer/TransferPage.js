import React from 'react'
import styled from 'styled-components'
import { Col, Row } from 'antd'
import TransferBasicComponent from './components/TransferBasicComponent'
import TransferSeachComponent from './components/TransferSeachComponent'
// import TransferTableComponent from './components/TransferTableComponent'

const Wrapper = styled.section`
  border: 1px solid rgba(0, 0, 0, 0.06);
  border-radius: 2px;
  min-height: 200px;
  padding: 60px;
`
const TransferPage = () => {
  return (
    <div className="content-warp-content">
      <div className="container-transfer">
        <Row
          gutter={{
            xs: 8,
            sm: 16,
            md: 24,
            lg: 32,
          }}
        >
          <Col className="gutter-row mt-3" span={12}>
            <Wrapper>
              <h3>I, Transfer Basic</h3>
              <br />
              <TransferBasicComponent className="w-100" />
            </Wrapper>
          </Col>
          <Col className="gutter-row mt-3" span={12}>
            <Wrapper>
              <h3>II, Transfer with search</h3>
              <br />
              <TransferSeachComponent className="w-100" />
            </Wrapper>
          </Col>
          {/* <Col className="gutter-row mt-3" span={24}>
          <Wrapper>
            <h3>III, Transfer with search table</h3>
            <br />
            <TransferTableComponent className="w-100" />
          </Wrapper>
        </Col> */}
        </Row>
      </div>
    </div>
  )
}
export default TransferPage
