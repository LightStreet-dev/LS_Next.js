import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const footerAnimation = (
  footerNav: HTMLElement,
  footerSoc: HTMLElement,
  footerTitle: HTMLElement,
  footerSpan: HTMLElement,
  footerInfo: HTMLElement,
  footerTrigger: HTMLElement
) => {
  const media = gsap.matchMedia();

  // ================= MOBILE =================
  media.add("(max-width: 768px)", () => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: footerTrigger,
        start: "top 60%",
        toggleActions: "play none none none",
        // markers: true, // тільки для дебагу
      },
    });

    tl.from(
      [footerNav, footerTitle, footerSpan, footerSoc, footerInfo],
      {
        y: 40,
        opacity: 0,
        duration: 0.5,
        ease: "power3.out",
        stagger: 0.1,
      }
    );

    return () => {
      tl.scrollTrigger?.kill();
      tl.kill();
    };
  });

  // ================= DESKTOP =================
  media.add("(min-width: 769px)", () => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: footerTrigger,
        start: "top 60%",
        toggleActions: "play none none none",
        // markers: true,
      },
    });

    tl.from(footerNav, {
      x: -50,
      opacity: 0,
      duration: 0.5,
      ease: "power3.out",
    })
      .from(
        footerSoc,
        {
          x: 50,
          opacity: 0,
          duration: 0.5,
          ease: "power3.out",
        },
        "-=0.4"
      )
      .from(footerTitle, {
        y: 50,
        opacity: 0,
        duration: 0.5,
        ease: "power3.out",
      })
      .from(footerSpan, {
        opacity: 0,
        duration: 0.5,
        ease: "power3.out",
        scale:0,
      })
      .from(
        footerInfo,
        {
          y: 40,
          opacity: 0,
          duration: 0.4,
          ease: "power3.out",
        },
        "-=0.5"
      );

    return () => {
      tl.scrollTrigger?.kill();
      tl.kill();
    };
  });
};

export default footerAnimation;
