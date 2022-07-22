/* eslint-disable  */
import CommonProcessor from '../CommonProcessor'
import * as accountApis from '../../apis/account/accountApis'
import { store } from '../../redux/store'
import * as accountAction from '../../redux/action/accountAction'
import * as formUtil from '../../Utils/FormUtil'
import { convertDateToDateString, convertStringToDate } from '../../Utils/DateTimeUtil'

export default class AccountProcessor extends CommonProcessor {
  constructor() {
    super()
  }

  loadProfile = () => {
    accountApis.getInfo(this.#loadProfileSuccess, this.errorHandler)
  }

  #loadProfileSuccess = (res) => {
    store.dispatch(accountAction.loadProfile(res.data))
  }

  updateProfile = (name, birthday, province, gender, phone) => {
    let body = {}
    if (birthday) {
      birthday = convertDateToDateString(convertStringToDate(birthday))
      body = {
        name,
        birthday,
        province,
        gender,
        phone,
      }
    } else {
      body = {
        name,
        province,
        gender,
        phone,
      }
    }

    accountApis.updateProfile(body, this.#updateProfileSuccess, this.errorHandler)
  }

  alertMessageVadidate = (message) => {
    this.commonAlert.errorAlert(message)
  }

  #updateProfileSuccess = (res) => {
    this.commonAlert.successAlert('Cập nhật thành công')
    this.loadProfile()
  }

  updatePassword = (oldPassword, password, retypePassword, emptyInputCallback) => {
    const body = { oldPassword, password, retypePassword }
    accountApis.updatePassword(
      body,
      () => {
        this.#updatePasswordSucess()
        emptyInputCallback()
      },
      this.errorHandler,
    )
  }

  #updatePasswordSucess = () => {
    this.commonAlert.successAlert('Cập nhật thành công')
  }

  uploadImage = (btnE) => {
    const file = btnE.target?.files[0]
    accountApis.uploadImage(file, this.#successUploadImage, this.errorHandler)
  }

  #successUploadImage = (res) => {
    // console.log(res.data);
    this.#updateAva(res.data)
  }

  #updateAva = (imageId) => {
    accountApis.updateAvatar(imageId, this.#successUpdateAva, this.errorHandler)
  }

  #successUpdateAva = (res) => {
    // console.log(res);
    this.commonAlert.successAlert('Thay đổi ảnh thành công')
    this.loadProfile()
  }
}
