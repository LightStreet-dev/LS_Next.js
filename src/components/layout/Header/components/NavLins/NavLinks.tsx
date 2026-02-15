
"use client"
import clsx from "clsx";
import s from "./NavLinks.module.css";
import { useTranslation } from "react-i18next";
import scrollToId from "@/styles/animation/scroll";

interface navProps {
  footerNavigation?: string;
}
const NavLinks: React.FC<navProps> = ({ footerNavigation }) => {
  const { t } = useTranslation("translation");

  return (
    <ul className={clsx(s.navigation, footerNavigation)}>
      <li>
        <button className={s.navItem} onClick={() => scrollToId("about")}>
          {t("header.about")}
        </button>
      </li>
      <li>
        <button className={s.navItem} onClick={() => scrollToId("services")}>
          {t("header.services")}
        </button>
      </li>
      <li>
        <button className={s.navItem} onClick={() => scrollToId("contact")}>
          {t("header.contact")}
        </button>
      </li>
    </ul>
  );
};
export default NavLinks;
