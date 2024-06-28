import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout";
import Dashboard from "../pages/Dashboard/Dashboard";
import Substore from "../pages/Users/Substore";
import Offers from "../pages/Offers/Offers";
import Profile from "../pages/Account/Profile";
import History from "../pages/History/History";
import Auth from "../components/Auth";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import ForgotPassword from "../pages/auth/ForgotPassword";
import NotFound from "../components/NotFound";
import CreateOrder from "../pages/Order/CreateOrder";
import { AuthProtected, ProtectedRoute } from "./protectedRoute";
import Earning from "../pages/Earning/Earning";
import CurrentMonth from '../pages/Earning/CurrentMonth';
import CurrentWeek from '../pages/Earning/CurrentWeek';
import Storesetting from "../pages/Settings/Storesetting";
import Deliverysettings from "../pages/Settings/Deliverysettings";
import Storetimesettings from "../pages/Settings/Storetimesettings";
import TodayOrder from '../pages/Order/TodayOrder'
import PastOrder from '../pages/Order/PastOrder'
import TommorrowOrder from '../pages/Order/TommorrowOrder'
import ScheduleOrder from '../pages/Order/ScheduleOrder'
import Dispatch from '../pages/Order/Dispatch'
import TableBooking from '../pages/Order/TableBooking'
import Reviews from "../pages/History/Reviews";
import HistoryCurrentWeek from "../pages/History/CurrentWeek";
import HistoryCurrentMonth from "../pages/History/CurrentMonth";
import ItemList from "../pages/Menu/ItemList";
import Category from "../pages/Menu/Category";
import ImportExportData from "../pages/Menu/ImportExportData";
import ModifierCategory from "../pages/Menu/ModifierCategory";
import CancellationPolicy from "../pages/Settings/CancellationPolicy";
import BasicSettings from "../pages/Settings/BasicSettings";


const router = createBrowserRouter(
  [
    {
      path:'/',
      element:<AuthProtected><Auth/></AuthProtected>,
      children:[
        {
          path:'/',
          element: <Login/>,
        },
        {
          path:'register',
          element: <Register/>
        },
        {
          path:'forgot-password',
          element: <ForgotPassword/>
        },
      ]
    },
    {
      path:'store',
      element:<ProtectedRoute><Layout/></ProtectedRoute>,
      children:[
        {
          path:'dashboard',
          element: <Dashboard/>,
        },
        {
          path:'order/create-order',
          element: <CreateOrder/>,
        },
        {
          path:'order/past-orders',
          element: <PastOrder/>,
        },
        {
          path:'order/today-orders',
          element: <TodayOrder/>,
        },
        {
          path:'order/tommorrow-orders',
          element: <TommorrowOrder/>,
        },
        {
          path:'order/schedule-orders',
          element: <ScheduleOrder/>,
        },
        {
          path:'order/dispatch',
          element: <Dispatch/>,
        },
        
        {
          path:'order/table-booking',
          element: <TableBooking/>,
        },
        
        {
          path:'history/current-week',
          element: <HistoryCurrentWeek/>
        },
        {
          path:'history/current-month',
          element: <HistoryCurrentMonth/>
        },
        {
          path:'history/history-list',
          element: <History/>
        },
        {
          path:'history/reviews',
          element: <Reviews/>
        },
       
        {
          path:'earning/earnings',
          element: <Earning/>,
        },
        {
          path: 'earning/current-week',
          element: <CurrentWeek/>
        },
        {
          path: 'earning/current-month',
          element: <CurrentMonth/>
        },

        {
          path:'menu/item-list',
          element: <ItemList/>,
        },
        {
          path:'menu/category',
          element: <Category/>,
        },
        {
          path:'menu/modifier-group',
          element: <ModifierCategory/>,
        },
        {
          path:'menu/import-data',
          element: <ImportExportData/>,
        },
        {
          path:'users/sub-stores',
          element: <Substore/>,
        },
        {
          path:'offers',
          element: <Offers/>,
        },
        {
          path:'settings/store-settings',
          element: <Storesetting/>
        },
        {
          path:'settings/delivery-settings',
          element: <Deliverysettings/>
        },
        {
          path:'settings/store-time-settings',
          element: <Storetimesettings/>
        },
        {
          path:'settings/table-booking-basic-settings',
          element: <BasicSettings/>
        },
        {
          path:'settings/table-booking-cancellation-policy',
          element: <CancellationPolicy/>
        },
        {
          path:'profile',
          element: <Profile/>
        },
      ]
    },
    {
      path:'*',
      element:<NotFound/>
    }
  ]
);

export default router;
