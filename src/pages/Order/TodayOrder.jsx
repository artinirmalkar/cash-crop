import React from 'react'
import BreadCrumb from '../../components/BreadCrumb'
import BasicTable from '../../components/Table/BasicTable'
import { columns, data, filters, searchBy } from '../../service/OrderService'

const TodayOrder = () => {
  return (
    <div className="p-5">
      <BreadCrumb title={"Today Order"} />
      <BasicTable
        data={data}
        columns={columns}
        SearchBy={searchBy}
        filters={filters}
        WeekRange={true}
        MonthRange={true}
      />
    </div>
  )
}

export default TodayOrder