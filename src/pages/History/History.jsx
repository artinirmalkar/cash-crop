import React from "react";
import BreadCrumb from "../../components/BreadCrumb";
import BasicTable from "../../components/Table/BasicTable";
import { columns, data } from "../../service/HistoryService";
import { filters, searchBy } from "../../service/OrderService";

const History = () => {
  return (
    <div className="p-5">
      <BreadCrumb title={"History"} />
      <BasicTable
        data={data}
        columns={columns}
        SearchBy={searchBy}
        filters={filters}
        WeekRange={true}
        MonthRange={true}
      />
    </div>
  );
};

export default History;
