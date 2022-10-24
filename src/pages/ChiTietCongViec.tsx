import React, { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import { Appdispatch, RootState } from "../redux/configStore";
import StarComponent from "../components/StarComponent";

import {
  DsNhomChiTietLoai,
  getMenuTypeJobApi,
  layCongViecChiTietApi,
  MenuLoaiCongViec,
} from "../redux/reducers/findJobReducer";
import ImageSlider from "../components/ImageSlider";

const slides = [
  {
    url: `https://fiverr-res.cloudinary.com/images/t_smartwm/t_main1,q_auto,f_auto,q_auto,f_auto/attachments/delivery/asset/d3504ec2bb5b0fdf798fc91eb699e074-1659985220/white%20hat%20SEO%20backlinks/200-manual-seo-backlinks-white-hat-manual-link-building-google-top-ranking.png`,
    title: "SEO Top",
  },
  {
    url: `https://fiverr-res.cloudinary.com/images/t_smartwm/t_main1,q_auto,f_auto,q_auto,f_auto/attachments/delivery/asset/361bf59d72b4592190e1595d72036299-1635589507/durrzaammetvakantie%20DR%2030_/200-manual-seo-backlinks-white-hat-manual-link-building-google-top-ranking.png`,
    title: "SEO",
  },
  {
    url: `https://fiverr-res.cloudinary.com/images/t_smartwm/t_main1,q_auto,f_auto,q_auto,f_auto/attachments/delivery/asset/dc713682470ab5182f77bd8bbe45c454-1659962361/riocelesteaventuras%20DR%20and%20UR%20boosted/200-manual-seo-backlinks-white-hat-manual-link-building-google-top-ranking.png`,
    title: "SEO Best",
  },
  {
    url: `https://fiverr-res.cloudinary.com/images/t_smartwm/t_main1,q_auto,f_auto,q_auto,f_auto/attachments/delivery/asset/05b9f51c5ecfcc4a1d381dcce64b6626-1657030521/seo%20monthly%20service/200-manual-seo-backlinks-white-hat-manual-link-building-google-top-ranking.png`,
    title: "SEO Rank",
  },
  {
    url: `https://fiverr-res.cloudinary.com/images/t_smartwm/t_main1,q_auto,f_auto,q_auto,f_auto/attachments/delivery/asset/3f0d8b7ee24ee71c3660e90ededc17e6-1639928651/raumdecken%20TF%2030_/200-manual-seo-backlinks-white-hat-manual-link-building-google-top-ranking.png`,
    title: "SEO Ok",
  },
];

type Props = {};

export default function ChiTietCongViec({}: Props) {
  const dispatch: Appdispatch = useDispatch();
  const params: any = useParams();
  const { arrJob } = useSelector((state: RootState) => state.findJobReducer);
  const { congViecChiTiet } = useSelector(
    (state: RootState) => state.findJobReducer
  );
  const { menuTypeJob } = useSelector(
    (state: RootState) => state.findJobReducer
  );
  useEffect(() => {
    dispatch(getMenuTypeJobApi());
    dispatch(layCongViecChiTietApi(params.id));
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
  let numberStar: number = congViecChiTiet?.congViec.saoCongViec;
  return (
    <div>
      <div className="container">
        <Header />
        <div>
          <ul className="d-flex justify-content-between menu-nav">
            {renderMenuTypeJob()}
          </ul>
        </div>
        <div className="gig-page row justify-content-between">
          <div className="sitebar col-4 d-flex justify-content-center">
            Hehe
          </div>
          <div className="main col-7">
            <div className="Breadcrumb d-flex">
              <div className="tenLoaiCongViec">
                <a href="">
                  <span className="margin-right-16">
                    {congViecChiTiet?.tenLoaiCongViec}
                  </span>
                </a>

                <span
                  style={{ width: "12px", height: "12px" }}
                  aria-hidden="true"
                >
                  <svg
                    width="8"
                    height="16"
                    viewBox="0 0 8 16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M0.772126 1.19065L0.153407 1.80934C0.00696973 1.95578 0.00696973 2.19322 0.153407 2.33969L5.80025 8L0.153407 13.6603C0.00696973 13.8067 0.00696973 14.0442 0.153407 14.1907L0.772126 14.8094C0.918563 14.9558 1.156 14.9558 1.30247 14.8094L7.84666 8.26519C7.99309 8.11875 7.99309 7.88131 7.84666 7.73484L1.30247 1.19065C1.156 1.04419 0.918563 1.04419 0.772126 1.19065Z"></path>
                  </svg>
                </span>
              </div>
              <div className="tenNhomChiTietLoai">
                <a href="">
                  <span className="margin-right-16 margin-left-10">
                    {congViecChiTiet?.tenNhomChiTietLoai}
                  </span>
                </a>

                <span
                  style={{ width: "12px", height: "12px" }}
                  aria-hidden="true"
                >
                  <svg
                    width="8"
                    height="16"
                    viewBox="0 0 8 16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M0.772126 1.19065L0.153407 1.80934C0.00696973 1.95578 0.00696973 2.19322 0.153407 2.33969L5.80025 8L0.153407 13.6603C0.00696973 13.8067 0.00696973 14.0442 0.153407 14.1907L0.772126 14.8094C0.918563 14.9558 1.156 14.9558 1.30247 14.8094L7.84666 8.26519C7.99309 8.11875 7.99309 7.88131 7.84666 7.73484L1.30247 1.19065C1.156 1.04419 0.918563 1.04419 0.772126 1.19065Z"></path>
                  </svg>
                </span>
              </div>
              <div className="tenChiTietLoai">
                <a href="">
                  <span className="margin-right-16 margin-left-10">
                    {congViecChiTiet?.tenChiTietLoai}
                  </span>
                </a>

                <span
                  style={{ width: "12px", height: "12px" }}
                  aria-hidden="true"
                >
                  <svg
                    width="8"
                    height="16"
                    viewBox="0 0 8 16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M0.772126 1.19065L0.153407 1.80934C0.00696973 1.95578 0.00696973 2.19322 0.153407 2.33969L5.80025 8L0.153407 13.6603C0.00696973 13.8067 0.00696973 14.0442 0.153407 14.1907L0.772126 14.8094C0.918563 14.9558 1.156 14.9558 1.30247 14.8094L7.84666 8.26519C7.99309 8.11875 7.99309 7.88131 7.84666 7.73484L1.30247 1.19065C1.156 1.04419 0.918563 1.04419 0.772126 1.19065Z"></path>
                  </svg>
                </span>
              </div>
            </div>
            <h1 className="main-title">
              {congViecChiTiet?.congViec.tenCongViec}
            </h1>
            <div className="seller-overview d-flex">
              <div>
                <img
                  className="seller-overview-img"
                  src="https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/8b2d13bf05064297b603ddd875e233d7-1624900850750/827000ec-2cad-4fab-93e3-29329157b064.jpg"
                  alt="seosupremacy"
                  loading="lazy"
                />
              </div>
              <div className="seller-info d-flex">
                <div className="seller-name">
                  {congViecChiTiet?.tenNguoiTao}
                </div>
                <div className="toprateseller">Top Rated Seller</div>
                <div className="d-flex star-svg">
                  {Array.from(
                    { length: numberStar },
                    (component: FC, index: number) => (
                      <StarComponent key={index} />
                    )
                  )}
                </div>
                <span className="rating-score">{numberStar}</span>
                <span className="rating-count">
                  ({congViecChiTiet?.congViec.danhGia})
                </span>
                {/* <div className="order-quantity">27 Orders in Queue</div> */}
              </div>
            </div>
            <div className="SliderContainer">
              <ImageSlider slides={slides} />
            </div>
            <div className="description-job">
              <h2>About This Gig</h2>
              {/* <p>
                <strong>#Latest White Hat SEO Backlinks Strategy 2022</strong>
              </p> */}
              <p>
                <strong>{congViecChiTiet?.congViec.moTaNgan}</strong>
              </p>
              <p>{congViecChiTiet?.congViec.moTa}</p>
              <p>We Provide Contextual Link Building:</p>
              <ul>
                <li>Article Submission</li>
                <li>Tier 1 & Tier 2</li>
                <li>Web 2.0</li>
                <li>Profile Links</li>
                <li>White Hat Backlinks</li>
                <li>Image Sharing</li>
                <li>and more for GOOGLE TOP RANKING</li>
              </ul>
              <h2>About The Seller</h2>
              <div className="user d-flex">
                <div className="user-profile-image">
                  <label
                    className="profile-pict"
                    style={{
                      width: "110px",
                      height: "110px",
                      fontSize: "2.2rem",
                    }}
                  >
                    <img
                      className="w-100"
                      src="http://sc04.alicdn.com/kf/Hc3e61591078043e09dba7808a6be5d21n.jpg"
                    />
                  </label>
                </div>
                <div className="user-disc">
                  <div className="username-line">
                    <a className="username-nguoitao" href="#">
                      {congViecChiTiet?.tenNguoiTao}
                    </a>
                  </div>
                  <div className="css-mota">
                    {congViecChiTiet?.congViec.tenCongViec}
                  </div>
                  <div className="star-group d-flex mt-2">
                    <div className="star-svg">
                      {Array.from(
                        { length: numberStar },
                        (component: FC, index: number) => (
                          <StarComponent key={index} />
                        )
                      )}
                    </div>
                    <div className="mx-1">{numberStar}</div>
                    <div>({congViecChiTiet?.congViec.danhGia})</div>
                  </div>
                  <button className="contact-me">ConTact Me</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
