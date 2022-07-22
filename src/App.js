/* eslint-disable camelcase */
import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import 'index.css'
import LayoutPage from 'pages/LayoutPage'
import GlobalStyles from 'themes/styles'
import ConfigProvider from 'themes/styles-ant'
import { ThemeProvider } from 'styled-components'
import { IntlProvider } from 'react-intl'
import messagesVI from 'languages/vi.json'
import { Provider } from 'react-redux'
import { store } from 'redux/store'
import 'antd/dist/antd.variable.min.css'
import lightTheme from 'themes/light'
import vi_VN from 'antd/lib/locale/vi_VN'
import 'css/styles.scss'

const App = () => (
  <Provider store={store}>
    <GlobalStyles />
    <IntlProvider messages={messagesVI} locale="vi" defaultLocale="vi">
      <ConfigProvider locale={vi_VN}>
        <ThemeProvider theme={lightTheme}>
          <BrowserRouter>
            <LayoutPage />
          </BrowserRouter>
        </ThemeProvider>
      </ConfigProvider>
    </IntlProvider>
  </Provider>
)

export default App
