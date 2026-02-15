import s from "./HeroTitle.module.css";
import { useTranslation } from "react-i18next";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { heroTitleAnimation } from "@/styles/animation/heroAnimation";
const HeroTitle: React.FC = () => {
  const { t } = useTranslation();

  const word1 = t("hero.heroTitle1");
  const word2 = t("hero.heroTitle2");
  const word3 = t("hero.heroTitle3");

  const w1 = useRef<HTMLDivElement | null>(null);
  const w2 = useRef<HTMLDivElement | null>(null);
  const w3 = useRef<HTMLDivElement | null>(null);
  const titleText = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    if (!w1.current || !w2.current || !w3.current || !titleText.current) return;
    heroTitleAnimation(w1.current, w2.current, w3.current, titleText.current);
  });

  return (
    <div className={s.heroTitleContainer}>
      <h1 className={s.heroTitle}>
        {/* Перше слово з першою літерою на фоні */}
        <span
          ref={w1}
          className={s.heroTitleContent1}
          data-first-letter={word1.charAt(0)}
        >
          {word1}
        </span>

        {/* Друге слово */}

        <span
          ref={w2}
          className={s.heroTitleContent2}
          data-first-letter={word2.charAt(0)}
        >
          {word2}
        </span>

        {/* Третє слово з першою літерою на фоні */}
        <span
          ref={w3}
          className={s.heroTitleContent3}
          data-first-letter={word3.charAt(0)}
        >
          {word3}
        </span>
      </h1>

      <p className={s.heroText} ref={titleText}>
        {t("hero.heroText")}
      </p>
    </div>
  );
};

export default HeroTitle;
