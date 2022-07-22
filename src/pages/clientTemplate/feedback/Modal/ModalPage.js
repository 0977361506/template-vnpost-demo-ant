/* eslint-disable no-unused-vars */
import { Button } from 'antd'
import React, { useRef } from 'react'
import { useIntl } from 'react-intl'
import showConfirmModal from './CofirmModal'
import CustomModal from './CustomModal'

const ModalPage = () => {
  const intl = useIntl()

  const childRef = useRef(null)

  const handleClick = () => {
    childRef.current.showModal()
  }

  function getData() {
    console.log('getData')
  }

  const onPopupClosed = (condition) => {
    if (condition) {
      getData()
    }
  }

  return (
    <div className="content-warp-content">
      <CustomModal ref={childRef} closePopup={onPopupClosed} />
      <div>
        <Button onClick={() => showConfirmModal(intl)}>Show confirm modal</Button>
        &nbsp;&nbsp;
        <Button onClick={handleClick}>Show custom modal</Button>
        &nbsp;&nbsp;
      </div>
    </div>
  )
}

export default ModalPage
