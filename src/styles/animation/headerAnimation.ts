import gsap from "gsap";

const headerAnimation = (
  headerContainer: HTMLElement,
  headerContent: HTMLElement
) => {
  const tl = gsap.timeline();

  tl.from(headerContainer, {
    y: -80,
    opacity: 0,
    duration: 0.7,
    ease: "power3.out",
    clearProps: "all",
  })
  .from(
    headerContent,
    {
      y: 20,
      opacity: 0,
      duration: 0.6,
      ease: "power3.out",
      clearProps: "all",
    },
    "-=0.3"
  );


    return () => {
      tl.scrollTrigger?.kill();
      tl.kill();
    };
};

export default headerAnimation;
