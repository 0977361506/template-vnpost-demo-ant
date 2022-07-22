/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { Breadcrumb, Cascader, Input, Space, Button, Table, Badge } from 'antd'
import {
  DeleteOutlined,
  DownloadOutlined,
  EditOutlined,
  FormOutlined,
  FullscreenExitOutlined,
  FullscreenOutlined,
  PlusOutlined,
  PrinterOutlined,
  SearchOutlined,
  SettingOutlined,
  SnippetsOutlined,
  UploadOutlined,
} from '@ant-design/icons'
import ModelAdd from './modelTableList/ModelAdd'

const ConfigFunc = (_, record) => {
  return (
    <>
      <Space size={16} style={{}}>
        <EditOutlined style={{ fontSize: '20px', cursor: 'pointer' }} />
        <FormOutlined style={{ fontSize: '20px', cursor: 'pointer' }} />
        <DeleteOutlined style={{ fontSize: '20px', cursor: 'pointer' }} />
        <SnippetsOutlined style={{ fontSize: '20px', cursor: 'pointer' }} />
      </Space>
    </>
  )
}
const columns = [
  {
    title: 'Rule Name',
    dataIndex: 'name',
    key: 'name',
    width: 150,
    fixed: 'left',
    render: (text) => <a href="#a">{text}</a>,
  },
  {
    title: 'Description',
    dataIndex: 'Description',
    width: 350,
    key: '1',
  },
  {
    title: 'Service Calls',
    dataIndex: 'Service',
    sorter: (a, b) => a.Service - b.Service,
    sortDirections: ['descend', 'ascend'],
    width: 100,
    key: '1',
  },
  {
    title: 'Status',
    dataIndex: 'Status',
    width: 100,
    key: '2',
  },
  {
    title: 'Status',
    dataIndex: 'Status',
    width: 100,
    key: '3',
  },
  {
    title: 'Status',
    dataIndex: 'Status',
    width: 100,
    key: '4',
  },
  {
    title: 'Status',
    dataIndex: 'Status',
    width: 100,
  },
  {
    title: 'Status',
    dataIndex: 'Status',
    width: 100,
    key: '5',
  },
  {
    title: 'Status',
    dataIndex: 'Status',
    width: 100,
    key: '6',
  },
  {
    title: 'Last Dispatch Time',
    dataIndex: 'Dispatch',
    sorter: true,
    sortDirections: ['descend', 'ascend'],
    width: 200,
    key: '7',
  },
  {
    title: 'Action',
    dataIndex: 'Action',
    key: 'operation',
    width: 100,
    render: () => <a href="#a">Config</a>,
  },
  {
    title: '',
    dataIndex: 'Subscription',
    key: 'operation1',
    width: 160,
    className: 'config_class',
    // fixed: 'right',
    render: (_, record) => ConfigFunc(_, record),
  },
]

const data = []

for (let i = 0; i < 100; i++) {
  data.push({
    key: i,
    name: `Edward King ${i}`,
    Description: 'Vel cras auctor at tortor imperdiet amet id sed rhoncus.',
    Service: 3638066 + i,
    Status: <Badge color="#f50" text="Online" />,
    Dispatch: '2021-02-05 08:28:36',
    Action: 'Config',
    // Subscription: 'Config',
  })
}

const TableList = () => {
  const [fullscreen, setFullScreen] = useState(false)
  const [visible, setVisible] = useState(false)
  const getIsVisible = (open) => {
    setVisible(false)
  }

  const [dataSource, setDataSource] = useState(data)
  const [selectedRowKeys, setSelectedRowKeys] = useState([])
  const onSelectChange = (newSelectedRowKeys) => {
    console.log('selectedRowKeys changed: ', selectedRowKeys)
    setSelectedRowKeys(newSelectedRowKeys)
  }
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
    fixed: 'left',
  }
  const handleChangerFullScreen = () => {
    if (!fullscreen) {
      document.body.classList.add('compensate-for-fullscreen')
    } else {
      document.body.classList.remove('compensate-for-fullscreen')
    }
    setFullScreen(!fullscreen)
  }

  const exportExcel = () => {
    import('xlsx').then((xlsx) => {
      const worksheet = xlsx.utils.json_to_sheet(dataSource)
      const workbook = { Sheets: { data: worksheet }, SheetNames: ['data'] }
      // const excelBuffer = xlsx.write(workbook, { bookType: 'xlsx', type: 'array' })
      xlsx.writeFile(workbook, 'Presidents.xlsx')
      // saveAsExcelFile(excelBuffer, 'data')
    })
  }
  return (
    <>
      <div className="table-warp-list">
        <div className="w-100">
          <Breadcrumb>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>
              <a href="#a">Application Center</a>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <a href="#a">Application List</a>
            </Breadcrumb.Item>
            <Breadcrumb.Item>An Application</Breadcrumb.Item>
          </Breadcrumb>
        </div>
        <div className="text-and-search-be mt-5-tw">
          <div className="text-171725-bold">Tên bảng dữ liệu - Search Table</div>
          <div className="max-w-265px min-w-264px">
            <Input
              className="giang"
              size="large"
              placeholder="Nhập từ khoá tìm kiếm"
              addonAfter={
                <Cascader
                  placeholder=""
                  style={{
                    width: 35,
                  }}
                />
              }
              defaultValue=""
              prefix={<SearchOutlined style={{ fontSize: '16px', color: '#B5B5BE' }} />}
            />
          </div>
        </div>
      </div>
      <div className="content-warp-table">
        <div className="list-warp-button-table">
          <Space size={16} className="space-warp-table" style={{ marginBottom: 16 }}>
            <Button
              onClick={() => setVisible(true)}
              className="btn-dis-hover"
              style={{ background: '#FCB71E', border: 'none' }}
              icon={<PlusOutlined />}
            >
              Thêm mới
            </Button>
            <Button icon={<DownloadOutlined />} onClick={exportExcel}>
              Xuất Danh Sách
            </Button>
            <Button icon={<UploadOutlined />}>Thêm từ excel</Button>
            <Button icon={<PrinterOutlined />}>In danh sách</Button>
          </Space>
          <Space size={16} className="space-warp-table" style={{ marginBottom: 16 }}>
            <a href="#a">
              <SettingOutlined style={{ fontSize: '20px' }} />
            </a>
            <a href="#a" onClick={handleChangerFullScreen}>
              {fullscreen ? (
                <FullscreenExitOutlined style={{ fontSize: '20px' }} />
              ) : (
                <FullscreenOutlined style={{ fontSize: '20px' }} />
              )}
            </a>
          </Space>
        </div>
        <div>
          <Table
            rowSelection={rowSelection}
            columns={columns}
            dataSource={data}
            scroll={{
              x: 1500,
              y: 600,
            }}
          />
        </div>
      </div>
      <ModelAdd visible={visible} getIsOpen={(open) => getIsVisible(open)} />
    </>
  )
}
export default TableList
