import { Calendar, Pagination } from 'antd'
import { FormattedMessage } from 'react-intl'
import React from 'react'
import Colors from 'themes/light'
import styled from 'styled-components'

const Container = styled.div`
  background-color: ${Colors.grey[2]};
  background-image: ${`linear-gradient(90deg, ${Colors.grey[2]}, ${Colors.grey[3]}, ${Colors.grey[2]})`};
`

const locale = {
  items_per_page: 'số / trang',
  jump_to: <FormattedMessage id="pagination.items_per_page" />,
}

const CustomCalendar = () => {
  return (
    <Container>
      <Calendar />
      <FormattedMessage id="calendar.yesterday" />
      <Pagination
        total={85}
        showSizeChanger
        showQuickJumper
        locale={locale}
        showTotal={(total) => `Total ${total} items`}
      />
    </Container>
  )
}

export default CustomCalendar
