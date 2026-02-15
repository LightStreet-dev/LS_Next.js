import clsx from "clsx";
import s from "./SocialIcons.module.css";

interface socialProps {
  isOpen?: boolean;
  footerStyle?:string;
  footerStyleList?:string
}

const SocialIcons: React.FC<socialProps> = ({ isOpen, footerStyle, footerStyleList }) => {
const openTelegramBot = () =>{
  window.open("https://t.me/LS_contact_Bot?start=from_site", "_blank");
}

  return (
    <ul className={clsx(s.socIconsList, isOpen && s.socIconsListModal, footerStyleList)}>
      <li><a href="https://www.instagram.com/lightstreetprod/" target="blank">
        <svg className ={clsx(s.svg, isOpen && s.svgModal, footerStyle)} >
          <use href="/svg/symbol-defs.svg#icon-insta"></use>
        </svg>
        </a>
      </li>
      <li>
        <a href="https://www.linkedin.com/company/light-street-production/" target="blank">
        <svg className ={clsx(s.svg, isOpen && s.svgModal, footerStyle)} >
          <use href="/svg/symbol-defs.svg#icon-typcn_social-linkedin"></use>
        </svg>
        </a>
      </li>
        <li>
        <a onClick={openTelegramBot} href="#" target="blank">
        <svg className ={clsx(s.svg, isOpen && s.svgModal, footerStyle)} >
          <use href="/svg/symbol-defs.svg#icon-telegram"></use>
        </svg>
        </a>
      </li> 
    </ul>
  );
};
export default SocialIcons