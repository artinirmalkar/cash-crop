import React from "react";
import BreadCrumb from "../../components/BreadCrumb";
import {
  columns,
  data,
  filters,
  searchBy
} from "../../service/OrderService";
import BasicTable from "../../components/Table/BasicTable";

const TommorrowOrder = () => {
  return (
    <div className="p-5">
      <BreadCrumb title={"Tommorrow Order"} />
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

export default TommorrowOrder;
