import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const OfferAnimation = (offerTitle: HTMLElement,offerText: HTMLElement,offerBtn: HTMLElement,offerSlide: HTMLElement, offerTrigger: HTMLElement)=>{
gsap.registerPlugin(ScrollTrigger);
const media = gsap.matchMedia();

media.add("(max-width: 768px)", () => {
    const tl = gsap.timeline({
      ease: "power3.out",
      scrollTrigger: {
        trigger: offerTrigger,
        start: "top 70%",
        toggleActions: "play none none none",
        // markers: true,
      },
    });
tl.from(offerTitle, {
      y: 50,
      opacity: 0,
      duration: 0.5,
    });
    tl.from(offerText, {
      y: 50,
      opacity: 0,
      duration: 0.5,
    });
     tl.from(offerBtn, {
      y: 50,
      opacity: 0,
      duration: 0.5,
    },"-=0.5");
     tl.from(offerSlide, {
      y: 50,
      opacity: 0,
      duration: 0.5,
    },"-=0.5");
  return () => {
      tl.scrollTrigger?.kill();
      tl.kill();
    };

});
media.add("(min-width: 769px)", () => {
    const tl = gsap.timeline({
      ease: "power3.out",
      scrollTrigger: {
        trigger: offerTrigger,
        start: "top 70%",
        toggleActions: "play none none none",
        // markers: true,
      },
    });
tl.from(offerTitle, {
      y: 50,
      opacity: 0,
      duration: 0.5,
    });
    tl.from(offerText, {
      y: 50,
      opacity: 0,
      duration: 0.5,
    });
     tl.from(offerBtn, {
      y: 50,
      opacity: 0,
      duration: 0.5,
    },"-=0.5");
     tl.from(offerSlide, {
      y: 50,
      opacity: 0,
      duration: 0.5,
    },"-=0.5");
  return () => {
      tl.scrollTrigger?.kill();
      tl.kill();
    };

})}

export default OfferAnimation