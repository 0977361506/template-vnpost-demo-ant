import React from 'react'
import { Avatar, Badge, Card } from 'antd'
import { ClockCircleOutlined } from '@ant-design/icons'

const BadgeComponent = () => {
  return (
    <div className="content-warp-content">
      <h3>Small numerical value or status descriptor for UI elements.</h3>
      <div className="mt-5">
        Link xem thêm:
        <a target="_blank" rel="noreferrer" href="https://ant.design/components/badge/">
          đây
        </a>
      </div>
      <div className="flex mt-5">
        <Badge count={5}>
          <Avatar shape="square" size="large" />
        </Badge>
        <div className="w-4"> </div>
        <Badge count={0} showZero>
          <Avatar shape="square" size="large" />
        </Badge>
        <div className="w-4"> </div>
        <Badge
          count={
            <ClockCircleOutlined
              style={{
                color: '#f5222d',
              }}
            />
          }
        >
          <Avatar shape="square" size="large" />
        </Badge>
      </div>
      <div className="flex mt-5">
        <Badge count={99}>
          <Avatar shape="square" size="large" />
        </Badge>
        <div className="w-4"> </div>
        <Badge count={100}>
          <Avatar shape="square" size="large" />
        </Badge>
        <div className="w-4"> </div>
        <Badge count={99} overflowCount={10}>
          <Avatar shape="square" size="large" />
        </Badge>
        <div className="w-4"> </div>
        <Badge count={1000} overflowCount={999}>
          <Avatar shape="square" size="large" />
        </Badge>
      </div>
      <div className="flex mt-5">
        <Badge.Ribbon text="Hippies">
          <Card title="Pushes open the window" size="small">
            and raises the spyglass.
          </Card>
        </Badge.Ribbon>
        <div className="w-4"> </div>
        <Badge.Ribbon text="Hippies" color="pink">
          <Card title="Pushes open the window" size="small">
            and raises the spyglass.
          </Card>
        </Badge.Ribbon>
        <div className="w-4"> </div>
        <Badge.Ribbon text="Hippies" color="red">
          <Card title="Pushes open the window" size="small">
            and raises the spyglass.
          </Card>
        </Badge.Ribbon>
      </div>
    </div>
  )
}

export default BadgeComponent
