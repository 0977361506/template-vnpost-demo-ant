import React from 'react'
import AlignComponent from './components/AlignComponent'
import BasicUsageComponent from './components/BasicUsageComponent'
import CustomizeSizeComponent from './components/CustomizeSizeComponent'
import SpaceSizeComponent from './components/SpaceSizeComponent'
import SplitComponent from './components/SplitComponent'
import VerticalSpaceComponent from './components/VerticalSpaceComponent'
import WrapComponent from './components/WrapComponent'

const SpacePage = () => {
  return (
    <div className="content-warp-content">
      <div className="space-layout-container">
        <h3>I, Crowded components horizontal spacing.</h3>
        <br />
        <BasicUsageComponent />
        <br />
        <br />
        <h3>II, Crowded components vertical spacing.</h3>
        <br />
        <VerticalSpaceComponent />
        <br />
        <br />
        <h3>
          II, large, middle and small preset sizes. Set the size to large and middle by setting size
          to large and middle respectively. If size is not set, the spacing is small.
        </h3>
        <br />
        <SpaceSizeComponent />
        <br />
        <br />
        <h3>IV, Config item align.</h3>
        <br />
        <AlignComponent />
        <br />
        <br />
        <h3>V, Custom spacing size.</h3>
        <br />
        <CustomizeSizeComponent />
        <br />
        <br />
        <h3>VI, Auto wrap line.</h3>
        <br />
        <WrapComponent />
        <br />
        <br />
        <h3>VII, Crowded components split.</h3>
        <br />
        <SplitComponent />
        <br />
        <br />
      </div>
    </div>
  )
}

export default SpacePage
