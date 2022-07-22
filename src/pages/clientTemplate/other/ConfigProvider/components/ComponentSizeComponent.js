/* eslint-disable max-lines-per-function */
import {
  Button,
  Card,
  ConfigProvider,
  DatePicker,
  Divider,
  Input,
  Radio,
  Select,
  Table,
  Tabs,
} from 'antd'
import React, { useState } from 'react'

const { TabPane } = Tabs

const ComponentSizeComponent = () => {
  const [componentSize, setComponentSize] = useState('small')
  return (
    <div>
      <Radio.Group
        value={componentSize}
        onChange={(e) => {
          setComponentSize(e.target.value)
        }}
      >
        <Radio.Button value="small">Small</Radio.Button>
        <Radio.Button value="middle">Middle</Radio.Button>
        <Radio.Button value="large">Large</Radio.Button>
      </Radio.Group>
      <br />
      <Divider />
      <br />
      <ConfigProvider componentSize={componentSize}>
        <div className="example">
          <Input />
        </div>
        <br />
        <div className="example">
          <Tabs defaultActiveKey="1">
            <TabPane tab="Tab 1" key="1">
              Content of Tab Pane 1
            </TabPane>
            <TabPane tab="Tab 2" key="2">
              Content of Tab Pane 2
            </TabPane>
            <TabPane tab="Tab 3" key="3">
              Content of Tab Pane 3
            </TabPane>
          </Tabs>
        </div>
        <br />
        <div className="example">
          <Input.Search allowClear />
        </div>
        <br />
        <div className="example">
          <Input.TextArea allowClear />
        </div>
        <br />
        <div className="example">
          <Select
            defaultValue="demo"
            options={[
              {
                value: 'demo',
              },
            ]}
          />
        </div>
        <br />
        <div className="example">
          <DatePicker />
        </div>
        <br />
        <div className="example">
          <DatePicker.RangePicker />
        </div>
        <br />
        <div className="example">
          <Button>Button</Button>
        </div>
        <br />
        <div className="example">
          <Card title="Card">
            <Table
              columns={[
                {
                  title: 'Name',
                  dataIndex: 'name',
                },
                {
                  title: 'Age',
                  dataIndex: 'age',
                },
              ]}
              dataSource={[
                {
                  key: '1',
                  name: 'John Brown',
                  age: 32,
                },
                {
                  key: '2',
                  name: 'Jim Green',
                  age: 42,
                },
                {
                  key: '3',
                  name: 'Joe Black',
                  age: 32,
                },
              ]}
            />
          </Card>
        </div>
      </ConfigProvider>
    </div>
  )
}

export default ComponentSizeComponent
