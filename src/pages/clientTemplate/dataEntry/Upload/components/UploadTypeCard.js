import React, { useState } from 'react'
import 'antd/dist/antd.min.css'
import axios from 'axios'
import { Upload } from 'antd'
import { PlusOutlined } from '@ant-design/icons'

const UploadTypeCard = () => {
  const fileList = [
    {
      uid: '-1',
      name: 'xxx.png',
      status: 'done',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
      thumbUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    },
    {
      uid: '-2',
      name: 'yyy.png',
      status: 'error',
    },
  ]
  const [defaultFileList, setDefaultFileList] = useState(fileList)
  // const [progress, setProgress] = useState(0)

  const uploadImage = async (options) => {
    const { file } = options

    const fmData = new FormData()
    const config = {
      headers: { 'content-type': 'multipart/form-data' },
    }
    fmData.append('image', file)
    try {
      const res = await axios.post('https://jsonplaceholder.typicode.com/posts', fmData, config)
      console.log('server res: ', res)
    } catch (err) {
      console.log('Eroor: ', err)
    }
  }

  const handleOnChange = ({ file, fileListEle, event }) => {
    const newListFile = [...defaultFileList]
    newListFile.push(fileListEle)
    console.log(file)
    console.log(event)
    setDefaultFileList(newListFile)
  }
  const beforeUpload = (file) => {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png'
    if (!isJpgOrPng) {
      alert('You can only upload JPG/PNG file!')
    }
    const isLt2M = file.size / 1024 / 1024 < 2
    if (!isLt2M) {
      alert('Image must smaller than 2MB!')
    }
    return isJpgOrPng && isLt2M
  }

  const uploadButton = (
    <div>
      <PlusOutlined />
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </div>
  )
  return (
    <Upload
      accept="image/*"
      beforeUpload={beforeUpload}
      customRequest={uploadImage}
      onChange={handleOnChange}
      listType="picture-card"
      defaultFileList={[...defaultFileList]}
    >
      {uploadButton}
    </Upload>
  )
}
export default UploadTypeCard
