import gsap from "gsap";

export const heroTitleAnimation = (
  w1: HTMLElement,
  w2: HTMLElement,
  w3: HTMLElement,
  titleText: HTMLElement,

) => {
  const tl = gsap.timeline({ ease: "power3.out" });
  tl.from(w1, {
    x: -100,
    opacity: 0,
    duration: 0.6,
  });
  tl.from(
    w2,
    {
      x: -100,
      opacity: 0,
      duration: 0.6,
    },
    "-=0.3"
  );
  tl.from(
    w3,
    {
      x: -100,
      opacity: 0,
      duration: 0.6,
    },
    "-=0.3"
  );
  tl.from(
    titleText,
    {
      y: 100,
      opacity: 0,
      duration: 0.6,
    },
    "-=0.6"
  );
};



export const featuresAnimation = (featuresAnim: HTMLUListElement) => {
  gsap.from(featuresAnim, {
    rotationX: -180, // лежав горизонтально, повернутий до користувача
    y: 50, // трохи підіймається вгору
    opacity: 0,
    duration: 2,
    ease: "power3.out",
  });
};

export const heroBtnAnimation = (btnAnimation: HTMLElement) => {
  gsap.from(btnAnimation, {
    rotationX: -90, // лежав горизонтально, повернутий до користувача
    y: 50,
    opacity: 0,
    delay: 1,
    duration: 2,
    ease: "power3.out",
  });
};
