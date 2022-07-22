import React from 'react'
import BasicComponent from './component/BasicComponent'
import LoadingComponent from './component/LoadingComponent'
import MultipleComponent from './component/MultipleComponent'

const Image = () => {
  return (
    <div className="content-warp-content">
      <h1>Image</h1>
      <div className="mt-5">
        Link xem thêm:
        <a target="_blank" rel="noreferrer" href="https://ant.design/components/image/">
          đây
        </a>
      </div>
      <div>
        <h3>I, Basic</h3>
        <br />
        <BasicComponent />
        <br />
        <br />
        <h3>II, Loading.</h3>
        <p>Progressive when large image loading.</p>
        <br />
        <LoadingComponent />
        <br />
        <br />
        <h3>III, Responsive.</h3>
        <p>Progressive when large image loading.</p>
        <br />
        <LoadingComponent />
        <br />
        <h3>IV,Multiple .</h3>
        <p>
          Comment can be used as an editor, so the user can customize the contents of the component.
        </p>
        <br />
        <MultipleComponent />
        <br />
      </div>
    </div>
  )
}

export default Image
