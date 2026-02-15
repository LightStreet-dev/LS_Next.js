import { useSwiper } from "swiper/react";
import s from "./SwiperNavigationComponent.module.css";
import clsx from "clsx";
import Image from "next/image";

type Props = {
  type: "prev" | "next";
  className?: string;
};

const SwiperNavigationComponent = ({ type, className }: Props) => {
  const swiper = useSwiper();

  if (!swiper) return null;

  const isPrev = type === "prev";

  return (
    <button
      className={clsx(s.swiperBtn, className)}
      onClick={() => (isPrev ? swiper.slidePrev() : swiper.slideNext())}
    >
      <Image
        className={s.arrowSvg}
        src={isPrev ? "/svg/arrow-left.svg" : "/svg/arrow-right.svg"}
        alt={isPrev ? "<" : ">"} width={20} height={20}
      />
    </button>
  );
};

export default SwiperNavigationComponent;
