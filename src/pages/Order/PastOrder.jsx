import React from "react";
import BreadCrumb from "../../components/BreadCrumb";
import BasicTable from "../../components/Table/BasicTable";
import { columns, data, filters, searchBy } from "../../service/OrderService";

const PastOrder = () => {


  return (
    <div className="p-5">
      <BreadCrumb title={"Past Order"} />
      <BasicTable
        data={data}
        columns={columns}
        SearchBy={searchBy}
        filters={filters}
        WeekRange={false}
        MonthRange={true}
      />
    </div>
  );
};

export default PastOrder;
