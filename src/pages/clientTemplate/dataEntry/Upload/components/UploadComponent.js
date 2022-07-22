import React, { useState } from 'react'
import 'antd/dist/antd.min.css'
import axios from 'axios'
import { Button, Upload } from 'antd'
import { UploadOutlined } from '@ant-design/icons'

const UploadComponent = () => {
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
      // onUploadProgress: (event) => {    // code xu ly process
      //   const percent = Math.floor((event.loaded / event.total) * 100)
      //   setProgress(percent)
      //   if (percent === 100) {
      //     setTimeout(() => setProgress(0), 1000)
      //   }
      //   onProgress({ percent: (event.loaded / event.total) * 100 })
      // },
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

  return (
    <Upload
      accept="image/*"
      customRequest={uploadImage}
      onChange={handleOnChange}
      listType="picture"
      defaultFileList={[...defaultFileList]}

      // onProgress={({ percent }) => {
      //   console.log("progre...", percent);
      //   if (percent === 100) {
      //     setTimeout(() => setProgress(0), 1000);
      //   }
      //   return setProgress(Math.floor(percent));
      // }}
    >
      <Button icon={<UploadOutlined />}>Upload</Button>
    </Upload>
  )
}
export default UploadComponent
