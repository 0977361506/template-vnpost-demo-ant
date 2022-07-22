import React from 'react'
import AccordionComponent from './component/AccordionComponent'
import BasicComponent from './component/BasicComponent'
import CustomComponent from './component/CustomComponent'
import NestedPanelComponent from './component/NestedPanelComponent'

const CollapsePage = () => {
  return (
    <div className="content-warp-content">
      <h1>Collapse</h1>
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
        <h3>II, Accordion.</h3>
        <p>In accordion mode, only one panel can be expanded at a time.</p>
        <br />
        <AccordionComponent />
        <br />
        <br />
        <h3>III, Nested panel.</h3>
        <p>Collapse is nested inside the Collapse.</p>
        <br />
        <NestedPanelComponent />
        <br />
        <h3>IV, CustomComponent.</h3>
        <p>Customize the background, border, margin styles and icon for each panel.</p>
        <br />
        <CustomComponent />
        <br />
      </div>
    </div>
  )
}

export default CollapsePage
