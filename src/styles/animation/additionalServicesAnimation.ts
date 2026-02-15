import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const AdditionalServiceAnimation = (
  ASTitle: HTMLElement,
  ASList: HTMLElement,
  ASTrigger: HTMLElement
) => {
  gsap.registerPlugin(ScrollTrigger);
  const media = gsap.matchMedia();
  media.add("(max-width: 768px)", () => {
    const tl = gsap.timeline({
      ease: "power3.out",
      scrollTrigger: {
        trigger: ASTrigger,
        start: "top 70%",
        toggleActions: "play none none none",
        // markers: true,
      },
    });
    tl.from(ASTitle, {
      y: 50,
      opacity: 0,
      duration: 0.5,
    });
    tl.from(ASList, {
      y: 50,
      opacity: 0,
      duration: 0.5,
    });
    return () => {
      tl.scrollTrigger?.kill();
      tl.kill();
    };
  });
  media.add("(min-width: 769px)", () => {
    const tl = gsap.timeline({
      ease: "power3.out",
      scrollTrigger: {
        trigger: ASTrigger,
        start: "top 70%",
        toggleActions: "play none none none",
        // markers: true,
      },
    });
    tl.from(ASTitle, {
      y: 50,
      opacity: 0,
      duration: 0.5,
    });
    tl.from(ASList, {
      y: 50,
      opacity: 0,
      duration: 0.5,
    });
    return () => {
      tl.scrollTrigger?.kill();
      tl.kill();
    };
  });
};

export default AdditionalServiceAnimation;
