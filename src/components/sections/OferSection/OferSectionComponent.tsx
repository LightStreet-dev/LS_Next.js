import ContactButton from "@/components/ui/ContactButton/ContactButton";
import s from "./OferSectionComponent.module.css";
import OfersListComponent from "@/components/sections/OferSection/components/OfersListComponent/OfersListComponent";
import { useTranslation } from "react-i18next";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import OfferAnimation from "@/styles/animation/oferAnimation";

interface modalProps {
  toggleForm: (setter: React.Dispatch<React.SetStateAction<boolean>>) => void;
  setOpenForm: React.Dispatch<React.SetStateAction<boolean>>;
}
const OferSectionComponent: React.FC<modalProps> = ({
  toggleForm,
  setOpenForm,
}) => {
  const { t } = useTranslation();
  const offerTitle = useRef<HTMLDivElement | null>(null);
  const offerText = useRef<HTMLDivElement | null>(null);
  const offerBtn = useRef<HTMLDivElement | null>(null);
  const offerSlide = useRef<HTMLDivElement | null>(null);
  const offerTrigger = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    if (
      !offerTitle.current ||
      !offerText.current ||
      !offerBtn.current ||
      !offerSlide.current
    )
      return;
    OfferAnimation(
      offerTitle.current,
      offerText.current,
      offerBtn.current,
      offerSlide.current,
      offerTrigger.current as HTMLElement
    );
  });
  return (
    <div
      className={`container ${s.oferContainer}`}
      ref={offerTrigger}
      id="services"
    >
      <div>
        <div>
          <h2 ref={offerTitle} className={s.oferTitle}>
            {t("oferSection.title")}
          </h2>
          <p ref={offerText} className={s.oferText}>
            {t("oferSection.text")}
          </p>
        </div>
        <div ref={offerBtn} className={s.oferBtnWrap}>
          <ContactButton
            className={s.oferButton}
            toggleForm={toggleForm}
            setOpenForm={setOpenForm}
          />
        </div>
      </div>
      <div ref={offerSlide}>
        <OfersListComponent />
      </div>
    </div>
  );
};

export default OferSectionComponent;
