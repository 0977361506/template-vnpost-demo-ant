import React from 'react'
import HomePage from 'pages/clientTemplate/HomePage'
import ButtonPage from 'pages/clientTemplate/general/ButtonPage'
import IconPage from 'pages/clientTemplate/general/IconPage'
import TypographyPage from 'pages/clientTemplate/general/TypographyPage'
import BreadcrumbPage from 'pages/clientTemplate/navigation/BreadcrumbPage'
import ModalPage from 'pages/clientTemplate/feedback/Modal/ModalPage'
import NotificationPage from 'pages/clientTemplate/feedback/Notification/NotificationPage'
import SpacePage from 'pages/clientTemplate/layout/Space/SpacePage'
import ConfigProviderPage from 'pages/clientTemplate/other/ConfigProvider/ConfigProviderPage'
import BackTopPage from 'pages/clientTemplate/other/BackTop/BackTopPage'
import AvatarPage from 'pages/clientTemplate/datadisplay/Avatar/AvatarPage'
import Badge from 'pages/clientTemplate/datadisplay/Badge/Badge'
import Calendar from 'pages/clientTemplate/datadisplay/Calendar/Calendar'
import Card from 'pages/clientTemplate/datadisplay/Card/Card'
import Carousel from 'pages/clientTemplate/datadisplay/Carousel/Carousel'
import DividerPage from 'pages/clientTemplate/layout/Divider/DividerPage'
import DescriptionsPage from 'pages/clientTemplate/datadisplay/Descriptions/DescriptionsPage'
import Empty from 'pages/clientTemplate/datadisplay/Empty/Empty'
import Image from 'pages/clientTemplate/datadisplay/Image/Image'
import List from 'pages/clientTemplate/datadisplay/List/List'
import Popover from 'pages/clientTemplate/datadisplay/Popover/Popover'
import Segmented from 'pages/clientTemplate/datadisplay/Segmented/Segmented'
import Statistic from 'pages/clientTemplate/datadisplay/Statistic/Statistic'
import Table from 'pages/clientTemplate/datadisplay/Table/Table'
import Tabs from 'pages/clientTemplate/datadisplay/Tabs/Tabs'
import Tag from 'pages/clientTemplate/datadisplay/Tag/Tag'
import Timeline from 'pages/clientTemplate/datadisplay/Timeline/Timeline'
import Tooltip from 'pages/clientTemplate/datadisplay/Tooltip/Tooltip'
import Tree from 'pages/clientTemplate/datadisplay/Tree/Tree'
import CollapsePage from 'pages/clientTemplate/datadisplay/Collapse/CollapsePage'
import CommentPage from 'pages/clientTemplate/datadisplay/Comment/CommentPage'
import AutoCompletePage from 'pages/clientTemplate/dataEntry/AutoComplete/AutoCompletePage'
import CascadePage from 'pages/clientTemplate/dataEntry/Cascade/CascadePage'
import CheckboxPage from 'pages/clientTemplate/dataEntry/Checkbox/CheckboxPage'
import DatePickerPage from 'pages/clientTemplate/dataEntry/DatePicker/DatePickerPage'
import FormPage from 'pages/clientTemplate/dataEntry/Form/FormPage'
import InputPage from 'pages/clientTemplate/dataEntry/Input/InputPage'
import RadioPage from 'pages/clientTemplate/dataEntry/Radio/RadioPage'
import RatePage from 'pages/clientTemplate/dataEntry/Rate/RatePage'
import SelectPage from 'pages/clientTemplate/dataEntry/Select/SelectPage'
import SwitchPage from 'pages/clientTemplate/dataEntry/Switch/SwitchPage'
import TimePickerPage from 'pages/clientTemplate/dataEntry/TimePicker/TimePickerPage'
import TransferPage from 'pages/clientTemplate/dataEntry/Transfer/TransferPage'
import TreeSelectPage from 'pages/clientTemplate/dataEntry/TreeSelect/TreeSelectPage'
import UploadPage from 'pages/clientTemplate/dataEntry/Upload/UploadPage'
import PaginationPage from 'pages/clientTemplate/navigation/pagination/PaginationPage'
import DrawerPage from 'pages/clientTemplate/feedback/Drawer/DrawerPage'
import TableList from 'pages/clientTemplate/TableList'
import Profile from 'pages/clientTemplate/Profile'

const routes = [
  {
    path: '/',
    exact: true,
    main: () => <HomePage />,
  },
  {
    path: '/template',
    exact: true,
    main: () => <HomePage />,
  },
  {
    path: '/template/button',
    exact: true,
    main: () => <ButtonPage />,
  },
  {
    path: '/template/icon',
    exact: true,
    main: () => <IconPage />,
  },
  {
    path: '/template/typography',
    exact: true,
    main: () => <TypographyPage />,
  },
  {
    path: '/template/breadcrumb',
    exact: true,
    main: () => <BreadcrumbPage />,
  },
  {
    path: '/template/modal',
    exact: true,
    main: () => <ModalPage />,
  },
  {
    path: '/template/notification',
    exact: true,
    main: () => <NotificationPage />,
  },
  {
    path: '/template/divider',
    exact: true,
    main: () => <DividerPage />,
  },
  {
    path: '/template/space',
    exact: true,
    main: () => <SpacePage />,
  },

  {
    path: '/template/backTop',
    exact: true,
    main: () => <BackTopPage />,
  },
  {
    path: '/template/configProvider',
    exact: true,
    main: () => <ConfigProviderPage />,
  },
  {
    path: '/template/avatar',
    exact: true,
    main: () => <AvatarPage />,
  },
  {
    path: '/template/badge',
    exact: true,
    main: () => <Badge />,
  },
  {
    path: '/template/calendar',
    exact: true,
    main: () => <Calendar />,
  },
  {
    path: '/template/card',
    exact: true,
    main: () => <Card />,
  },
  {
    path: '/template/carousel',
    exact: true,
    main: () => <Carousel />,
  },
  {
    path: '/template/collapse',
    exact: true,
    main: () => <CollapsePage />,
  },
  {
    path: '/template/comment',
    exact: true,
    main: () => <CommentPage />,
  },
  {
    path: '/template/descriptions',
    exact: true,
    main: () => <DescriptionsPage />,
  },
  {
    path: '/template/empty',
    exact: true,
    main: () => <Empty />,
  },
  {
    path: '/template/image',
    exact: true,
    main: () => <Image />,
  },
  {
    path: '/template/list',
    exact: true,
    main: () => <List />,
  },
  {
    path: '/template/popover',
    exact: true,
    main: () => <Popover />,
  },
  {
    path: '/template/segmented',
    exact: true,
    main: () => <Segmented />,
  },
  {
    path: '/template/statistic',
    exact: true,
    main: () => <Statistic />,
  },
  {
    path: '/template/table',
    exact: true,
    main: () => <Table />,
  },
  {
    path: '/template/tabs',
    exact: true,
    main: () => <Tabs />,
  },
  {
    path: '/template/tag',
    exact: true,
    main: () => <Tag />,
  },
  {
    path: '/template/timeline',
    exact: true,
    main: () => <Timeline />,
  },
  {
    path: '/template/tooltip',
    exact: true,
    main: () => <Tooltip />,
  },
  {
    path: '/template/tree',
    exact: true,
    main: () => <Tree />,
  },
  // route for Data-Entry
  {
    path: '/template/autoComplete',
    exact: true,
    main: () => <AutoCompletePage />,
  },
  {
    path: '/template/cascade',
    exact: true,
    main: () => <CascadePage />,
  },
  {
    path: '/template/checkbox',
    exact: true,
    main: () => <CheckboxPage />,
  },
  {
    path: '/template/datePicker',
    exact: true,
    main: () => <DatePickerPage />,
  },
  {
    path: '/template/form',
    exact: true,
    main: () => <FormPage />,
  },
  {
    path: '/template/input',
    exact: true,
    main: () => <InputPage />,
  },
  {
    path: '/template/radio',
    exact: true,
    main: () => <RadioPage />,
  },
  {
    path: '/template/rate',
    exact: true,
    main: () => <RatePage />,
  },
  {
    path: '/template/select',
    exact: true,
    main: () => <SelectPage />,
  },
  {
    path: '/template/switch',
    exact: true,
    main: () => <SwitchPage />,
  },
  {
    path: '/template/timePicker',
    exact: true,
    main: () => <TimePickerPage />,
  },
  {
    path: '/template/transfer',
    exact: true,
    main: () => <TransferPage />,
  },
  {
    path: '/template/treeSelect',
    exact: true,
    main: () => <TreeSelectPage />,
  },
  {
    path: '/template/upload',
    exact: true,
    main: () => <UploadPage />,
  },
  // end Route for Data-Entry
  {
    path: '/template/pagination',
    exact: true,
    main: () => <PaginationPage />,
  },
  {
    path: '/template/drawer',
    exact: true,
    main: () => <DrawerPage />,
  },
  {
    path: '/template/tablelist',
    exact: true,
    main: () => <TableList />,
  },
  {
    path: 'userInformation',
    exact: true,
    main: () => <Profile />,
  },
]
export default routes
