import React from "react";
import { TiStarOutline } from "react-icons/ti";
import { useSelector } from "react-redux";
import BreadCrumb from "../../components/BreadCrumb";
import BasicTable from "../../components/Table/BasicTable";
import { columns, data } from "../../service/HistoryService";
import { filters, searchBy } from "../../service/OrderService";

const Reviews = () => {
  return (
    <div className="p-5">
      <BreadCrumb title={"Reviews"} />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-5">
        <Card title="Order Review" ratingCount="0 / 0" />
        <Card title="Delivery Review" ratingCount="0 / 0" />
      </div>
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

export default Reviews;

const Card = ({ title, ratingCount }) => {
  const { theme } = useSelector((state) => state.theme);

  return (
    <div
      className={`p-3 w-full rounded-lg shadow-2xl ${
        theme === "light" ? "bg-secondaryColor" : "bg-darkThirsary"
      }`}
    >
      <div className="flex justify-between items-center">
        <span className="text-lg ">{title}</span>
        <span className="text-2xl">{ratingCount}</span>
      </div>
      <div className="py-3">
        <div className="flex justify-between">
          <span className="flex">
            <TiStarOutline className="star" />
            <TiStarOutline className="star" />
            <TiStarOutline className="star" />
            <TiStarOutline className="star" />
            <TiStarOutline className="star" />
          </span>
          <span>0 (0%)</span>
        </div>
        <div className="flex justify-between">
          <span className="flex">
            <TiStarOutline className="star" />
            <TiStarOutline className="star" />
            <TiStarOutline className="star" />
            <TiStarOutline className="star" />
            <TiStarOutline className="star"  />
          </span>
          <span>0 (0%)</span>
        </div>
        <div className="flex justify-between">
          <span className="flex">
            <TiStarOutline className="star" />
            <TiStarOutline className="star" />
            <TiStarOutline className="star" />
            <TiStarOutline className="star" />
            <TiStarOutline className="star" />
          </span>
          <span>0 (0%)</span>
        </div>
        <div className="flex justify-between">
          <span className="flex">
            <TiStarOutline className="star" />
            <TiStarOutline className="star" />
            <TiStarOutline className="star" />
            <TiStarOutline className="star" />
            <TiStarOutline className="star" />
          </span>
          <span>0 (0%)</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="flex">
            <TiStarOutline className="star" />
            <TiStarOutline className="star" />
            <TiStarOutline className="star" />
            <TiStarOutline className="star" />
            <TiStarOutline className="star" />
          </span>
          <span>0 (0%)</span>
        </div>
      </div>
    </div>
  );
};
