import React from 'react'
import ComponentSizeComponent from './components/ComponentSizeComponent'
import DirectionComponent from './components/DirectionComponent'
import GlobalThemeComponent from './components/GlobalThemeComponent'
import LocaleComponent from './components/LocaleComponent'

const ConfigProviderPage = () => {
  return (
    <div className="configProvider-layout-container">
      <h3>
        I, Components which need localization support are listed here, you can toggle the language
        in the demo.
      </h3>
      <br />
      <LocaleComponent />
      <br />
      <br />
      <h3>
        II, Components which support rtl direction are listed here, you can toggle the direction in
        the demo.
      </h3>
      <br />
      <DirectionComponent />
      <br />
      <br />
      <h3>III, Config component default size.</h3>
      <br />
      <ComponentSizeComponent />
      <br />
      <br />
      <h3>
        IV, Modify global theme color by css variable which IE not support. Css variable depends on
        the design, it may adjust so please do not directly use it. You can go to other components
        page for more detail style. Check this to view detail.
      </h3>
      <br />
      <GlobalThemeComponent />
      <br />
      <br />
    </div>
  )
}

export default ConfigProviderPage
