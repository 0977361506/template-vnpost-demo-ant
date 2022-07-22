import { AutoComplete, Col, Row, Input } from 'antd'
import React, { useState } from 'react'
import styled from 'styled-components'

const Wrapper = styled.section`
  border: 1px solid rgba(0, 0, 0, 0.06);
  border-radius: 2px;
  transition: all 0.2s;
  height: 300px;
  padding: 60px;
`

const AutoCompletePage = () => {
  const [value, setValue] = useState('')
  const options = [
    {
      value: 'Đơn vị 1',
    },
    {
      value: 'Đơn vị 2',
    },
    {
      value: 'Đơn vị 3',
    },
  ]

  const onSearch = (searchText) => {
    console.log('searchText', searchText)
  }
  const onSelect = (data) => {
    console.log('onSelect', data)
  }
  const onChange = (data) => {
    // event Onchange when wr
    setValue(data)
  }
  const onFocus = (data) => {
    console.log('onFocus', data)
  }

  return (
    <div className="content-warp-content">
      <Wrapper>
        <Row
          gutter={{
            xs: 8,
            sm: 16,
            md: 24,
            lg: 32,
          }}
        >
          <Col className="gutter-row" span={12}>
            <h3>I, Simple AutoComplete</h3>
            <br />
            <AutoComplete
              options={options}
              style={{
                width: '100%',
              }}
              size="large"
              allowClear="true"
              onSelect={onSelect}
              onSearch={onSearch}
              onFocus={onFocus}
              onChange={onChange}
              value={value}
              placeholder="Nhập text cần tìm kiếm"
            />
          </Col>
          <Col className="gutter-row" span={12}>
            <h3>II, Simple AutoComplete</h3>
            <br />
            <AutoComplete
              dropdownMatchSelectWidth={252}
              style={{
                width: '100%',
              }}
              options={options}
              onSelect={onSelect}
              onSearch={onSearch}
            >
              <Input.Search size="large" placeholder="input here" enterButton />
            </AutoComplete>
          </Col>
        </Row>
      </Wrapper>
    </div>
  )
}
export default AutoCompletePage
