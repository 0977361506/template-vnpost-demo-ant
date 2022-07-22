import React, { useState } from 'react'
import { Card } from 'antd'

const { Meta } = Card
const tabList = [
  {
    key: 'tab1',
    tab: 'tab1',
  },
  {
    key: 'tab2',
    tab: 'tab2',
  },
]
const contentList = {
  tab1: <p>content1</p>,
  tab2: <p>content2</p>,
}
const tabListNoTitle = [
  {
    key: 'article',
    tab: 'article',
  },
  {
    key: 'app',
    tab: 'app',
  },
  {
    key: 'project',
    tab: 'project',
  },
]
const contentListNoTitle = {
  article: <p>article content</p>,
  app: <p>app content</p>,
  project: <p>project content</p>,
}
const CardComponent = () => {
  const [activeTabKey1, setActiveTabKey1] = useState('tab1')
  const [activeTabKey2, setActiveTabKey2] = useState('app')

  const onTab1Change = (key) => {
    setActiveTabKey1(key)
  }

  const onTab2Change = (key) => {
    setActiveTabKey2(key)
  }
  return (
    <div className="content-warp-content">
      <h1>Card</h1>
      <div className="mt-5">
        Link xem thêm:
        <a target="_blank" rel="noreferrer" href="https://ant.design/components/card/">
          đây
        </a>
      </div>
      <div className="inline-block relative mt-5">
        <Card
          title="Default size card"
          // extra={giang}
          style={{
            width: 300,
          }}
        >
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content</p>
        </Card>
        <div className="mt-5"> </div>
        <Card
          size="small"
          title="Small size card"
          // extra={}
          style={{
            width: 300,
          }}
        >
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content</p>
        </Card>
      </div>

      <h3 className="mt-5">1.2 Simple card</h3>
      <div className="mt-5">
        <Card
          hoverable
          style={{ width: 240 }}
          cover={
            <img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
          }
        >
          <Meta title="Europe Street beat" description="www.instagram.com" />
        </Card>
      </div>

      <h3>Inner card</h3>
      <div>
        <Card
          style={{
            width: '100%',
          }}
          title="Card title"
          // extra={<a href="#">More</a>}
          tabList={tabList}
          activeTabKey={activeTabKey1}
          onTabChange={(key) => {
            onTab1Change(key)
          }}
        >
          {contentList[activeTabKey1]}
        </Card>
        <br />
        <br />
        <Card
          style={{
            width: '100%',
          }}
          tabList={tabListNoTitle}
          activeTabKey={activeTabKey2}
          // tabBarExtraContent={<a href="#">More</a>}
          onTabChange={(key) => {
            onTab2Change(key)
          }}
        >
          {contentListNoTitle[activeTabKey2]}
        </Card>
      </div>
    </div>
  )
}

export default CardComponent
