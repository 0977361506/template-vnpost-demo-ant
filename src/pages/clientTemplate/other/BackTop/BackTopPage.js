import React from 'react'
// import BasicComponent from './components/BasicComponent'
import CustomStyleComponent from './components/CustomStyleComponent'

const BackTopPage = () => {
  return (
    <div className="backTop-layout-container">
      {/* <div>
        <h3>I, The most basic usage.</h3>
        <br />
        <BasicComponent />
        <br />
        <br />
      </div> */}
      <div>
        <h3>
          I, You can customize the style of the button, just note the size limit: no more than 40px
          * 40px.
        </h3>
        <br />
        <CustomStyleComponent />
        <br />
        <br />
      </div>
    </div>
  )
}

export default BackTopPage
