"use client"
import { useMediaQuery } from "react-responsive";
import s from "./AboutUsComponent.module.css";

import { useTranslation } from "react-i18next";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import aboutAnimation from "@/styles/animation/aboutAnimation";
import HeroTemList from "../HeroSection/components/HeroTemList/HeroTemList";

const AboutUsComponent: React.FC = () => {
  const teamVisible = useMediaQuery({ maxWidth: 768 });
  const { t } = useTranslation();
  const aboutTitleAnimation = useRef<HTMLDivElement | null>(null);
  const aboutTextAnimation = useRef<HTMLDivElement | null>(null);
  const aboutTextAnimationTwo = useRef<HTMLDivElement | null>(null);
  const aboutLogoAnimation = useRef<SVGSVGElement | null>(null);
  const aboutTrigger = useRef<HTMLDivElement | null>(null);
useGSAP(() => {
  if (
    !aboutTitleAnimation.current ||
    !aboutTextAnimation.current ||
    !aboutTextAnimationTwo.current ||
    !aboutLogoAnimation.current ||
    !aboutTrigger.current
  ) {
    return;
  }

  aboutAnimation(
    aboutTitleAnimation.current as HTMLElement,
    aboutTextAnimation.current as HTMLElement,
    aboutTextAnimationTwo.current as HTMLElement,
    aboutLogoAnimation.current as SVGSVGElement,
    aboutTrigger.current as HTMLElement
  );
});

  return (
    <div ref={aboutTrigger} className={s.aboutUs} id="about">
      <div className="container">
        <h2 ref={aboutTitleAnimation} className={s.aboutUsTitle}>{t("aboutUs.title")}</h2>

        <div className={s.aboutUsWrapper}>
          <div>
            <p ref={aboutTextAnimation} className={s.aboutUsText}>{t("aboutUs.textOne")}</p>
          </div>
          <svg ref={aboutLogoAnimation} className={s.aboutLogo}>
            <use href="/svg/symbol-defs.svg#LSLogo"></use>
          </svg>

          <div>
            <p ref={aboutTextAnimationTwo} className={s.aboutUsText}>{t("aboutUs.textTwo")}</p>
          </div>
        </div>
        {teamVisible && <HeroTemList />}
      </div>
    </div>
  );
};

export default AboutUsComponent;
