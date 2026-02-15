"use client";
import { useEffect } from "react";
import clsx from "clsx";
import { useTranslation } from "react-i18next";
import s from "./PrivteData.module.css";

interface PrivatModalProps {
  toggleModal: (setter: React.Dispatch<React.SetStateAction<boolean>>) => void;
  openLink: boolean;
  setOpenLink: React.Dispatch<React.SetStateAction<boolean>>;
}

const PrivateData: React.FC<PrivatModalProps> = ({
  toggleModal,
  openLink,
  setOpenLink,
}) => {
  const { t } = useTranslation("translation");

  const handleBackdropClick = (evt: React.MouseEvent<HTMLDivElement>) => {
    if (evt.target === evt.currentTarget) {
      setOpenLink(false);
    }
  };

  useEffect(() => {
    if (openLink) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [openLink]);

  return (
    <div
      className={clsx(s.privateOverlay, openLink && s.privateOverlayActive)}
      onClick={handleBackdropClick}
      style={{ pointerEvents: openLink ? "auto" : "none" }}
    >
      <div className={s.privateContent}>
        <button
          className={s.closeBtn}
          onClick={() => toggleModal(setOpenLink)}
          style={{ fontSize: 35 }}
        >
          ×
        </button>
        <p className={s.provateText}>{t("privatePolicy.text")}</p>
      </div>
    </div>
  );
};

export default PrivateData;
