import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const teamAnimation = (
  teamPicture: HTMLElement,
  teamText: HTMLElement,
  team: HTMLElement,
  teamTrigger: HTMLElement
) => {
  const media = gsap.matchMedia();

  media.add("(max-width: 768px)", () => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: teamTrigger,
        start: "top 70%",
        toggleActions: "play none none none",
        // markers: true,
      },
      defaults: { ease: "power3.out" },
    });

    tl.from(teamPicture, {
      x: -50,
      opacity: 0,
      duration: 0.5,
    })
      .from(
        teamText,
        {
          x: 50,
          opacity: 0,
          duration: 0.5,
        },
        "-=0.4"
      )
      .from(
        team,
        {
          x: 50,
          opacity: 0,
          duration: 0.7,
     
        },
        "-=0.5"
      );
  });

  media.add("(min-width: 769px)", () => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: teamTrigger,
        start: "top 70%",
        toggleActions: "play none none none",
        // markers: true,
      },
      defaults: { ease: "power3.out" },
    });

    tl.from(teamPicture, {
      y: -100,
      opacity: 0,
      duration: 0.6,
    })
      .from(
        teamText,
        {
          y: 100,
          opacity: 0,
          duration: 0.6,
        },
        "-=0.4"
      )
      .from(
        team,
        {
          y: 50,
          opacity: 0,
          rotationZ: 45,
          duration: 0.6,
          stagger: 0.05,
        },
        "+=0.2"
      );
  });
};
