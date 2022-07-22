import React from 'react'
import { Collapse } from 'antd'

const { Panel } = Collapse
const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`

const BasicComponent = () => {
  const onChange = (key) => {
    console.log(key)
  }
  return (
    <>
      <h1>Collapse</h1>
      <div className="mt-5">
        Link xem thêm:
        <a target="_blank" rel="noreferrer" href="https://ant.design/components/carousel/">
          đây
        </a>
      </div>
      <div className="inline-block relative w-full mt-5">
        <Collapse defaultActiveKey={['1']} onChange={onChange}>
          <Panel header="This is panel header 1" key="1">
            <p>{text}</p>
          </Panel>
          <Panel header="This is panel header 2" key="2">
            <p>{text}</p>
          </Panel>
          <Panel header="This is panel header 3" key="3">
            <p>{text}</p>
          </Panel>
        </Collapse>
      </div>
    </>
  )
}

export default BasicComponent
