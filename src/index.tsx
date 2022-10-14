import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import HomeTemplate from "./templates/HomeTemplate";
import "./assets/scss/styles.scss";
import { Provider } from "react-redux";
import { store } from "./redux/configStore";
import { unstable_HistoryRouter as HistoryRouter } from "react-router-dom";
import DanhSachCongViec from "./pages/DanhSachCongViec";
import DanhSachCongViecVaLoaiCongViec from "./pages/DanhSachCongViecVaLoaiCongViec";
import ChiTietCongViec from "./pages/ChiTietCongViec";
// import {createBrowserHistory} from "history";

// export const history = createBrowserHistory({ window });
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
    {/* <HistoryRouter history={history}> */}
      <BrowserRouter>
        <Routes>
          <Route path="" element={<HomeTemplate />}>
            <Route index element={<Home />}></Route>
            <Route path="login" element={<Login />}></Route>
            <Route path="danhsachcongviec" element={<DanhSachCongViec />}></Route>
            <Route path="chitietcongviec" element={<ChiTietCongViec />}></Route>
            <Route path="danhsachcongviecvaloaicongviec" element={<DanhSachCongViecVaLoaiCongViec />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    {/* </HistoryRouter> */}
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
