"use client";
import ContactButton from "@/components/ui/ContactButton/ContactButton";
import Logo from "@/components/ui/Logo/Logo";
import NavLinks from "@/components/layout/Header/components/NavLins/NavLinks";
import SocialIcons from "@/components/ui/SocialIcons/SocialIcons"
import s from "./Header.module.css";
import LanguageChanger from "@/components/layout/Header/components/LanguageChanger/LanguageChanger";
import ModalMenu from "@/components/layout/Header/components/ModalMenu/ModalMenu";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import headerAnimation from "@/styles/animation/headerAnimation";

interface HeaderProps {
  mobMediaQuery: boolean;
  toggleForm:  (setter: React.Dispatch<React.SetStateAction<boolean>>) => void;
  setOpenForm:React.Dispatch<React.SetStateAction<boolean>>;
  observer: (element: Element | null | undefined) => void | (() => void);
}
const Header: React.FC<HeaderProps> = ({ mobMediaQuery, toggleForm, setOpenForm ,observer }) => {
  
 const headerContainer = useRef<HTMLDivElement | null>(null);
const headerContent = useRef<HTMLDivElement | null>(null);
 useGSAP(
    () => {
 if (!headerContainer.current || !headerContent.current) return;
headerAnimation(headerContainer.current,headerContent.current )
 
});

  return (
    <div ref={observer}>
    <header className={s.header} ref={headerContainer} id="header">
      <div className={s.headerWrapper} ref={headerContent}>
        <Logo />

        {mobMediaQuery ? (
          <div className={s.modalWraper}>
            <LanguageChanger />
            <ModalMenu toggleForm={toggleForm} setOpenForm={setOpenForm} />
          </div>
        ) : (
          <>
            <NavLinks />
            <div className={s.mainHeaderWrapper}>
              <div className={s.socialContactWrapper}>
                <SocialIcons />
              </div>

              <div className={s.groupWrapper}>
                <LanguageChanger /> <ContactButton toggleForm={toggleForm} setOpenForm={setOpenForm} />
              </div>
            </div>
          </>
        )}
      </div>
    </header>
    </div>
  );
};

export default Header;
