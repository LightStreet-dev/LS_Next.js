import scrollToId from "@/styles/animation/scroll";
import s from "./ScrollUpButtonComponent.module.css"

const ScrollUpButtonComponent = () => {
  return (
    <button onClick={() => scrollToId("header")} className={s.sctollBtnWrapper}>
      <svg className={s.scrollBtn}>
        <use href="/svg/symbol-defs.svg#icon-scroll-up-svgrepo-com"></use>
      </svg>
    </button>
  );
};

export default ScrollUpButtonComponent;
