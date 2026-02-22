import PortfolioComponent from "@/components/sections/PortfolioSection/components/PortfolioComponent";
import s from "./PortfolioSectionCompopnent.module.css";
import portfolioDB from "@/data/portfolioDB";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { useTranslation } from "react-i18next";
import { EffectCoverflow, Pagination, Keyboard } from "swiper/modules";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import portfolioAnimation from "@/styles/animation/portfolioAnimation";
import SwiperNavigationComponent from "../OferSection/components/SwiperNavigationComponent/SwiperNavigationComponent";

const PortfolioSectionCompopnent: React.FC = () => {
  const paginationPortfolioRef = useRef<HTMLDivElement | null>(null);
  const { t } = useTranslation();
  const portfolioTrigger = useRef<HTMLDivElement | null>(null);
  const portfolioTitle = useRef<HTMLDivElement | null>(null);
  const portfolioList = useRef<HTMLDivElement | null>(null);
  useGSAP(() => {
    if (!portfolioTitle.current || !portfolioList.current) return;

    portfolioAnimation(
      portfolioTitle.current,
      portfolioList.current,
      portfolioTrigger.current as HTMLElement
    );
  });

  return (
    <div ref={portfolioTrigger} className={s.portfolioSection}>
      <div className="container" id="ourWorks">
        <h2 ref={portfolioTitle} className={s.portfolioTitle}>
          {t("Portfolio.portfolio")}
        </h2>
      </div>
      <div ref={portfolioList}>
        <Swiper
          className={s.portfolioSlider}
          modules={[EffectCoverflow, Pagination, Keyboard]}
          spaceBetween={35}
          centeredSlides={true}
          effect="coverflow"
          grabCursor={true}
          loop={true}
          slidesPerView="auto"
          watchSlidesProgress={true}
          keyboard={{
            enabled: true,
          }}
          pagination={{
            el: `.${s.customPaginationProjects}`,
            clickable: true,
          }}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
        >
          {portfolioDB.map((item, idx) => (
            <SwiperSlide key={idx} className={s.slide}>
              <PortfolioComponent webPage={item} />
            </SwiperSlide>
          ))}
          <div className={s.navWrapper}>
            <SwiperNavigationComponent type="prev" />

            <div
              ref={paginationPortfolioRef}
              className={s.customPaginationProjects}
            ></div>

            <SwiperNavigationComponent type="next" />
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default PortfolioSectionCompopnent;
