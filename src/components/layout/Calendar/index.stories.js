/* eslint-disable camelcase */
import React from 'react'
import moment from 'moment'
import 'index.css'
import ConfigProvider from 'themes/styles-ant'
import { ThemeProvider } from 'styled-components'
import { IntlProvider } from 'react-intl'
import messagesVI from 'languages/vi.json'
import 'antd/dist/antd.variable.min.css'
import lightTheme from 'themes/light'
import vi_VN from 'antd/lib/locale/vi_VN'
import CustomizeCalendar from '.'

// This default export determines where your story goes in the story list
export default {
  title: 'Layout/Calendar',
  component: CustomizeCalendar,
}
const now = new Date()

const defaultArgs = {
  visible: true,
  maxDate: new Date(moment(now).add(10, 'days')),
  minDate: new Date(moment(now).add(-10, 'days')),
}

const Template = (args) => (
  <IntlProvider messages={messagesVI} locale="vi" defaultLocale="vi">
    <ConfigProvider locale={vi_VN}>
      <ThemeProvider theme={lightTheme}>
        <CustomizeCalendar {...args} />
      </ThemeProvider>
    </ConfigProvider>
  </IntlProvider>
)

// Each story then reuses that template
export const Primary = Template.bind({})

Primary.args = defaultArgs
