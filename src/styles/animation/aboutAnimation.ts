import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const aboutAnimation = (
  aboutTitleAnimation: HTMLElement,
  aboutTextAnimation: HTMLElement,
  aboutTexteAnimationTwo: HTMLElement,
  aboutLogoAnimation: SVGSVGElement,
  aboutTrigger: HTMLElement
) => {
  gsap.registerPlugin(ScrollTrigger);
  const media = gsap.matchMedia();

  media.add("(max-width: 768px)", () => {
    const tl = gsap.timeline({
      ease: "power3.out",
      scrollTrigger: {
        trigger: aboutTrigger,
        start: "top 70%",
        toggleActions: "play none none none",
        // markers: true,
      },
    });

    tl.from(aboutTitleAnimation, {
      y: 50,
      opacity: 0,
      duration: 0.5,
    })
      .from(aboutTextAnimation, {
        y: -50,
        opacity: 0,
        duration: 0.5,
      })
      .from(
        aboutTexteAnimationTwo,
        {
          y: 50,
          opacity: 0,
          duration: 0.5,
        },
        "-=0.5"
      )
      .from(aboutLogoAnimation, {
        opacity: 0,
        rotateY: 90,
        duration: 0.8,
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
        trigger: aboutTrigger,
        start: "top 70%",
        toggleActions: "play none none none",
        // markers: true,
      },
    });

    tl.from(aboutTitleAnimation, {
      y: 100,
      opacity: 0,
      duration: 0.5,
    })
      .from(aboutTextAnimation, {
        x: -50,
        opacity: 0,
        duration: 0.5,
      })
      .from(
        aboutTexteAnimationTwo,
        {
          x: 50,
          opacity: 0,
          duration: 0.5,
        },
        "-=0.5"
      )
      .from(aboutLogoAnimation, {
        opacity: 0,
        rotateY: 630,
        duration: 0.8,
      });
        return () => {
      tl.scrollTrigger?.kill();
      tl.kill();
    };
  });
  
};

export default aboutAnimation;
