import s from "./BenefitsComponent.module.css";
import { useTranslation } from "react-i18next";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import benefotsAnimation from "@/styles/animation/benefitsAnimation";
const BenefitsComponent = () => {
  const { t } = useTranslation();
  const benefitsTrigger = useRef<HTMLDivElement | null>(null);
  const benefitsTitle = useRef<HTMLDivElement | null>(null);
  const benefitsList = useRef<HTMLUListElement | null>(null);
  const benefitsSVG1 = useRef<SVGSVGElement | null>(null);
  const benefitsSVG2 = useRef<SVGSVGElement | null>(null);
  const benefitsSVG3 = useRef<SVGSVGElement | null>(null);
  const benefitsSVG4 = useRef<SVGSVGElement | null>(null);

  useGSAP(() => {
    if (
      !benefitsTitle.current ||
      !benefitsList.current ||
      !benefitsSVG1.current ||
      !benefitsSVG2.current ||
      !benefitsSVG3.current ||
      !benefitsSVG4.current
    )
      return;
    benefotsAnimation(
      benefitsTitle.current,
      benefitsList.current,
      benefitsSVG1.current,
      benefitsSVG2.current,
      benefitsSVG3.current,
      benefitsSVG4.current,
      benefitsTrigger.current as HTMLElement
    );
  });
  return (
    <div className="container">
      <div ref={benefitsTrigger} className={s.benefitsWrapper}>
        <h2 ref={benefitsTitle} className={s.benefitsTitle}>
          {t("Benefits.title")}
        </h2>
        <ul ref={benefitsList} className={s.benefitsList}>
          <li className={s.benefitItem}>
            <svg
              ref={benefitsSVG1}
              className={s.benefitIcon}
              width="150"
              height="150"
            >
              <use href="svg\symbol-defs.svg#benefitOne"></use>
            </svg>
            <div className={s.benefitTextWrapper}>
              <h2 className={s.benefitItemTitle}>
                {t("Benefits.benefitsList.expiriance.title")}
              </h2>
              <p className={s.benefitText}>
                {t("Benefits.benefitsList.expiriance.text")}
              </p>
            </div>
          </li>
          <li className={s.benefitItem}>
            <svg
              ref={benefitsSVG2}
              className={s.benefitIcon}
              width="150"
              height="150"
            >
              <use href="svg\symbol-defs.svg#BenefitTwo"></use>
            </svg>
            <div className={s.benefitTextWrapper}>
              <h2 className={s.benefitItemTitle}>
                {t("Benefits.benefitsList.efects.title")}
              </h2>
              <p className={s.benefitText}>
                {t("Benefits.benefitsList.efects.text")}
              </p>
            </div>
          </li>
          <li className={s.benefitItem}>
            <svg
              ref={benefitsSVG3}
              className={s.benefitIcon}
              width="150"
              height="150"
            >
              <use href="svg\symbol-defs.svg#BenefitTree"></use>
            </svg>
            <div className={s.benefitTextWrapper}>
              <h2 className={s.benefitItemTitle}>
                {t("Benefits.benefitsList.approach.title")}
              </h2>
              <p className={s.benefitText}>
                {t("Benefits.benefitsList.approach.text")}
              </p>
            </div>
          </li>
          <li className={s.benefitItem}>
            <svg
              ref={benefitsSVG4}
              className={s.benefitIcon}
              width="150"
              height="150"
            >
              <use href="svg\symbol-defs.svg#BenefitFour"></use>
            </svg>
            <div className={s.benefitTextWrapper}>
              <h2 className={s.benefitItemTitle}>
                {t("Benefits.benefitsList.support.title")}
              </h2>
              <p className={s.benefitText}>
                {t("Benefits.benefitsList.support.text")}
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BenefitsComponent;
