import React from 'react'
import styled from 'styled-components'
import { Col, Row } from 'antd'
import InputOfFormComponent from './components/InputOfFormComponent'
import ExampleVadidateForm from './components/ExampleVadidateForm'

const Wrapper = styled.section`
  border: 1px solid rgba(0, 0, 0, 0.06);
  border-radius: 2px;
  min-height: 200px;
  padding: 60px;
`
const FormPage = () => {
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
              <h3>I, Vadidate Input</h3>
              <br />
              <InputOfFormComponent className="w-100" />
            </Wrapper>
          </Col>
          <Col className="gutter-row mt-3" span={12}>
            <Wrapper>
              <h3>II, Example Form</h3>
              <br />
              <ExampleVadidateForm className="w-100" />
            </Wrapper>
          </Col>
        </Row>
      </div>
    </div>
  )
}
export default FormPage
