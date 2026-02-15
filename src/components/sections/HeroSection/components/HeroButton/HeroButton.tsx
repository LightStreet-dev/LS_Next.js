
import s from "./HeroButton.module.css"
import { useTranslation } from "react-i18next";
import scrollToId from "@/styles/animation/scroll"
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { heroBtnAnimation } from "@/styles/animation/heroAnimation";


const HeroButton = () => {
    const {t} = useTranslation();
    const btnAnimation = useRef<HTMLButtonElement>(null)
    useGSAP(()=>{
      if(!btnAnimation.current) return;
      heroBtnAnimation(btnAnimation.current)
    })
  return (
    <div>
         <button ref={btnAnimation} className={s.heroBatton} type="button" onClick={() => scrollToId("ourWorks")}>
      {t("hero.heroBtn")}
       </button>
    </div>
  )
}

export default HeroButton