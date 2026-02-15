"use client";

import Hamburger from "hamburger-react";
import clsx from "clsx";
import { useEffect, useState } from "react";
import s from "./ModalMenu.module.css";
import SocialIcons from "@/components/ui/SocialIcons/SocialIcons";
import ContactButton from "@/components/ui/ContactButton/ContactButton";
import { useTranslation } from "react-i18next";
import scrollToId from "@/styles/animation/scroll";
import { createPortal } from "react-dom";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import modalAnimation from "@/styles/animation/modalAnimation"

interface modalProps {
  toggleForm: (setter: React.Dispatch<React.SetStateAction<boolean>>) => void;
  setOpenForm: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalMenu: React.FC<modalProps> = ({ toggleForm, setOpenForm }) => {
  const { t } = useTranslation();
  const [isOpen, setOpen] = useState(false);
const modalRef = useRef<HTMLDivElement | null>(null);

useGSAP(
  () => {
    if (!modalRef.current) return;
    modalAnimation(modalRef.current, isOpen);
  },
  { dependencies: [isOpen] }
);
  // ✅ lock scroll
  useEffect(() => {
    document.body.classList.toggle("no-scroll", isOpen);
  }, [isOpen]);

  const handleBackdropClick = (evt: React.MouseEvent<HTMLDivElement>) => {
    if (evt.target === evt.currentTarget) {
      setOpen(false);
    }
  };

  const HandleClickBtn = (id: string) => {
    setOpen(false);
    scrollToId(id);
  };

  return (
    <>
      {/* 🔹 Бургер — залишається в хедері */}
      <div className={s.burgerWrapper}>
        <Hamburger toggled={isOpen} toggle={setOpen} size={35} />
      </div>

      {/* 🔥 МОДАЛКА ЧЕРЕЗ PORTAL */}
      {
        createPortal(
          <div ref={modalRef}
            className={clsx(s.modalOverlay, s.modalOverlayActive)}
            onClick={handleBackdropClick}
          >
            <div className={s.modalContent}>
              <ul className={s.modalNavList}>
                <li>
                  <button onClick={() => HandleClickBtn("about")}>
                    {t("header.about")}
                  </button>
                </li>
                <li>
                  <button onClick={() => HandleClickBtn("services")}>
                    {t("header.services")}
                  </button>
                </li>
                <li>
                  <button onClick={() => HandleClickBtn("contact")}>
                    {t("header.contact")}
                  </button>
                </li>
              </ul>
            </div>

            <SocialIcons isOpen={isOpen} />
            <ContactButton
              isOpen={isOpen}
              setOpenForm={setOpenForm}
              toggleForm={toggleForm}
              setOpen={setOpen}
            />
          </div>,
          document.body
        )}
    </>
  );
};

export default ModalMenu;
