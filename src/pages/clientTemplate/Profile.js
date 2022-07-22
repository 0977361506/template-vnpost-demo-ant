import React from 'react'
import { FileImageOutlined, FormOutlined, LockOutlined, SearchOutlined } from '@ant-design/icons'
import { Avatar, Breadcrumb, Cascader, Form, Image, Input, Select } from 'antd'

const { Option } = Select
const { TextArea } = Input

const Profile = () => {
  return (
    <>
      <div className="table-warp-list">
        <div className="w-100">
          <Breadcrumb>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>
              <a href="#a">List</a>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <a href="#a">Search Listt</a>
            </Breadcrumb.Item>
            <Breadcrumb.Item>Thông tin tài khoản</Breadcrumb.Item>
          </Breadcrumb>
        </div>
        <div className="text-and-search-be mt-5-tw">
          <div className="text-171725-bold">Thông tin tài khoản</div>
          <div className="max-w-265px min-w-264px">
            <Input
              className="giang"
              size="large"
              placeholder="Nhập từ khoá tìm kiếm"
              addonAfter={
                <Cascader
                  placeholder=""
                  style={{
                    width: 35,
                  }}
                />
              }
              defaultValue=""
              prefix={<SearchOutlined style={{ fontSize: '16px', color: '#B5B5BE' }} />}
            />
          </div>
        </div>
      </div>
      <div className="content-warp-content">
        <div className="profile-warp">
          <div className="avatar-warp">
            <div className="mt-3">
              <Avatar
                src={<Image src="https://joeschmoe.io/api/v1/random" style={{ width: 120 }} />}
              />
            </div>
            <h3 className="mt-3">Ngọc Linh</h3>
            <div className="edit-change mt-4">
              <div>
                <a href="#a">
                  <FileImageOutlined />
                  <span>Thay ảnh</span>
                </a>
              </div>
              <div>
                <a href="#a">
                  <FormOutlined />
                  <span>Chỉnh sửa thông tin</span>
                </a>
              </div>
              <div>
                <a href="#a">
                  <LockOutlined />
                  <span>Đổi mật khẩu</span>
                </a>
              </div>
            </div>
          </div>
          <div className="form-warp">
            <Form layout="vertical">
              <Form.Item label="Họ và tên">
                <Input placeholder="input placeholder" style={{ width: 520 }} />
              </Form.Item>
              <Form.Item label="Tên đăng nhập">
                <Input placeholder="input placeholder" style={{ width: 520 }} />
              </Form.Item>
              <Form.Item label="Chọn đơn vị" style={{ width: 520 }}>
                <Select defaultValue="lucy">
                  <Option value="jack">Jack</Option>
                  <Option value="lucy">Lucy</Option>
                  <Option value="disabled" disabled>
                    Disabled
                  </Option>
                  <Option value="Yiminghe">yiminghe</Option>
                </Select>
              </Form.Item>
              <Form.Item label="Mô tả">
                <TextArea
                  rows={4}
                  placeholder="maxLength is 6"
                  maxLength={6}
                  style={{ width: 520 }}
                />
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Profile
