import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import React from "react";
import { useSelector } from "react-redux";
import OrderFilters from "../Filter/OrderFilters";

export default function BasicTable({
  columns,
  data,
  SearchBy,
  filters,
  WeekRange,
  MonthRange,
}) {
  const { theme } = useSelector((state) => state.theme);
  const handleFilter = (name, value) => {
    console.log("name", name);
    console.log("value", value);
  };

  return (
    <div
      className={`${
        theme === "light"
          ? "bg-secondaryColor text-textColorLight"
          : "bg-darkThirsary text-darkSecondary"
      } shadow-2xl p-5 rounded-xl `}
    >
      <OrderFilters
        filters={filters ? filters : []}
        SearchBy={SearchBy?.options.length ? SearchBy : { options: [] }}
        WeekRange={WeekRange ? WeekRange : false}
        MonthRange={MonthRange ? MonthRange : false}
        handleFilter={handleFilter}
      />

      <DataTable
        value={data}
        paginator
        paginatorTemplate="FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink RowsPerPageDropdown"
        rows={5}
        rowsPerPageOptions={[5, 10, 25, 50]}
      >
        {columns.map((col, i) => (
          <Column
            key={col.field}
            field={col.field}
            header={col.header}
            className={`p-2.5 text-sm border-b ${
              theme === "light"
                ? "bg-secondaryColor text-textColorLight"
                : "bg-darkThirsary text-darkSecondary"
            }`}
          />
        ))}
      </DataTable>
    </div>
  );
}
