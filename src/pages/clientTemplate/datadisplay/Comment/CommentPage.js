import React from 'react'
import BasicComponent from './component/BasicComponent'
import MutilComponent from './component/MutilComponent'
import NestedComponent from './component/NestedComponent'
import ReplyEditorComponent from './component/ReplyEditorComponent'

const CommentPage = () => {
  return (
    <div className="content-warp-content">
      <h1>Comment</h1>
      <div className="mt-5">
        Link xem thêm:
        <a target="_blank" rel="noreferrer" href="https://ant.design/components/collapse/">
          đây
        </a>
      </div>
      <div>
        <h3>I, Basic.</h3>
        <br />
        <BasicComponent />
        <br />
        <br />
        <h3>II, Mutil.</h3>
        <p>Displaying a series of comments using the antd List Component.</p>
        <br />
        <MutilComponent />
        <br />
        <br />
        <h3>III, Nested.</h3>
        <p>Comments can be nested.</p>
        <br />
        <NestedComponent />
        <br />
        <h3>IV, Reply Editor .</h3>
        <p>
          Comment can be used as an editor, so the user can customize the contents of the component.
        </p>
        <br />
        <ReplyEditorComponent />
        <br />
      </div>
    </div>
  )
}

export default CommentPage
