import styled from 'styled-components'
import { Col, Row, Select } from 'antd'
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
const SelectPage = () => {
  const { Option } = Select
  const [value, setValue] = useState(1)
  const children = []

  for (let i = 10; i < 36; i++) {
    children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>)
  }

  const handleChange = (data) => {
    console.log(`selected ${data}- ${value}`)
    setValue(data)
  }

  const onChange = (data) => {
    console.log(`selected search  ${data}`)
  }

  const onSearch = (data) => {
    console.log('search:', data)
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
              <h3 className="mb-2">I, Basic Select </h3>
              <Select
                defaultValue="lucy"
                style={{
                  width: '100%',
                }}
                onChange={handleChange}
              >
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
                <Option value="Yiminghe">yiminghe</Option>
              </Select>
            </div>
            <div className="mb-3">
              <h3 className="mb-2">II, Select search</h3>
              <Select
                showSearch
                placeholder="Select a person"
                style={{
                  width: '100%',
                }}
                onChange={onChange}
                onSearch={onSearch}
              >
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
                <Option value="tom">Tom</Option>
              </Select>
            </div>
            <div className="mb-3">
              <h3 className="mb-2">III, Multi Select search</h3>
              <Select
                mode="multiple"
                allowClear
                style={{
                  width: '100%',
                }}
                placeholder="Please select"
                defaultValue={['a10', 'c12']}
                onChange={handleChange}
              >
                {children}
              </Select>
            </div>
            <div className="mb-3">
              <h3 className="mb-2">
                IV, Select with tags, transform input to tag (scroll the menu).
              </h3>
              <Select
                mode="tags"
                allowClear
                style={{
                  width: '100%',
                }}
                placeholder="Please select"
                defaultValue={['a10', 'c12']}
                onChange={handleChange}
              >
                {children}
              </Select>
            </div>
          </Wrapper>
        </Col>
      </Row>
    </div>
  )
}
export default SelectPage
