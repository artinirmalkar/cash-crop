import React from "react";
import BreadCrumb from "../../components/BreadCrumb";
import BasicTable from "../../components/Table/BasicTable";
import { filters, searchBy } from "../../service/OrderService";
import { data, columns } from "../../service/HistoryService";

const CurrentWeek = () => {
  return (
    <div className="p-5">
      <BreadCrumb title={"Current Week"} />
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

export default CurrentWeek;
