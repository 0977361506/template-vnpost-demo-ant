import React from 'react'
import BasicComponent from './component/BasicComponent'
import ConfigProviderComponent from './component/ConfigProviderComponent'
import CustomConponent from './component/CustomConponent'

const Empty = () => {
  return (
    <div className="content-warp-content">
      <h1>Empty</h1>
      <div className="mt-5">
        Link xem thêm:
        <a target="_blank" rel="noreferrer" href="https://ant.design/components/empty/">
          đây
        </a>
      </div>
      <div>
        <h3>I, Basic</h3>
        <br />
        <BasicComponent />
        <br />
        <br />
        <h3>II, Customize.</h3>
        <p>Customize image source, image size, description and extra content..</p>
        <br />
        <CustomConponent />
        <br />
        <br />
        <h3>III, Responsive.</h3>
        <p>Responsive configuration enables perfect presentation on small screen devices.</p>
        <br />
        <ConfigProviderComponent />
        <br />
        {/* <h3>IV, Reply Editor .</h3>
        <p>
          Comment can be used as an editor, so the user can customize the contents of the component.
        </p>
        <br />
        <ReplyEditorComponent />
        <br /> */}
      </div>
    </div>
  )
}

export default Empty
