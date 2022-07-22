import { Button } from 'antd'
import React, { useRef } from 'react'
import CustomDrawer from './CustomDrawer'

const DrawerPage = () => {
  const childRef = useRef(null)

  const onDrawerClose = (condition) => {
    if (condition) {
      console.log('success')
    }
  }

  const handleClick = () => {
    childRef.current.showDrawer()
  }

  return (
    <div className="content-warp-content">
      <CustomDrawer ref={childRef} closeDrawer={onDrawerClose} />
      <div>
        <Button onClick={handleClick}>Show drawer</Button>
      </div>
    </div>
  )
}

export default DrawerPage
