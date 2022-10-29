import React, { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import { Appdispatch, RootState } from "../redux/configStore";
import StarComponent from "../components/StarComponent";

import {
  DsNhomChiTietLoai,
  getMenuTypeJobApi,
  layBinhLuanTheoCongViecApi,
  layCongViecChiTietApi,
  MenuLoaiCongViec,
} from "../redux/reducers/findJobReducer";
import ImageSlider from "../components/ImageSlider";
import Footer from "../components/Footer";

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
  const { arrComment } = useSelector(
    (state: RootState) => state.findJobReducer
  );
  const { congViecChiTiet } = useSelector(
    (state: RootState) => state.findJobReducer
  );
  const { menuTypeJob } = useSelector(
    (state: RootState) => state.findJobReducer
  );
  useEffect(() => {
    dispatch(layBinhLuanTheoCongViecApi(params.id));
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

  const renderComment = () => {
    return arrComment?.map((cmt: any, index: number) => {
      return (
        <li key={index} className="review-item">
          <div className="review-header-container">
            <div className="userreview-info d-flex">
              <div className="user-profile-img">
                <label className="profile-pict">
                  <img
                    src={cmt.avatar}
                    className="profile-pict-img tbody-6 custom-profile-image"
                    alt="seowebua"
                    loading="lazy"
                  />
                </label>
              </div>
              <div className="username-block">
                <div className="d-flex">
                  <span>{cmt.tenNguoiBinhLuan}</span>
                  <span
                    className="mx-1"
                    aria-hidden="true"
                    style={{ width: "15px", height: "15px" }}
                  >
                    <svg
                      width="16"
                      height="17"
                      viewBox="0 0 16 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M0.25 3C0.25 2.0335 1.0335 1.25 2 1.25H14C14.9665 1.25 15.75 2.0335 15.75 3V11.5C15.75 12.4665 14.9665 13.25 14 13.25H8.77744L5.48809 16.0694C5.26571 16.2601 4.95271 16.3038 4.68661 16.1814C4.42051 16.059 4.25 15.7929 4.25 15.5V13.25H2C1.0335 13.25 0.25 12.4665 0.25 11.5V3ZM2 2.75C1.86193 2.75 1.75 2.86193 1.75 3V11.5C1.75 11.6381 1.86193 11.75 2 11.75H5C5.41421 11.75 5.75 12.0858 5.75 12.5V13.8693L8.01191 11.9306C8.14784 11.814 8.32097 11.75 8.5 11.75H14C14.1381 11.75 14.25 11.6381 14.25 11.5V3C14.25 2.86193 14.1381 2.75 14 2.75H2Z"
                        fill="#74767E"
                      ></path>
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M11.5 6.21267C11.5 6.29206 11.4453 6.36704 11.3906 6.42439L9.86358 7.98582L10.2254 10.1912C10.2296 10.2221 10.2296 10.2486 10.2296 10.2795C10.2296 10.3941 10.1791 10.5 10.0571 10.5C9.9982 10.5 9.9393 10.4779 9.88882 10.4471L8 9.40611L6.11118 10.4471C6.05649 10.4779 6.0018 10.5 5.94291 10.5C5.82091 10.5 5.76623 10.3941 5.76623 10.2795C5.76623 10.2486 5.77043 10.2221 5.77464 10.1912L6.13642 7.98582L4.60517 6.42439C4.55469 6.36704 4.5 6.29206 4.5 6.21267C4.5 6.08034 4.63041 6.02741 4.73558 6.00977L6.84736 5.68778L7.79387 3.68084C7.83173 3.59704 7.90325 3.5 8 3.5C8.09675 3.5 8.16827 3.59704 8.20613 3.68084L9.15264 5.68778L11.2644 6.00977C11.3654 6.02741 11.5 6.08034 11.5 6.21267Z"
                        fill="#74767E"
                      ></path>
                    </svg>
                  </span>
                  <span>19 Reviews</span>
                </div>
                <div className="country-wrapper">
                  <img
                    className="country-flag"
                    src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1e6.png"
                    alt="UA"
                    loading="lazy"
                  />
                  <span>Ukraine</span>
                </div>
              </div>
            </div>
          </div>
          <div className="review-details mt-3">
            {Array.from(
              { length: cmt.saoBinhLuan },
              (component: FC, index: number) => (
                <StarComponent key={index} />
              )
            )}
            <span>{cmt.saoBinhLuan}</span>
            <span className="inline-divider"></span>
            <span>2 days ago</span>
            <div>
              Good sales. Look forward for next deal. For the basic price of 5$,
              the amount of work done is pretty good, the idea of the service is
              also good, however the execution of it could be a bit more refined
            </div>
          </div>
          <hr />
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
            <section className="faq-section">
              <h2>FAQ</h2>
              <div>
                <div className="d-flex w-100 justify-content-between">
                  <div className="faq-text">
                    <p className="question">
                      Does our Backlinks Manual and Permanent?
                    </p>
                  </div>
                  <div className="scroll-img">
                    <span>
                      <i className="fa-solid fa-angle-down"></i>
                    </span>
                  </div>
                </div>
              </div>
              <hr />
              <div>
                <div className="d-flex w-100 justify-content-between">
                  <div className="faq-text">
                    <p className="question">
                      Will you use generic keywords such as Click Here, Learn
                      More etc?
                    </p>
                  </div>
                  <div className="scroll-img">
                    <span>
                      <i className="fa-solid fa-angle-down"></i>
                    </span>
                  </div>
                </div>
              </div>
              <hr />
              <div>
                <div className="d-flex w-100 justify-content-between">
                  <div className="faq-text">
                    <p className="question">Will I get first page of Google?</p>
                  </div>
                  <div className="scroll-img">
                    <span>
                      <i className="fa-solid fa-angle-down"></i>
                    </span>
                  </div>
                </div>
              </div>
              <hr />
              <div>
                <div className="d-flex w-100 justify-content-between">
                  <div className="faq-text">
                    <p className="question">
                      Do you provide reports after completed your work?
                    </p>
                  </div>
                  <div className="scroll-img">
                    <span>
                      <i className="fa-solid fa-angle-down"></i>
                    </span>
                  </div>
                </div>
              </div>
            </section>
            <section className="review">
              <div className="d-flex justify-content-between">
                <div className="quantity-review d-flex">
                  <span>317 Reviews</span>
                  <div className="mx-2">
                    <span className="star-svg">
                      {Array.from(
                        { length: 5 },
                        (component: FC, index: number) => (
                          <StarComponent key={index} />
                        )
                      )}
                    </span>
                    <span className="star-average mx-1">4.9</span>
                  </div>
                </div>
                <div className="sort-by">
                  <div className="d-flex justify-content-center">
                    <div>Sort by</div>
                    <div>
                      <div className="d-flex">
                        <div className="mx-2 most-relevant">Most Relevant</div>
                        <span>
                          <i className="fa-solid fa-angle-down"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-flex w-100 justify-content-between">
                <div className="cover-type-star">
                  <div className="type-star">
                    <div className="inline">5 Stars</div>
                    <div className="d-flex align-items-center w-100 average-color">
                      <div className="background-div">
                        <div className="star-progress-shape"></div>
                      </div>
                    </div>
                    <div className="quantity-star-review">(296)</div>
                  </div>
                  <div className="type-star">
                    <div className="inline">4 Stars</div>
                    <div className="d-flex align-items-center w-100 average-color">
                      <div className="background-div">
                        <div className="star-progress-shape-4 star-progress-shape"></div>
                      </div>
                    </div>
                    <div className="quantity-star-review">(11)</div>
                  </div>
                  <div className="type-star">
                    <div className="inline">3 Stars</div>
                    <div className="d-flex align-items-center w-100 average-color">
                      <div className="background-div">
                        <div className="star-progress-shape-n star-progress-shape"></div>
                      </div>
                    </div>
                    <div className="quantity-star-review">(0)</div>
                  </div>
                  <div className="type-star">
                    <div className="inline">2 Stars</div>
                    <div className="d-flex align-items-center w-100 average-color">
                      <div className="background-div">
                        <div className="star-progress-shape-n star-progress-shape"></div>
                      </div>
                    </div>
                    <div className="quantity-star-review">(0)</div>
                  </div>
                  <div className="type-star">
                    <div className="inline">1 Stars</div>
                    <div className="d-flex align-items-center w-100 average-color">
                      <div className="background-div">
                        <div className="star-progress-shape-n star-progress-shape"></div>
                      </div>
                    </div>
                    <div className="quantity-star-review">(0)</div>
                  </div>
                </div>
                <div className="rating-breakdown">
                  <h6>Rating Breakdown</h6>
                  <ul>
                    <li className="d-flex justify-content-between mt-2">
                      <div>Seller communication level</div>
                      <div className="stars">
                        <span
                          className="orca-star"
                          style={{ width: "15px", height: "15px" }}
                          aria-hidden="true"
                        >
                          <svg
                            fill="#ffb33e"
                            width="16"
                            height="15"
                            viewBox="0 0 16 15"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M16 5.81285C16 5.98299 15.875 6.14367 15.75 6.26654L12.2596 9.61248L13.0865 14.3384C13.0962 14.4045 13.0962 14.4612 13.0962 14.5274C13.0962 14.7732 12.9808 15 12.7019 15C12.5673 15 12.4327 14.9527 12.3173 14.8866L8 12.656L3.68269 14.8866C3.55769 14.9527 3.43269 15 3.29808 15C3.01923 15 2.89423 14.7732 2.89423 14.5274C2.89423 14.4612 2.90385 14.4045 2.91346 14.3384L3.74038 9.61248L0.240385 6.26654C0.125 6.14367 0 5.98299 0 5.81285C0 5.5293 0.298077 5.41588 0.538462 5.37807L5.36539 4.68809L7.52885 0.387524C7.61539 0.207939 7.77885 0 8 0C8.22115 0 8.38462 0.207939 8.47115 0.387524L10.6346 4.68809L15.4615 5.37807C15.6923 5.41588 16 5.5293 16 5.81285Z"
                            ></path>
                          </svg>
                        </span>{" "}
                        4.9
                      </div>
                    </li>
                    <li className="d-flex justify-content-between mt-2">
                      <div>Recommend to a friend</div>
                      <div className="stars">
                        <span
                          className="orca-star"
                          style={{ width: "15px", height: "15px" }}
                          aria-hidden="true"
                        >
                          <svg
                            fill="#ffb33e"
                            width="16"
                            height="15"
                            viewBox="0 0 16 15"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M16 5.81285C16 5.98299 15.875 6.14367 15.75 6.26654L12.2596 9.61248L13.0865 14.3384C13.0962 14.4045 13.0962 14.4612 13.0962 14.5274C13.0962 14.7732 12.9808 15 12.7019 15C12.5673 15 12.4327 14.9527 12.3173 14.8866L8 12.656L3.68269 14.8866C3.55769 14.9527 3.43269 15 3.29808 15C3.01923 15 2.89423 14.7732 2.89423 14.5274C2.89423 14.4612 2.90385 14.4045 2.91346 14.3384L3.74038 9.61248L0.240385 6.26654C0.125 6.14367 0 5.98299 0 5.81285C0 5.5293 0.298077 5.41588 0.538462 5.37807L5.36539 4.68809L7.52885 0.387524C7.61539 0.207939 7.77885 0 8 0C8.22115 0 8.38462 0.207939 8.47115 0.387524L10.6346 4.68809L15.4615 5.37807C15.6923 5.41588 16 5.5293 16 5.81285Z"
                            ></path>
                          </svg>
                        </span>{" "}
                        4.9
                      </div>
                    </li>
                    <li className="d-flex justify-content-between mt-2">
                      <div>Service as described</div>
                      <div className="stars">
                        <span
                          className="orca-star"
                          style={{ width: "15px", height: "15px" }}
                          aria-hidden="true"
                        >
                          <svg
                            fill="#ffb33e"
                            width="16"
                            height="15"
                            viewBox="0 0 16 15"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M16 5.81285C16 5.98299 15.875 6.14367 15.75 6.26654L12.2596 9.61248L13.0865 14.3384C13.0962 14.4045 13.0962 14.4612 13.0962 14.5274C13.0962 14.7732 12.9808 15 12.7019 15C12.5673 15 12.4327 14.9527 12.3173 14.8866L8 12.656L3.68269 14.8866C3.55769 14.9527 3.43269 15 3.29808 15C3.01923 15 2.89423 14.7732 2.89423 14.5274C2.89423 14.4612 2.90385 14.4045 2.91346 14.3384L3.74038 9.61248L0.240385 6.26654C0.125 6.14367 0 5.98299 0 5.81285C0 5.5293 0.298077 5.41588 0.538462 5.37807L5.36539 4.68809L7.52885 0.387524C7.61539 0.207939 7.77885 0 8 0C8.22115 0 8.38462 0.207939 8.47115 0.387524L10.6346 4.68809L15.4615 5.37807C15.6923 5.41588 16 5.5293 16 5.81285Z"
                            ></path>
                          </svg>
                        </span>{" "}
                        4.9
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="filters-wrapper mt-4">
                <h6>Filters</h6>
                <div className="filters-list">
                  <span className="search-box-filter-wrapper">
                    <form
                      className="search-box-filter flex m-b-16"
                      data-impression-collected="true"
                    >
                      <div className="_BnrkUp ysGvFVg search-input">
                        <div className="d-flex">
                          <input
                            type="search"
                            className="searchTerm"
                            placeholder="Search reviews"
                            value=""
                          />
                          <button
                            className="search-icon"
                            style={{
                              width: "16px",
                              height: "16px",
                              fill: "white",
                            }}
                          >
                            <svg
                              className="search-icon-svg"
                              width="16"
                              height="16"
                              viewBox="0 0 16 16"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M15.8906 14.6531L12.0969 10.8594C12.025 10.7875 11.9313 10.75 11.8313 10.75H11.4187C12.4031 9.60938 13 8.125 13 6.5C13 2.90937 10.0906 0 6.5 0C2.90937 0 0 2.90937 0 6.5C0 10.0906 2.90937 13 6.5 13C8.125 13 9.60938 12.4031 10.75 11.4187V11.8313C10.75 11.9313 10.7906 12.025 10.8594 12.0969L14.6531 15.8906C14.8 16.0375 15.0375 16.0375 15.1844 15.8906L15.8906 15.1844C16.0375 15.0375 16.0375 14.8 15.8906 14.6531ZM6.5 11.5C3.7375 11.5 1.5 9.2625 1.5 6.5C1.5 3.7375 3.7375 1.5 6.5 1.5C9.2625 1.5 11.5 3.7375 11.5 6.5C11.5 9.2625 9.2625 11.5 6.5 11.5Z"></path>
                            </svg>
                          </button>
                        </div>
                      </div>
                    </form>
                  </span>
                </div>
              </div>
              <div className="review-wrapper">
                <ul style={{ listStyle: "none" }}>{renderComment()}</ul>
              </div>
            </section>
          </div>
        </div>
      </div>
      <hr />
      <Footer/>
    </div>
  );
}
