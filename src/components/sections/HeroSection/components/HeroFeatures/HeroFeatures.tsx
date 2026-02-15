import s from "./HeroFeatures.module.css";
import { useTranslation } from "react-i18next";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { featuresAnimation } from "@/styles/animation/heroAnimation";
import Image from "next/image";

const HeroFeatures: React.FC = () => {
  const { t } = useTranslation();
  const featuresAnim = useRef<HTMLUListElement | null>(null);
  useGSAP(()=>{
    if (!featuresAnim.current) return;
    featuresAnimation(featuresAnim.current);
  }, )
  return (
    <ul className={s.featuresList} ref={featuresAnim}>
      <li className={s.featurIteam}>
        <div className={s.ratingWraper}>
          <p className={s.featurCount}>4.8</p>
          <Image src="/svg/icon_star.svg" alt="star" className={s.ratingIcon}  width={300} 
  height={300}  />
        </div>
        <p className={s.rating}>{t("hero.features.rating.rating")}</p>
        <p className={s.featurtext}>{t("hero.features.rating.text")}</p>
      </li>
      <li className={s.featurIteam}>
        <p className={s.featurCount}>50 +</p>
       
        <p className={s.featurtext}>{t("hero.features.pages")}</p>
      </li>
      <li className={s.featurIteam}>
        <p className={s.featurCount}>99%</p>
     
        <p className={s.featurtext}>{t("hero.features.clients")}</p>
      </li>
    </ul>
  );
};

export default HeroFeatures;
  