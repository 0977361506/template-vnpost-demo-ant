/* eslint-disable max-lines-per-function */
import React from 'react'
import { Button } from 'antd'
import { DownloadOutlined } from '@ant-design/icons'

const ButtonPage = () => {
  return (
    <div className="content-warp-content">
      <h3>
        I, There are primary button, default button, dashed button, text button and link button in
        antd.
      </h3>
      <br />
      <div className="w-100 common-layout">
        <div>
          <Button type="default">Primary Button</Button>
        </div>
        <div>
          <Button>Default Button</Button>
        </div>
        <div>
          <Button type="dashed">Dashed Button</Button>
        </div>
        <div>
          <Button type="text">Text Button</Button>
        </div>
        <div>
          <Button type="link">Link Button</Button>
        </div>
      </div>
      <br />
      <h3>
        II, Ant Design supports a default button size as well as a large and small size. If a large
        or small button is desired, set the size property to either large or small respectively.
        Omit the size property for a button with the default size.
      </h3>
      <br />
      <h4>1. Large</h4>
      <br />
      <div className="w-100 common-layout">
        <div>
          <Button type="primary" size="large">
            Primary
          </Button>
        </div>
        <div>
          <Button size="large">Default</Button>
        </div>
        <div>
          <Button type="dashed" size="large">
            Dashed
          </Button>
        </div>
        <div>
          <Button type="link" size="large">
            Link
          </Button>
        </div>
        <div>
          <Button type="primary" icon={<DownloadOutlined />} size="large" />
        </div>
        <div>
          <Button type="primary" shape="circle" icon={<DownloadOutlined />} size="large" />
        </div>
        <div>
          <Button type="primary" shape="round" icon={<DownloadOutlined />} size="large" />
        </div>
        <div>
          <Button type="primary" shape="round" icon={<DownloadOutlined />} size="large">
            Download
          </Button>
        </div>
        <div>
          <Button type="primary" icon={<DownloadOutlined />} size="large">
            Download
          </Button>
        </div>
      </div>
      <br />
      <h4>2. Default</h4>
      <br />
      <div className="w-100 common-layout">
        <div>
          <Button type="primary" size="default">
            Primary
          </Button>
        </div>
        <div>
          <Button size="default">Default</Button>
        </div>
        <div>
          <Button type="dashed" size="default">
            Dashed
          </Button>
        </div>
        <div>
          <Button type="link" size="default">
            Link
          </Button>
        </div>
        <div>
          <Button type="primary" icon={<DownloadOutlined />} size="default" />
        </div>
        <div>
          <Button type="primary" shape="circle" icon={<DownloadOutlined />} size="default" />
        </div>
        <div>
          <Button type="primary" shape="round" icon={<DownloadOutlined />} size="default" />
        </div>
        <div>
          <Button type="primary" shape="round" icon={<DownloadOutlined />} size="default">
            Download
          </Button>
        </div>
        <div>
          <Button type="primary" icon={<DownloadOutlined />} size="default">
            Download
          </Button>
        </div>
      </div>
      <br />
      <h4>3. Small</h4>
      <br />
      <div className="w-100 common-layout">
        <div>
          <Button type="primary" size="small">
            Primary
          </Button>
        </div>
        <div>
          <Button size="small">Default</Button>
        </div>
        <div>
          <Button type="dashed" size="small">
            Dashed
          </Button>
        </div>
        <div>
          <Button type="link" size="small">
            Link
          </Button>
        </div>
        <div>
          <Button type="primary" icon={<DownloadOutlined />} size="small" />
        </div>
        <div>
          <Button type="primary" shape="circle" icon={<DownloadOutlined />} size="small" />
        </div>
        <div>
          <Button type="primary" shape="round" icon={<DownloadOutlined />} size="small" />
        </div>
        <div>
          <Button type="primary" shape="round" icon={<DownloadOutlined />} size="small">
            Download
          </Button>
        </div>
        <div>
          <Button type="primary" icon={<DownloadOutlined />} size="small">
            Download
          </Button>
        </div>
      </div>
      <br />
    </div>
  )
}

export default ButtonPage
// /* eslint-disable react/button-has-type */
// import React from 'react'
// import { useSelector } from 'react-redux'
// import TestProcessor from '../../processors/TestProcessor'

// const Button = () => {
//   const testProcessor = new TestProcessor()
//   const contentRedux = useSelector((state) => state.GET_DATA)
//   const changeReducer = () => {
//     testProcessor.testApi()
//   }
//   // useEffect(() => {
//   //   testProcessor.testApi();
//   // }, []);
//   return (
//     <div>
//       <button onClick={() => changeReducer()}>test</button>
//       {contentRedux}
//     </div>
//   )
// }

// export default Button
