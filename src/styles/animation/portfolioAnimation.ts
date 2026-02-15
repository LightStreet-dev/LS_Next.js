import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const portfolioAnimation =(portfolioTitle:HTMLElement, ortfolioList:HTMLElement, portfolioTrigger:HTMLElement ) =>{
gsap.registerPlugin(ScrollTrigger);


    const tl = gsap.timeline({
      ease: "power3.out",
      scrollTrigger: {
        trigger: portfolioTrigger,
        start: "top 70%",
        toggleActions: "play none none none",
        // markers: true,
      },
    });
tl.from(portfolioTitle, {
      y: 50,
      opacity: 0,
      duration: 0.5,
    });
    tl.from(ortfolioList, {
      y: 50,
      opacity: 0,
      duration: 0.5,
    });
      return () => {
      tl.scrollTrigger?.kill();
      tl.kill();
    };
}

export default portfolioAnimation