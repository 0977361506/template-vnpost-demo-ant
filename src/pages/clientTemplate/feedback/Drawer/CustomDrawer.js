/* eslint-disable no-unused-vars */
import { Button, Drawer, Space } from 'antd'
import React, { forwardRef, useImperativeHandle, useState } from 'react'

const CustomDrawer = forwardRef((props, ref) => {
  const [visible, setVisible] = useState(false)

  useImperativeHandle(ref, () => ({
    showDrawer() {
      setVisible(true)
    },
  }))

  const onDrawerClose = () => {
    setVisible(false)
    props.closeDrawer(true)
  }

  return (
    <div className="content-warp-content">
      <Drawer
        title="Basic Drawer"
        placement="right"
        onClose={onDrawerClose}
        visible={visible}
        // extra={
        //   <Space>
        //     <Button onClick={onDrawerClose}>Cancel</Button>
        //     <Button type="primary" onClick={onDrawerClose}>
        //       OK
        //     </Button>
        //   </Space>
        // }
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </div>
  )
})

export default CustomDrawer
