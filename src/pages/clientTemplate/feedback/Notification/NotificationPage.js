import React from 'react'
import { Button } from 'antd'
import { useIntl } from 'react-intl'
import {
  showDeleteDataSuccess,
  showError,
  showHttpUnknownError,
  showInformation,
  showInsertDataFailed,
  showInsertDataSuccess,
  showSuccess,
  showUpdateDataFailed,
  showUpdateDataSuccess,
  showWarning,
} from './Notification'

const NotificationPage = () => {
  const intl = useIntl()

  return (
    <div className="content-warp-content">
      <div className="notification-layout-container">
        <div>
          <Button onClick={() => showInformation(intl)}>showInformation</Button>
          &nbsp;&nbsp;
          <Button onClick={() => showSuccess(intl, 'aaa')}>showSuccess</Button>
          &nbsp;&nbsp;
          <Button onClick={() => showInsertDataSuccess(intl)}>showInsertDataSuccess</Button>
          &nbsp;&nbsp;
          <Button onClick={() => showUpdateDataSuccess(intl)}>showUpdateDataSuccess</Button>
          &nbsp;&nbsp;
          <Button onClick={() => showDeleteDataSuccess(intl)}>showDeleteDataSuccess</Button>
          &nbsp;&nbsp;
          <Button onClick={() => showWarning(intl)}>showWarning</Button>
          &nbsp;&nbsp;
          <Button onClick={() => showError(intl)}>showError</Button>
          &nbsp;&nbsp;
          <Button onClick={() => showHttpUnknownError(intl)}>showHttpUnknownError</Button>
          &nbsp;&nbsp;
          <Button onClick={() => showInsertDataFailed(intl)}>showInsertDataFailed</Button>
          &nbsp;&nbsp;
          <Button onClick={() => showUpdateDataFailed(intl)}>showUpdateDataFailed</Button>
        </div>
      </div>
    </div>
  )
}

export default NotificationPage
