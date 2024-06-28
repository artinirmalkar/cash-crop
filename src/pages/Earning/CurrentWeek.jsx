import React from 'react'
import BreadCrumb from '../../components/BreadCrumb'
import BasicTable from '../../components/Table/BasicTable'
import { columns, data } from '../../service/EarningService'
import { filters, searchBy } from '../../service/OrderService'

const CurrentWeek = () => {
  
  return (
    <div className='p-5'>
      <BreadCrumb title={'Current Week'}/>
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

export default CurrentWeek