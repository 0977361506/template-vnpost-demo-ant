/* eslint-disable no-unused-vars */
import { DeleteOutlined } from '@ant-design/icons'
import { Button, Input, Modal, Select, Space } from 'antd'
import React, { useState } from 'react'

const { Option } = Select

const handleChange = (value) => {
  console.log(`selected ${value}`)
}
const ModelAdd = (props) => {
  const { visible } = props
  const { getIsOpen } = props
  const [visibleM, setVisibleM] = useState(visible)
  const openModal = (event) => {
    setVisibleM(true)
  }
  const hideModal = (event) => {
    setVisibleM(false)
    getIsOpen(false)
  }
  return (
    <div className="content-warp-content">
      {/* <Button type="primary" onClick={() => setVisible(true)}>
        Open Modal of 1000px width
      </Button> */}
      <Modal
        title="Thêm mới danh sách"
        centered
        visible={visible}
        onOk={() => openModal(false)}
        onCancel={() => hideModal(false)}
        width={1000}
        footer={[
          <div className="flex-footer-model">
            <a href="#a" onClick={hideModal}>
              <DeleteOutlined style={{ fontSize: '20px', color: 'red', marginRight: '5px' }} />
              <span>Xóa dữ liệu</span>
            </a>
            <Button key="submit" type="primary" onClick={hideModal}>
              Submit
            </Button>
          </div>,
        ]}
      >
        <div className="flex" style={{ width: '100%', gap: 24 }}>
          <Input
            style={{
              fontSize: 14,
              // width: '300px',
            }}
            placeholder="Basic usage"
          />
          <Input
            style={{
              fontSize: 14,
              // width: '300px',
            }}
            placeholder="Basic usage"
          />
        </div>
        <div className="flex mt-3" style={{ width: '100%', gap: 24 }}>
          <Input
            style={{
              fontSize: 14,
              // width: '300px',
            }}
            placeholder="Basic usage"
          />
          <Input
            style={{
              fontSize: 14,
              // width: '300px',
            }}
            placeholder="Basic usage"
          />
        </div>
        <div className="flex mt-3" style={{ width: '100%', gap: 24 }}>
          <Select defaultValue="lucy" style={{ width: '100%' }} size={36} onChange={handleChange}>
            <Option value="jack">Jack</Option>
            <Option value="lucy">Lucy</Option>
            <Option value="disabled" disabled>
              Disabled
            </Option>
            <Option value="Yiminghe">yiminghe</Option>
          </Select>
          <Select defaultValue="lucy" style={{ width: '100%' }} onChange={handleChange}>
            <Option value="jack">Jack</Option>
            <Option value="lucy">Lucy</Option>
            <Option value="disabled" disabled>
              Disabled
            </Option>
            <Option value="Yiminghe">yiminghe</Option>
          </Select>
        </div>
      </Modal>
    </div>
  )
}

export default ModelAdd
