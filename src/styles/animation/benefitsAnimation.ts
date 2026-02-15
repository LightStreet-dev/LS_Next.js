import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const benefotsAnimation = (
  benefitsTitle: HTMLElement,
  benefitsList: HTMLElement,
  benefitsSVG1: SVGSVGElement,
  benefitsSVG2: SVGSVGElement,
  benefitsSVG3: SVGSVGElement,
  benefitsSVG4: SVGSVGElement,
  benefitsTrigger: HTMLElement
) => {
  gsap.registerPlugin(ScrollTrigger);
  const media = gsap.matchMedia();
  media.add("(max-width: 768px)", () => {
    const tl = gsap.timeline({
      ease: "power3.out",
      scrollTrigger: {
        trigger: benefitsTrigger,
        start: "top 70%",
        toggleActions: "play none none none",
        // markers: true,
      },
    });

    tl.from(benefitsTitle, {
      y: 50,
      opacity: 0,
      duration: 0.5,
    });
    tl.from(benefitsList, {
      y: 50,
      opacity: 0,
      duration: 0.5,
    });
    tl.from(benefitsSVG1, {
      x: -50,
      opacity: 0,
      duration: 0.5,
    });
    tl.from(
      benefitsSVG2,
      {
        x: -50,
        opacity: 0,
        duration: 0.5,
      },
      "-=0.5"
    );
    tl.from(
      benefitsSVG3,
      {
        x: -50,
        opacity: 0,
        duration: 0.5,
      },
      "-=0.5"
    );
    tl.from(
      benefitsSVG4,
      {
        x: -50,
        opacity: 0,
        duration: 0.5,
      },
      "-=0.5"
    );
    return () => {
      tl.scrollTrigger?.kill();
      tl.kill();
    };
  });
  media.add("(min-width: 769px)", () => {
    const tl = gsap.timeline({
      ease: "power3.out",
      scrollTrigger: {
        trigger: benefitsTrigger,
        start: "top 70%",
        toggleActions: "play none none none",
        // markers: true,
      },
    });

    tl.from(benefitsTitle, {
      y: 50,
      opacity: 0,
      duration: 0.5,
    });
    tl.from(benefitsList, {
      y: 50,
      opacity: 0,
      duration: 0.5,
      "--benefitsAnimationLineStart": "-200%",
      "--benefitsAnimationLineEnd": "200%",
    });

    tl.from(benefitsSVG1, {
      x: -50,
      opacity: 0,
      duration: 0.5,
    });
    tl.from(
      benefitsSVG2,
      {
        x: -50,
        opacity: 0,
        duration: 0.5,
      },
      "-=0.5"
    );
    tl.from(
      benefitsSVG3,
      {
        x: -50,
        opacity: 0,
        duration: 0.5,
      },
      "-=0.5"
    );
    tl.from(
      benefitsSVG4,
      {
        x: -50,
        opacity: 0,
        duration: 0.5,
      },
      "-=0.5"
    );
    return () => {
      tl.scrollTrigger?.kill();
      tl.kill();
    };
  });
};
export default benefotsAnimation;
