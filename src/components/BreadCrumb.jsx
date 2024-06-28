
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

const BreadCrumb = ({  title }) => {
  const {theme} = useSelector((state)=> state.theme)
    const location = useLocation()

  const pathSegments = location.pathname.split("/");

  const breadcrumbItems = pathSegments
    .filter((segment) => segment)
    .map((segment, index) => {
      const isLastItem = index === pathSegments.length - 2;

      return (
        <span key={index} className={`mr-2 ${!isLastItem && "text-gray-400"}`}>
          {index === 0 ? "Home" : segment.split("-").join(" ")}
          {!isLastItem && " | "}
        </span>
      );
    });

  return (
    <div className={`lg:flex items-end gap-3 mb-10 ${theme === 'light' ? " text-textColorLight" : " text-darkSecondary"}`}>
      <h1 className="text-2xl">{title}</h1>
      <div className="capitalize flex items-center text-sm ">
        {breadcrumbItems}
      </div>
    </div>
  );
};

export default BreadCrumb;
