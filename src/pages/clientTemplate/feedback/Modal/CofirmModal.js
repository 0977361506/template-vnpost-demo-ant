import { ExclamationCircleOutlined } from '@ant-design/icons'
import { Modal } from 'antd'
import React from 'react'

export default function showConfirmModal(intl, title = null, content = null) {
  Modal.confirm({
    title: title ?? intl.formatMessage({ id: 'modalConfirm.title' }),
    icon: <ExclamationCircleOutlined />,
    content: content ?? intl.formatMessage({ id: 'modalConfirm.content' }),
    okText: intl.formatMessage({ id: 'modalConfirm.ok' }),
    cancelText: intl.formatMessage({ id: 'modalConfirm.cancel' }),
    onOk: () => console.log('OK'),
  })
}
