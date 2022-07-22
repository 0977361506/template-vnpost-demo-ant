/* eslint-disable import/prefer-default-export */
import { notification } from 'antd'

function openNotification(type, placement, message, description, duration = 5) {
  notification[type]({
    placement,
    message,
    description,
    duration,
  })
}

export function showInformation(intl, message = null, description = null, duration = 5, placement) {
  const _placement = placement ?? 'topRight'
  const _message = message ?? intl.formatMessage({ id: 'notification.success' })
  const _description = description ?? 'This is the content of the notification.'
  const _duration = duration ?? 5
  return openNotification('info', _placement, _message, _description, _duration)
}

export function showSuccess(intl, message = null, description = null, duration = 5, placement) {
  const _placement = placement ?? 'topRight'
  const _message = message ?? intl.formatMessage({ id: 'notification.success' })
  const _description = description ?? 'This is the content of the notification.'
  const _duration = duration ?? 5
  return openNotification('success', _placement, _message, _description, _duration)
}

export function showInsertDataSuccess(
  intl,
  placement,
  message = null,
  description = null,
  duration = 5,
) {
  const _placement = placement ?? 'topRight'
  const _message = message ?? intl.formatMessage({ id: 'notification.success' })
  const _description = description ?? 'This is the content of the notification.'
  const _duration = duration ?? 5
  return openNotification('success', _placement, _message, _description, _duration)
}

export function showUpdateDataSuccess(
  intl,
  placement,
  message = null,
  description = null,
  duration = 5,
) {
  const _placement = placement ?? 'topRight'
  const _message = message ?? intl.formatMessage({ id: 'notification.success' })
  const _description = description ?? 'This is the content of the notification.'
  const _duration = duration ?? 5
  return openNotification('success', _placement, _message, _description, _duration)
}

export function showDeleteDataSuccess(
  intl,
  placement,
  message = null,
  description = null,
  duration = 5,
) {
  const _placement = placement ?? 'topRight'
  const _message = message ?? intl.formatMessage({ id: 'notification.success' })
  const _description = description ?? 'This is the content of the notification.'
  const _duration = duration ?? 5
  return openNotification('success', _placement, _message, _description, _duration)
}

export function showWarning(intl, message = null, description = null, duration = 5, placement) {
  const _placement = placement ?? 'topRight'
  const _message = message ?? intl.formatMessage({ id: 'notification.success' })
  const _description = description ?? 'This is the content of the notification.'
  const _duration = duration ?? 5
  return openNotification('warning', _placement, _message, _description, _duration)
}

export function showError(intl, message = null, description = null, duration = 5, placement) {
  const _placement = placement ?? 'topRight'
  const _message = message ?? intl.formatMessage({ id: 'notification.success' })
  const _description = description ?? 'This is the content of the notification.'
  const _duration = duration ?? 5
  return openNotification('error', _placement, _message, _description, _duration)
}

export function showHttpUnknownError(
  intl,
  placement,
  message = null,
  description = null,
  duration = 5,
) {
  const _placement = placement ?? 'topRight'
  const _message = message ?? intl.formatMessage({ id: 'notification.success' })
  const _description = description ?? 'This is the content of the notification.'
  const _duration = duration ?? 5
  return openNotification('error', _placement, _message, _description, _duration)
}

export function showInsertDataFailed(
  intl,
  placement,
  message = null,
  description = null,
  duration = 5,
) {
  const _placement = placement ?? 'topRight'
  const _message = message ?? intl.formatMessage({ id: 'notification.success' })
  const _description = description ?? 'This is the content of the notification.'
  const _duration = duration ?? 5
  return openNotification('error', _placement, _message, _description, _duration)
}

export function showUpdateDataFailed(
  intl,
  placement,
  message = null,
  description = null,
  duration = 5,
) {
  const _placement = placement ?? 'topRight'
  const _message = message ?? intl.formatMessage({ id: 'notification.success' })
  const _description = description ?? 'This is the content of the notification.'
  const _duration = duration ?? 5
  return openNotification('error', _placement, _message, _description, _duration)
}
