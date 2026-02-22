import s from "./ContactSectionComponent.module.css";
import ShortFormComponent from "@/components/sections/FormSection/components/ShortFormComponent";
import { useTranslation } from "react-i18next";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import contactAnimation from "@/styles/animation/contactAnimation";

const ContactSectionComponent = () => {
  const { t } = useTranslation();
  const contactTrigger = useRef<HTMLDivElement | null>(null);
  const contactTitle = useRef<HTMLDivElement | null>(null);
  const contactText = useRef<HTMLDivElement | null>(null);
  const contactLogo = useRef<SVGSVGElement | null>(null);
  const contactImg = useRef<HTMLImageElement | null>(null);
  const contactForm = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    if (
      !contactTitle.current ||
      !contactText.current ||
      !contactLogo.current ||
      !contactImg.current ||
      !contactForm.current
    )
      return;

    contactAnimation(
      contactTitle.current,
      contactText.current,
      contactLogo.current,
      contactImg.current,
      contactForm.current,
      contactTrigger.current as HTMLElement
    );
  });
  return (
    <div ref={contactTrigger} className={s.contactWrapper} id="contact">
      <div className="container">
        <h2 ref={contactTitle} className={s.contactTitle}>
          {t("ContactSection.title")}
        </h2>
        <p ref={contactText} className={s.contactText}>
          {t("ContactSection.text")}
        </p>
      </div>
      <svg ref={contactLogo} className={s.contactLogo}>
        <use href="/svg/symbol-defs.svg#LSLogo"></use>
      </svg>
      <Image
        ref={contactImg}
        className={s.contactGears}
        src="/svg/gears.svg"
        alt="gears"
        width={30}
        height={30}
      />
      <div ref={contactForm} className="container">
        <ShortFormComponent />
      </div>
    </div>
  );
};

export default ContactSectionComponent;
