import gsap from "gsap";

const modalAnimation = (el: HTMLElement, isOpen: boolean) => {
  gsap.to(el, {
    y: isOpen ? 0 : "-100%",
    opacity: isOpen ? 1 : 0,
    duration: 0.5
  });
};

export default modalAnimation;
