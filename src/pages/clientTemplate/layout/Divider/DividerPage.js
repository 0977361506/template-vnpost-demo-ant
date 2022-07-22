/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import DividerWithTitleComponent from './components/DividerWithTitleComponent'
import HorizontalComponent from './components/HorizontalComponent'
import TextWithoutHeadingStyleComponent from './components/TextWithoutHeadingStyleComponent'
import VerticalComponent from './components/VerticalComponent'

const DividerPage = () => {
  return (
    <div className="content-warp-content">
      <div className="divider-layout-container">
        <h3>I, Divider is horizontal by default. You can add text within Divider.</h3>
        <br />
        <HorizontalComponent />
        <br />
        <br />
        <h3>II, Use type="vertical" make it vertical.</h3>
        <br />
        <VerticalComponent />
        <br />
        <br />
        <h3>III, Divider with inner title, set orientation="left/right" to align it.</h3>
        <br />
        <DividerWithTitleComponent />
        <br />
        <br />
        <h3>IV, You can use non-heading style of divider text by setting plain.</h3>
        <br />
        <TextWithoutHeadingStyleComponent />
        <br />
        <br />
      </div>
    </div>
  )
}

export default DividerPage
