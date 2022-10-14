import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../components/Header";
import { Appdispatch, RootState } from "../redux/configStore";
import {
  CongViec,
  DsNhomChiTietLoai,
  getMenuTypeJobApi,
  LoaiCongViec,
  MenuLoaiCongViec,
} from "../redux/reducers/findJobReducer";

type Props = {};

export default function DanhSachCongViec({}: Props) {
  const dispatch: Appdispatch = useDispatch();
  const { arrJob } = useSelector((state: RootState) => state.findJobReducer);
  const { menuTypeJob } = useSelector(
    (state: RootState) => state.findJobReducer
  );
  const renderJob = () => {
    return arrJob.map((job: any) => {
      return (
        <div className="col-sm-12 col-xl-3 col-lg-4 col-md-4 mt-5" key={job}>
          <div className="card" style={{ width: "18rem" }}>
            <img
              src={job.congViec.hinhAnh}
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <div className="seller-info text-body-2">
                <div className="seller-wrapper">
                  <div>
                    <img className="seller-img" src={job.avatar} alt="avarta" />
                  </div>
                  <div>{job.tenNguoiTao}</div>
                </div>
                <div className="seller-desc">
                  <p>{job.congViec.tenCongViec}</p>
                </div>
              </div>
              <div>
                <span className="seller-star">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1792 1792"
                    width="15"
                    height="15"
                    style={{ color: "orange" }}
                  >
                    <path
                      fill="currentColor"
                      d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z"
                    ></path>
                  </svg>
                </span>
                <span className="fix-star" style={{ color: "orange" }}>
                  {job.congViec.saoCongViec}
                </span>
                <span className="mx-1">({job.congViec.danhGia})</span>
              </div>
            </div>
            <div className="card-footer" style={{ backgroundColor: "#fff" }}>
              <div className="d-flex justify-content-between">
                <span>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="#B5B6BA"
                      d="M14.4469 1.95625C12.7344 0.496875 10.1875 0.759375 8.61561 2.38125L7.99999 3.01562L7.38436 2.38125C5.81561 0.759375 3.26561 0.496875 1.55311 1.95625C-0.409388 3.63125 -0.512513 6.6375 1.24374 8.45312L7.29061 14.6969C7.68124 15.1 8.31561 15.1 8.70624 14.6969L14.7531 8.45312C16.5125 6.6375 16.4094 3.63125 14.4469 1.95625Z"
                    ></path>
                  </svg>
                </span>
                <a className="price-job" href="#">
                  <span className="starting-price">Starting at</span>
                  <span>US${job.congViec.giaTien}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      );
    });
  };
  useEffect(() => {
    dispatch(getMenuTypeJobApi());
  }, []);

  const renderMenuTypeJob = () => {
    return menuTypeJob?.map((menu: MenuLoaiCongViec, index: number) => {
      const renderNhomChiTietLoai = () => {
        return menu.dsNhomChiTietLoai.map(
          (arrChiTietLoai: DsNhomChiTietLoai, index: number) => {
            return (
              <span key={index}>
                <a href={arrChiTietLoai.hinhAnh}>{arrChiTietLoai.tenNhom}</a>
              </span>
            );
          }
        );
      };
      return (
        <li className={`menu${menu.id}`} key={index}>
          <a href="/categories/graphics-design?source=category_tree">
            {menu.tenLoaiCongViec}
          </a>
          <div className={`menu-modal-${menu.id} menu-modal`}>
            <div className="d-flex justify-content-between ">
              {renderNhomChiTietLoai()}
            </div>
          </div>
        </li>
      );
    });
  };

  return (
    <div>
      <div className="container">
        <Header />
        <div>
          <ul className="d-flex justify-content-between menu-nav">
            {renderMenuTypeJob()}
          </ul>
        </div>
      </div>
      <div className="htmltag-container">
        <div className="container">
          <div className="d-flex align-items-center">
            <b>Suggested</b>
            <div className="d-flex search-tag align-items-center">
              <a className="html-tag" href="#">
                html css
              </a>
              <a className="html-tag" href="#">
                html website
              </a>
              <a className="html-tag" href="#">
                psd to html
              </a>
              <a className="html-tag html-tag-4" href="#">
                html email
              </a>
              <a className="html-tag html-tag-5" href="#">
                css
              </a>
              <a className="html-tag html-tag-6" href="#">
                javascript
              </a>
              <a className="html-tag html-tag-7" href="#">
                wordpress
              </a>
            </div>
          </div>
          <div className="search-param">
            <div className="search-header">
              <span className="title">Results for "html"</span>
            </div>
          </div>
          <div className="topbar d-flex justify-content-between">
            <div className="topbar-left d-flex">
              <button className="topbar-btn">
                Category
                <span
                  className="chevron-icon-down"
                  aria-hidden="true"
                  style={{ width: "10px", height: "10px" }}
                >
                  <svg
                    width="11"
                    height="7"
                    viewBox="0 0 11 7"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M5.4636 6.38899L0.839326 1.769C0.692474 1.62109 0.692474 1.38191 0.839326 1.23399L1.45798 0.61086C1.60483 0.462945 1.84229 0.462945 1.98915 0.61086L5.72919 4.34021L9.46923 0.61086C9.61608 0.462945 9.85354 0.462945 10.0004 0.61086L10.619 1.23399C10.7659 1.38191 10.7659 1.62109 10.619 1.769L5.99477 6.38899C5.84792 6.5369 5.61046 6.5369 5.4636 6.38899Z"></path>
                  </svg>
                </span>
              </button>
              <button className="topbar-btn">
                Service Options
                <span
                  className="chevron-icon-down"
                  aria-hidden="true"
                  style={{ width: "10px", height: "10px" }}
                >
                  <svg
                    width="11"
                    height="7"
                    viewBox="0 0 11 7"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M5.4636 6.38899L0.839326 1.769C0.692474 1.62109 0.692474 1.38191 0.839326 1.23399L1.45798 0.61086C1.60483 0.462945 1.84229 0.462945 1.98915 0.61086L5.72919 4.34021L9.46923 0.61086C9.61608 0.462945 9.85354 0.462945 10.0004 0.61086L10.619 1.23399C10.7659 1.38191 10.7659 1.62109 10.619 1.769L5.99477 6.38899C5.84792 6.5369 5.61046 6.5369 5.4636 6.38899Z"></path>
                  </svg>
                </span>
              </button>
              <button className="topbar-btn">
                Seller Details
                <span
                  className="chevron-icon-down"
                  aria-hidden="true"
                  style={{ width: "10px", height: "10px" }}
                >
                  <svg
                    width="11"
                    height="7"
                    viewBox="0 0 11 7"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M5.4636 6.38899L0.839326 1.769C0.692474 1.62109 0.692474 1.38191 0.839326 1.23399L1.45798 0.61086C1.60483 0.462945 1.84229 0.462945 1.98915 0.61086L5.72919 4.34021L9.46923 0.61086C9.61608 0.462945 9.85354 0.462945 10.0004 0.61086L10.619 1.23399C10.7659 1.38191 10.7659 1.62109 10.619 1.769L5.99477 6.38899C5.84792 6.5369 5.61046 6.5369 5.4636 6.38899Z"></path>
                  </svg>
                </span>
              </button>
              <button className="topbar-btn bubget">
                Bubget
                <span
                  className="chevron-icon-down"
                  aria-hidden="true"
                  style={{ width: "10px", height: "10px" }}
                >
                  <svg
                    width="11"
                    height="7"
                    viewBox="0 0 11 7"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M5.4636 6.38899L0.839326 1.769C0.692474 1.62109 0.692474 1.38191 0.839326 1.23399L1.45798 0.61086C1.60483 0.462945 1.84229 0.462945 1.98915 0.61086L5.72919 4.34021L9.46923 0.61086C9.61608 0.462945 9.85354 0.462945 10.0004 0.61086L10.619 1.23399C10.7659 1.38191 10.7659 1.62109 10.619 1.769L5.99477 6.38899C5.84792 6.5369 5.61046 6.5369 5.4636 6.38899Z"></path>
                  </svg>
                </span>
              </button>
              <button className="topbar-btn delivery">
                Delivery Time
                <span
                  className="chevron-icon-down"
                  aria-hidden="true"
                  style={{ width: "10px", height: "10px" }}
                >
                  <svg
                    width="11"
                    height="7"
                    viewBox="0 0 11 7"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M5.4636 6.38899L0.839326 1.769C0.692474 1.62109 0.692474 1.38191 0.839326 1.23399L1.45798 0.61086C1.60483 0.462945 1.84229 0.462945 1.98915 0.61086L5.72919 4.34021L9.46923 0.61086C9.61608 0.462945 9.85354 0.462945 10.0004 0.61086L10.619 1.23399C10.7659 1.38191 10.7659 1.62109 10.619 1.769L5.99477 6.38899C5.84792 6.5369 5.61046 6.5369 5.4636 6.38899Z"></path>
                  </svg>
                </span>
              </button>
            </div>
            <div className="topbar-right">
              <div className="d-flex justify-content-between align-items-center">
                <span className="toggle-item"></span>
                Pro service
              </div>
              <div className="d-flex d-flex justify-content-between align-items-center">
                <div className="toggle-item"></div>
                Local Sellers
              </div>
              <div className="d-flex d-flex justify-content-between align-items-center">
                <div className="toggle-item"></div>
                Online Sellers
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">{renderJob()}</div>
        </div>
      </div>
    </div>
  );
}
