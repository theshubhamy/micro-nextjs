import { A11y, Autoplay } from "swiper";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import Category from "./categories";
import c from "./category.module.css";
import { useTranslation } from "react-i18next";

const breakpointNewArrival = {
  320: {
    slidesPerView: 2,
  },
  480: {
    slidesPerView: 3,
  },
  600: {
    slidesPerView: 4,
  },
  991: {
    slidesPerView: 5,
  },
  1200: {
    slidesPerView: 7,
  },
};

function CategoryList(props) {
  const { t } = useTranslation();

  if (!props.categoryList || !props.categoryList.length) {
    return null;
  }
  // console.log("props.categoryList",props.categoryList);
  return (
    <div className="content_container">
      <div className="custom_container">
        <h2 className="content_heading">{t("top_categories")}</h2>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 d-flex">
              {props.categoryList &&
                props.categoryList.map((category, index) => (
                  // <SwiperSlide key={category._id}>
                  /* </SwiperSlide> */
                  <>
                    <div
                      className="col-lg-3"
                      key={category._id}
                    >
                      <a
                        href="#"
                        className=""
                      >
                        <div className="category-card-div">
                          <div className="category-imgs-div">
                            <img
                              src={category.icon[0]?.url}
                              alt={category.name}
                              className="category-imgs"
                            />
                          </div>
                          <div className="category-name-div">
                            <p className="category-name">{category.name}</p>
                          </div>
                        </div>
                      </a>
                    </div>
                    {/* <Category
                    name={category.name}
                    slug={category.slug}
                    img={category.icon[0]?.url}
                  /> */}
                  </>
                ))}
            </div>
          </div>
          {/* <Swiper
            modules={[A11y, Autoplay]}
            spaceBetween={0}
            slidesPerView="auto"
            breakpoints={breakpointNewArrival}
            className={`_feature_slider ${c.root_container}`}
            autoplay={{
              delay: 6000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
              waitForTransition: true,
            }}
            loop={false}
            centeredSlides={false}
            centerInsufficientSlides={true}
            speed={900}
          > */}

          {/* </Swiper> */}
        </div>
      </div>
    </div>
  );
}

export default CategoryList;
