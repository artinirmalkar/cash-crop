import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import "react-phone-input-2/lib/style.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

import { RouterProvider } from "react-router-dom";
import router from "./routing/router";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "./store/store";
import Whatsapp from "./components/Whatsapp";

import "primereact/resources/themes/lara-light-cyan/theme.css";


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
  
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Whatsapp />
          <RouterProvider router={router} />
        </PersistGate>
      </Provider>
    <ToastContainer />
  </React.StrictMode>
);

reportWebVitals();
