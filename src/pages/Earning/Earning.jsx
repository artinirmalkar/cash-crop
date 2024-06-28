import React from 'react'
import Breadcrumb from '../../components/BreadCrumb'
import { columns, data } from '../../service/EarningService'
import { filters, searchBy } from '../../service/OrderService'
import BasicTable from '../../components/Table/BasicTable'

const Earning = () => {
  return (
    <div className='p-5'>
      <Breadcrumb title ='Earning'/>
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

export default Earning