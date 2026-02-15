import { useMediaQuery } from "react-responsive";
import NavLinks from "@/components/layout/Header/components/NavLins/NavLinks";
import SocialIcons from "@/components/ui/SocialIcons/SocialIcons";
import s from "./Footer.module.css";
import { useTranslation } from "react-i18next";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import footerAnimation from "@/styles/animation/footerAnimation";

interface PrivatModalProps {
  toggleModal: (setter: React.Dispatch<React.SetStateAction<boolean>>) => void;
  setOpenLink: React.Dispatch<React.SetStateAction<boolean>>;
}
const FooterComponent: React.FC<PrivatModalProps> = ({
  toggleModal,
  setOpenLink,
}) => {
  const { t } = useTranslation();
  const mobSize = useMediaQuery({ maxWidth: 768 });
  const footerTrigger = useRef<HTMLDivElement | null>(null);
  const footerNav = useRef<HTMLDivElement | null>(null);
  const footerSoc = useRef<HTMLDivElement | null>(null);
  const footerinfo = useRef<HTMLDivElement | null>(null);
  const footerTitle = useRef<HTMLDivElement | null>(null);
  const footerSpan = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    if (
      !footerNav.current ||
      !footerSoc.current ||
      !footerinfo.current ||
      !footerTitle.current ||
      !footerSpan.current
    )
      return;

    footerAnimation(
      footerNav.current,
      footerSoc.current,
      footerTitle.current,
      footerSpan.current,
      footerinfo.current,
      footerTrigger.current as HTMLDivElement,
     
    );
  });

  return (
    <section ref={footerTrigger} className={s.footerSection}>
      <div className="container">
        <div  className={s.footerWrapper}>
          <div className={s.footerNavWrap}>
            <div ref={footerNav}>
              <NavLinks footerNavigation={s.footerNav} />
            </div>
            {mobSize ? null : (
              <div ref={footerSoc}>
                <SocialIcons
                  footerStyle={s.footerSocIcon}
                  footerStyleList={s.footerStyleList}
                />
              </div>
            )}
          </div>

          <h2 ref={footerTitle} className={s.footerText}>
            {t("footer.title1")} <br />
            <span ref={footerSpan} className={s.markText}>
              {t("footer.title2")}
            </span>{" "}
            <br /> {t("footer.title3")}
          </h2>
          <div className={s.footerSocWrap}>
            {mobSize && (
              <div ref={footerSoc}>
              <SocialIcons
                footerStyle={s.footerSocIcon}
                footerStyleList={s.footerStyleList}
              />
              </div>
            )}
          </div>
          <div ref={footerinfo} className={s.footerInfo}>
            <p className={s.ownerInfo}> {t("footer.ownerInfo")}</p>
            <div className={s.righsWrapper}>
              <p className={s.rulesInfo}>{t("footer.privatePolice")}</p>
              <button
                className={s.privatePolice}
                onClick={() => toggleModal(setOpenLink)}
              >
                {t("footer.link")}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterComponent;
