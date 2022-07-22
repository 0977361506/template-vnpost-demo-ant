import React from 'react'
import BasicComponent from './component/BasicComponent'
import TriggerCompoment from './component/TriggerCompoment'

const Popover = () => {
  return (
    <div className="content-warp-content">
      <h1>Popover</h1>
      <div className="mt-5">
        Link xem thêm:
        <a target="_blank" rel="noreferrer" href="https://ant.design/components/popover/">
          đây
        </a>
      </div>
      <div>
        <h3>I, Basic. Info User</h3>
        <br />
        <BasicComponent />
        <br />
        <br />
        <h3>II, Three ways to trigger.</h3>
        <p>Mouse to click, focus and move in.</p>
        <br />
        <TriggerCompoment />
        <br />
        <br />
        <h3>III, Responsive.</h3>
        <p>Responsive configuration enables perfect presentation on small screen devices.</p>
        <br />
        {/* <ResponsiveComponent /> */}
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

export default Popover
