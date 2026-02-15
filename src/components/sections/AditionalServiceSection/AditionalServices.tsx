import { useTranslation } from "react-i18next";
import s from "./AditionalServices.module.css";
import ASComponent from "@/components/sections/AditionalServiceSection/components/ASComponent";
import { useState } from "react";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import AdditionalServiceAnimation from "@/styles/animation/additionalServicesAnimation";

const AditionalServices: React.FC = () => {
  const { t } = useTranslation();
  const addittional = t("additionalServises", { returnObjects: true });
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const ASTrigger = useRef<HTMLDivElement | null>(null);
  const ASTitle = useRef<HTMLDivElement | null>(null);
  const ASList = useRef<HTMLUListElement | null>(null);

  const handleToggle = (index: number) => {
    if (index === undefined || index === null) {
      setOpenIdx(null);
      return;
    }
    setOpenIdx(openIdx === index ? null : index);
  };
  useGSAP(() => {
    if (!ASTitle.current || !ASList.current) return;
    AdditionalServiceAnimation(
      ASTitle.current,
      ASList.current,
      ASTrigger.current as HTMLElement
    );
  });
  return (
    <div className="container" ref={ASTrigger}>
      <div className={s.asWrapper}>
        <div className={s.AStitleWrapper}>
          <h2 ref={ASTitle} className={s.AStitle}>
            {t("ASsection.title")}
          </h2>
        </div>
        <ul ref={ASList} className={s.ASlist}>
          {Object.entries(addittional).map(([key, value], idx) => {
            if (typeof value === "string") return null;
            return (
              <ASComponent
                key={key + idx}
                asInfo={value}
                isOpen={openIdx === idx}
                onClick={() => handleToggle(idx)}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default AditionalServices;
