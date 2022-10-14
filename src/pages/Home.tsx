import React, { useRef } from "react";
import { Carousel } from "react-bootstrap";
import Slider from "../components/Slider";
import ReactCarousel from "../components/ReactCarousel";
import VideoModal from "../components/VideoModal";
import SlickCarousel from "../components/SlickCarousel";
import { useDispatch, useSelector } from "react-redux";
import { Appdispatch, RootState } from "../redux/configStore";
import { getJobApi } from "../redux/reducers/findJobReducer";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";



type Props = {};

export default function Home({}: Props) {
  let keyWordRef = useRef("")
  const dispatch:Appdispatch = useDispatch();
  const navigate = useNavigate();
  const handleChange = (e:any)=>{
    keyWordRef.current = e.target.value;
  }
  const handleSubmit = (e:any)=>{
    e.preventDefault();
    dispatch(getJobApi(keyWordRef.current))
    navigate('/danhsachcongviec');
  }
  return (
    <div>
      <div className="header container container-sm-fluid">
        <div className="row justify-content-between">
          <div className="mt-4 col-6 logo">
            <a href="/">
              <svg
                width="89"
                height="27"
                viewBox="0 0 89 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g fill="white">
                  <path d="m81.6 13.1h-3.1c-2 0-3.1 1.5-3.1 4.1v9.3h-6v-13.4h-2.5c-2 0-3.1 1.5-3.1 4.1v9.3h-6v-18.4h6v2.8c1-2.2 2.3-2.8 4.3-2.8h7.3v2.8c1-2.2 2.3-2.8 4.3-2.8h2zm-25.2 5.6h-12.4c.3 2.1 1.6 3.2 3.7 3.2 1.6 0 2.7-.7 3.1-1.8l5.3 1.5c-1.3 3.2-4.5 5.1-8.4 5.1-6.5 0-9.5-5.1-9.5-9.5 0-4.3 2.6-9.4 9.1-9.4 6.9 0 9.2 5.2 9.2 9.1 0 .9 0 1.4-.1 1.8zm-5.7-3.5c-.1-1.6-1.3-3-3.3-3-1.9 0-3 .8-3.4 3zm-22.9 11.3h5.2l6.6-18.3h-6l-3.2 10.7-3.2-10.8h-6zm-24.4 0h5.9v-13.4h5.7v13.4h5.9v-18.4h-11.6v-1.1c0-1.2.9-2 2.2-2h3.5v-5h-4.4c-4.3 0-7.2 2.7-7.2 6.6v1.5h-3.4v5h3.4z"></path>
                </g>
                <g fill="#1dbf73">
                  <path d="m85.3 27c2 0 3.7-1.7 3.7-3.7s-1.7-3.7-3.7-3.7-3.7 1.7-3.7 3.7 1.7 3.7 3.7 3.7z"></path>
                </g>
              </svg>
            </a>
          </div>
          <div className="mt-4 col-6 ">
            <div className="d-flex justify-content-end align-items-center">
              <a className="text-a hide-text" href="#">
                Become a Seller
              </a>
              <a className="text-a" href="signin">
                Sign In
              </a>
              <a className="text-a " href="signup">
                <button className="btn-join">Join</button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <section className="carousel-slider">
        <Slider />
      </section>
      <section className="container slider-content">
        <div className="text-area">
          <span className="slider-text">Find the perfect freelance</span> <br />
          <span className="slider-text">services for your business</span>
        </div>
        <form className="search-form">
          <div
            className="search-bar-icon"
            aria-hidden="true"
            style={{ width: "16px", height: "16px" }}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M15.8906 14.6531L12.0969 10.8594C12.025 10.7875 11.9313 10.75 11.8313 10.75H11.4187C12.4031 9.60938 13 8.125 13 6.5C13 2.90937 10.0906 0 6.5 0C2.90937 0 0 2.90937 0 6.5C0 10.0906 2.90937 13 6.5 13C8.125 13 9.60938 12.4031 10.75 11.4187V11.8313C10.75 11.9313 10.7906 12.025 10.8594 12.0969L14.6531 15.8906C14.8 16.0375 15.0375 16.0375 15.1844 15.8906L15.8906 15.1844C16.0375 15.0375 16.0375 14.8 15.8906 14.6531ZM6.5 11.5C3.7375 11.5 1.5 9.2625 1.5 6.5C1.5 3.7375 3.7375 1.5 6.5 1.5C9.2625 1.5 11.5 3.7375 11.5 6.5C11.5 9.2625 9.2625 11.5 6.5 11.5Z"></path>
            </svg>
          </div>
          <div className="row fix-m">
            <input
              onChange={handleChange}
              className="search-input col-12 col-lg-4 col-md-8"
              type="search"
              placeholder='       Try "building mobile app"'
            ></input>
            <button className="submit-button col-12 col-lg-1 col-md-2" onClick={handleSubmit}>
              Search
            </button>
          </div>
        </form>
      </section>

      <section className="trusted-by container">
        <div className="trusted-by-wrapper d-flex justify-content-center align-items-baseline">
          <span className="trusted-by-text">Trusted by:</span>
          <ul className="d-flex trusted-by-logo align-items-center">
            <li className="mx-3">
              <img
                className="height-3 w-100"
                src="../assets/img/fb.png"
                alt="fb"
              />
            </li>
            <li className="mx-3">
              <img
                className="height-3 w-100"
                src="../assets/img/google.png"
                alt="google"
              />
            </li>
            <li className="mx-3">
              <img
                className="w-100"
                src="../assets/img/netflix.png"
                alt="netflix"
              />
            </li>
            <li className="mx-3">
              <img src="../assets/img/pg.png" alt="pg" />
            </li>
            <li>
              <img
                className="height-3 w-100 paypal"
                src="../assets/img/paypal.png"
                alt="paypal"
              />
            </li>
          </ul>
        </div>
      </section>
      <section className="subcategory-carousel">
        <div className="container">
          <h2>Popular professional services</h2>
          <div className="slider-package">
            <ReactCarousel />
          </div>
        </div>
      </section>
      <section className="selling-proposition-wrapper">
        <div className="selling-proposition container">
          <div className="row align-items-center">
            <div className="selling-text col-12 col-md-12 col-lg-5 col-xl-5">
              <h2>A whole world of freelance talent at your fingertips</h2>
              <ul className="ul-selling">
                <li>
                  <h6>
                    <span
                      className="check-icon"
                      aria-hidden="true"
                      style={{
                        width: "24px",
                        height: "24px",
                        fill: "rgb(122, 125, 133)",
                      }}
                    >
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 16 16"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M8 1.75C4.54822 1.75 1.75 4.54822 1.75 8C1.75 11.4518 4.54822 14.25 8 14.25C11.4518 14.25 14.25 11.4518 14.25 8C14.25 4.54822 11.4518 1.75 8 1.75ZM0.25 8C0.25 3.71979 3.71979 0.25 8 0.25C12.2802 0.25 15.75 3.71979 15.75 8C15.75 12.2802 12.2802 15.75 8 15.75C3.71979 15.75 0.25 12.2802 0.25 8Z"></path>
                        <path d="M11.5303 5.46967C11.8232 5.76256 11.8232 6.23744 11.5303 6.53033L7.53033 10.5303C7.23744 10.8232 6.76256 10.8232 6.46967 10.5303L4.46967 8.53033C4.17678 8.23744 4.17678 7.76256 4.46967 7.46967C4.76256 7.17678 5.23744 7.17678 5.53033 7.46967L7 8.93934L10.4697 5.46967C10.7626 5.17678 11.2374 5.17678 11.5303 5.46967Z"></path>
                      </svg>
                    </span>
                    The best for every budget
                  </h6>
                  <p>
                    Find high-quality services at every price point. No hourly
                    rates, just project-based pricing.
                  </p>
                </li>
                <li>
                  <h6>
                    <span
                      className="check-icon"
                      aria-hidden="true"
                      style={{
                        width: "24px",
                        height: "24px",
                        fill: "rgb(122, 125, 133)",
                      }}
                    >
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 16 16"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M8 1.75C4.54822 1.75 1.75 4.54822 1.75 8C1.75 11.4518 4.54822 14.25 8 14.25C11.4518 14.25 14.25 11.4518 14.25 8C14.25 4.54822 11.4518 1.75 8 1.75ZM0.25 8C0.25 3.71979 3.71979 0.25 8 0.25C12.2802 0.25 15.75 3.71979 15.75 8C15.75 12.2802 12.2802 15.75 8 15.75C3.71979 15.75 0.25 12.2802 0.25 8Z"></path>
                        <path d="M11.5303 5.46967C11.8232 5.76256 11.8232 6.23744 11.5303 6.53033L7.53033 10.5303C7.23744 10.8232 6.76256 10.8232 6.46967 10.5303L4.46967 8.53033C4.17678 8.23744 4.17678 7.76256 4.46967 7.46967C4.76256 7.17678 5.23744 7.17678 5.53033 7.46967L7 8.93934L10.4697 5.46967C10.7626 5.17678 11.2374 5.17678 11.5303 5.46967Z"></path>
                      </svg>
                    </span>
                    Quality work done quickly
                  </h6>
                  <p>
                    Find the right freelancer to begin working on your project
                    within minutes.
                  </p>
                </li>
                <li>
                  <h6>
                    <span
                      className="check-icon"
                      aria-hidden="true"
                      style={{
                        width: "24px",
                        height: "24px",
                        fill: "rgb(122, 125, 133)",
                      }}
                    >
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 16 16"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M8 1.75C4.54822 1.75 1.75 4.54822 1.75 8C1.75 11.4518 4.54822 14.25 8 14.25C11.4518 14.25 14.25 11.4518 14.25 8C14.25 4.54822 11.4518 1.75 8 1.75ZM0.25 8C0.25 3.71979 3.71979 0.25 8 0.25C12.2802 0.25 15.75 3.71979 15.75 8C15.75 12.2802 12.2802 15.75 8 15.75C3.71979 15.75 0.25 12.2802 0.25 8Z"></path>
                        <path d="M11.5303 5.46967C11.8232 5.76256 11.8232 6.23744 11.5303 6.53033L7.53033 10.5303C7.23744 10.8232 6.76256 10.8232 6.46967 10.5303L4.46967 8.53033C4.17678 8.23744 4.17678 7.76256 4.46967 7.46967C4.76256 7.17678 5.23744 7.17678 5.53033 7.46967L7 8.93934L10.4697 5.46967C10.7626 5.17678 11.2374 5.17678 11.5303 5.46967Z"></path>
                      </svg>
                    </span>
                    Protected payments, every time
                  </h6>
                  <p>
                    Always know what you'll pay upfront. Your payment isn't
                    released until you approve the work.
                  </p>
                </li>
                <li>
                  <h6>
                    <span
                      className="check-icon"
                      aria-hidden="true"
                      style={{
                        width: "24px",
                        height: "24px",
                        fill: "rgb(122, 125, 133)",
                      }}
                    >
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 16 16"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M8 1.75C4.54822 1.75 1.75 4.54822 1.75 8C1.75 11.4518 4.54822 14.25 8 14.25C11.4518 14.25 14.25 11.4518 14.25 8C14.25 4.54822 11.4518 1.75 8 1.75ZM0.25 8C0.25 3.71979 3.71979 0.25 8 0.25C12.2802 0.25 15.75 3.71979 15.75 8C15.75 12.2802 12.2802 15.75 8 15.75C3.71979 15.75 0.25 12.2802 0.25 8Z"></path>
                        <path d="M11.5303 5.46967C11.8232 5.76256 11.8232 6.23744 11.5303 6.53033L7.53033 10.5303C7.23744 10.8232 6.76256 10.8232 6.46967 10.5303L4.46967 8.53033C4.17678 8.23744 4.17678 7.76256 4.46967 7.46967C4.76256 7.17678 5.23744 7.17678 5.53033 7.46967L7 8.93934L10.4697 5.46967C10.7626 5.17678 11.2374 5.17678 11.5303 5.46967Z"></path>
                      </svg>
                    </span>
                    24/7 support
                  </h6>
                  <p>
                    Questions? Our round-the-clock support team is available to
                    help anytime, anywhere.
                  </p>
                </li>
              </ul>
            </div>
            <div className="selling-video col-12 col-md-12 col-lg-7 col-xl-7">
              <VideoModal />
            </div>
          </div>
        </div>
      </section>
      <section className="testimonial">
        <SlickCarousel />
      </section>
      <section className="main-categories container">
        <h2 className="margin">Explore the marketplace</h2>
        <ul className="row justify-content-center">
          <li className="col-6 col-sm-6 col-md-4 col-lg-3 col-xl-2 mt-5 text-center">
            <a href="/categories/graphics-design?source=hplo_cat_sec&amp;pos=1">
              <img
                className="main-categories-img"
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/graphics-design.d32a2f8.svg"
                alt="Graphics &amp; Design"
                loading="lazy"
              />
              Graphics &amp; Design
            </a>
          </li>
          <li className="col-6 col-sm-6 col-md-4 col-lg-3 col-xl-2 mt-5 text-center">
            <a href="/categories/graphics-design?source=hplo_cat_sec&amp;pos=1">
              <img
                className="main-categories-img"
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/online-marketing.74e221b.svg"
                alt="Graphics &amp; Design"
                loading="lazy"
              />
              Graphics &amp; Design
            </a>
          </li>
          <li className="col-6 col-sm-6 col-md-4 col-lg-3 col-xl-2 mt-5 text-center">
            <a href="/categories/graphics-design?source=hplo_cat_sec&amp;pos=1">
              <img
                className="main-categories-img"
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/writing-translation.32ebe2e.svg"
                alt="Graphics &amp; Design"
                loading="lazy"
              />
              Graphics &amp; Design
            </a>
          </li>
          <li className="col-6 col-sm-6 col-md-4 col-lg-3 col-xl-2 mt-5 text-center">
            <a href="/categories/graphics-design?source=hplo_cat_sec&amp;pos=1">
              <img
                className="main-categories-img"
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/video-animation.f0d9d71.svg"
                alt="Graphics &amp; Design"
                loading="lazy"
              />
              Graphics &amp; Design
            </a>
          </li>
          <li className="col-6 col-sm-6 col-md-4 col-lg-3 col-xl-2 mt-5 text-center">
            <a href="/categories/graphics-design?source=hplo_cat_sec&amp;pos=1">
              <img
                className="main-categories-img"
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/music-audio.320af20.svg"
                alt="Graphics &amp; Design"
                loading="lazy"
              />
              Graphics &amp; Design
            </a>
          </li>
          <li className="col-6 col-sm-6 col-md-4 col-lg-3 col-xl-2 mt-5 text-center">
            <a href="/categories/graphics-design?source=hplo_cat_sec&amp;pos=1">
              <img
                className="main-categories-img"
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/programming.9362366.svg"
                alt="Graphics &amp; Design"
                loading="lazy"
              />
              Graphics &amp; Design
            </a>
          </li>
          <li className="col-6 col-sm-6 col-md-4 col-lg-3 col-xl-2 mt-5 text-center">
            <a href="/categories/graphics-design?source=hplo_cat_sec&amp;pos=1">
              <img
                className="main-categories-img"
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/business.bbdf319.svg"
                alt="Graphics &amp; Design"
                loading="lazy"
              />
              Graphics &amp; Design
            </a>
          </li>
          <li className="col-6 col-sm-6 col-md-4 col-lg-3 col-xl-2 mt-5 text-center">
            <a href="/categories/graphics-design?source=hplo_cat_sec&amp;pos=1">
              <img
                className="main-categories-img"
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/lifestyle.745b575.svg"
                alt="Graphics &amp; Design"
                loading="lazy"
              />
              Graphics &amp; Design
            </a>
          </li>
          <li className="col-6 col-sm-6 col-md-4 col-lg-3 col-xl-2 mt-5 text-center">
            <a href="/categories/graphics-design?source=hplo_cat_sec&amp;pos=1">
              <img
                className="main-categories-img"
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/data.718910f.svg"
                alt="Graphics &amp; Design"
                loading="lazy"
              />
              Graphics &amp; Design
            </a>
          </li>
        </ul>
      </section>
      <hr />
      <Footer/>
    </div>
  );
}
