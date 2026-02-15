import { useTranslation } from "react-i18next";
import s from "./OfersListComponent.module.css";
import OferComponent from "../OferComponent/OferComponent";
import { Swiper, SwiperSlide } from "swiper/react";
import {Keyboard, Navigation, Pagination, Autoplay  } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useMediaQuery } from "react-responsive";
import clsx from "clsx";
import { useRef } from "react";
import SwiperNavigationComponent from "../SwiperNavigationComponent/SwiperNavigationComponent";




const OfersListComponent = () => {
  const { t } = useTranslation();
  const PCsize: boolean = useMediaQuery({ minWidth: 768 });
  const ofers = t("ofers", { returnObjects: true });

  // створюємо ref для кастомної пагінації
  const paginationRef = useRef<HTMLDivElement | null>(null);

  return (
 
      <Swiper
        modules={[Keyboard, Navigation, Pagination, Autoplay]}
        className={s.oferSwiper}
        pagination={{
          // eslint-disable-next-line react-hooks/refs
          el: paginationRef.current,
          clickable: true,
        }}
       onBeforeInit={(swiper) => {
  // важливо: тут ми "прив’язуємо" pagination до рефа
  // бо на момент першого рендеру paginationRef.current ще null
  if (swiper.params.pagination && typeof swiper.params.pagination !== "boolean") {
    swiper.params.pagination.el = paginationRef.current;
  }
}}

        centeredSlides={false}
        slidesPerView="auto"
        initialSlide={0}
        loop={true}
        autoplay={{
        delay: 8000,        // час затримки між слайдами (мс)
        disableOnInteraction: false, // не зупиняти після взаємодії
      }}
        keyboard={{
          enabled: true,
        }}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 15,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 23,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 30,
            
          },
        }}
      >
        {Object.entries(ofers).map(([key, value], idx) => (
          <SwiperSlide key={key+idx} >
            {({ isActive }) => (
              <div
                className={clsx(
                  s.oferSlide,
                  isActive && PCsize && s.oferSlideActive
                )}
              >
                <OferComponent
                  isActive={isActive}
                  size={PCsize}
                  page={value}
                />
              </div>
            )}
          </SwiperSlide>
        ))
        
        }

       <div className={s.navWrapper}>
  <SwiperNavigationComponent type="prev" />

  <div ref={paginationRef} className={s.customPagination}></div>

  <SwiperNavigationComponent type="next" />
</div>
      </Swiper>
 
  );
};

export default OfersListComponent;
