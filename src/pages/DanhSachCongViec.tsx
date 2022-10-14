import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../components/Header";
import { Appdispatch, RootState } from "../redux/configStore";
import {
  DsNhomChiTietLoai,
  getMenuTypeJobApi,
  MenuLoaiCongViec,
} from "../redux/reducers/findJobReducer";

type Props = {};

export default function DanhSachCongViec({}: Props) {
  const dispatch: Appdispatch = useDispatch();
  const { arrJob } = useSelector((state: RootState) => state.findJobReducer);
  const { menuTypeJob } = useSelector(
    (state: RootState) => state.findJobReducer
  );
  // const renderJob = () => {
  //   return arrJob.map((job: any) => {
  //     return (
  //       <div key={job}>
  //         <div>{job.id}</div>
  //       </div>
  //     );
  //   });
  // };
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
              <a className="html-tag" href="#">
                html email
              </a>
              <a className="html-tag" href="#">
                css
              </a>
              <a className="html-tag" href="#">
                javascript
              </a>
              <a className="html-tag" href="#">
                wordpress
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
