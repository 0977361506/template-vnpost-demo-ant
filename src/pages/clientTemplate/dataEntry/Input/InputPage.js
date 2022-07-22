import React from 'react'
import styled from 'styled-components'
import { Col, Row, Input, Space } from 'antd'
import { UserOutlined, EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons'
import ClockCircleOutlined from '@ant-design/icons/ClockCircleOutlined'

const Wrapper = styled.section`
  border: 1px solid rgba(0, 0, 0, 0.06);
  border-radius: 2px;
  min-height: 200px;
  padding: 60px;
  height: 85vh;
  overflow: auto;
  overflow-x: hidden;
`
const InputPage = () => {
  const { Search } = Input
  const { TextArea } = Input
  const onSearch = (value) => console.log(value)
  const onChange = (e) => {
    console.log('Change:', e.target.value)
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
              <h3 className="mb-2">Basic input</h3>
              <Input placeholder="I, Basic usage" />
            </div>
            <div className="mb-3">
              <h3 className="mb-2">II, Input size</h3>
              <Input size="large" placeholder="large size" prefix={<UserOutlined />} />
              <br />
              <br />
              <Input placeholder="default size" prefix={<UserOutlined />} />
              <br />
              <br />
              <Input size="small" placeholder="small size" prefix={<UserOutlined />} />
            </div>
            <div className="mb-3">
              <h3 className="mb-2">III, Input search</h3>
              <Search placeholder="input search text" onSearch={onSearch} enterButton />
            </div>
            <div className="mb-3">
              <h3 className="mb-2">IV, Input password</h3>
              <Space direction="vertical">
                <Input.Password placeholder="input password" />
                <Input.Password
                  placeholder="input password"
                  iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                />
              </Space>
            </div>
            <div className="mb-3">
              <h3 className="mb-2">V, Input when error, warning</h3>
              <Space
                direction="vertical"
                style={{
                  width: '100%',
                }}
              >
                <Input status="error" placeholder="Error" />
                <Input status="warning" placeholder="Warning" />
                <Input
                  status="error"
                  prefix={<ClockCircleOutlined />}
                  placeholder="Error with prefix"
                />
                <Input
                  status="warning"
                  prefix={<ClockCircleOutlined />}
                  placeholder="Warning with prefix"
                />
              </Space>
            </div>
            <div className="mb-3">
              <h3 className="mb-2">VI, Textarea</h3>
              <TextArea
                showCount
                maxLength={100}
                style={{
                  height: 120,
                }}
                onChange={onChange}
              />
            </div>
          </Wrapper>
        </Col>
      </Row>
    </div>
  )
}
export default InputPage
