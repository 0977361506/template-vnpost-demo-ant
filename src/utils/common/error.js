const SystemError = {
  UNEXPECTED_ERROR: 'Xin vui lòng kiểm tra kết nối và thử lại',
  GLOBAL_EXCEPTION_ERR: {
    TITLE: 'Có lỗi xẩy ra',
    MESSAGE: `Đã có lỗi không mong muốn xẩy ra. Chúng tôi rất lấy làm tiếc và chân thành xin lỗi quý vị về sự phiền phức này. Chúng tôi đã ghi nhận lỗi và sẽ khắc phục trong thời gian sớm nhất có thể. Vong lòng đóng ứng dụng sau đó mở lại.`,
  },
  INTERNET_DISCONNECT_ERR: {
    TITLE: 'Lỗ kết nối',
    MESSAGE: 'Không có kết nối internet. Vui lòng kiểm trả lại kết nối.',
  },
  API_CLIENT_ERROR: 'Đã có lỗi khi gửi yêu cầu xử lý tới dịch vụ.',
  API_SERVER_ERROR: 'Đã có lỗi xẩy ra trong quá trình xử lý yêu cầu. ',
  API_TIMEOUT_ERROR: 'Không nhận được phản hồi dịch vụ.',
  API_CONNECTION_ERROR: 'Xin vui lòng kiểm tra kết nối và thử lại.',
  API_NETWORK_ERROR: 'Xin vui lòng kiểm tra kết nối và thử lại.',
  API_CANCEL_ERROR: 'Yêu cầu đã bị hủy.',
}

const AuthError = {
  LOGIN_EMAIL_OR_USERNAME_EMPTY_ERROR: 'Vui lòng nhập email hoặc tên đăng nhập.',
  LOGIN_PASSWORD_EMPTY_ERROR: 'Vui lòng nhập mật khẩu.',
}

export default {
  SystemError,
  AuthError,
}
