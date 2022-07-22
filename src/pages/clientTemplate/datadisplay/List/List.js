import React from 'react'
import BasicComponent from './component/BasicComponent'
import BasicListComponent from './component/BasicListComponent'
import LoadMoreConponent from './component/LoadMoreConponent'

const List = () => {
  return (
    <div className="content-warp-content">
      <h1>List</h1>
      <div className="mt-5">
        Link xem thêm:
        <a target="_blank" rel="noreferrer" href="https://ant.design/components/list/">
          đây
        </a>
      </div>
      <div>
        <h3>I, Basic</h3>
        <br />
        <BasicComponent />
        <br />
        <br />
        <h3>II, Basic List.</h3>
        <p> . </p>
        <br />
        <BasicListComponent />
        <br />
        <br />
        <h3>III, Loading More.</h3>
        {/* <p>Responsive configuration enables perfect presentation on small screen devices.</p> */}
        <br />
        <LoadMoreConponent />
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

export default List
