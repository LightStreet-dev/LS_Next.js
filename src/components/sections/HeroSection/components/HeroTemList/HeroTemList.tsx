import s from "./HeroTemList.module.css";
import getTeamInfo from "@/data/teamData";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import clsx from "clsx";
import HeroTeamComponent from "@/components/sections/HeroSection/components/HeroTeamComponent/HeroTeamComponent";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { teamAnimation } from "@/styles/animation/teamAnimation";

const HeroTemList: React.FC = () => {
  const { t } = useTranslation();
  const teamPicture = useRef<HTMLDivElement | null>(null);
  const teamText = useRef<HTMLDivElement | null>(null);
  const team = useRef<HTMLDivElement | null>(null);
  const teamTrigger = useRef<HTMLDivElement | null>(null);
  useGSAP(() => {
    if (!teamPicture.current || !teamText.current || !team.current) return;
    teamAnimation(
      teamPicture.current as HTMLElement,
      teamText.current as HTMLElement,
      team.current as HTMLElement,
      teamTrigger.current as HTMLElement
    );
  });

  const teamInfo = getTeamInfo(t);

  const [activeIndex, setActiveIndex] = useState<number | null>(() =>
    Math.floor(Math.random() * teamInfo.length)
  );

  const activeReview = activeIndex !== null ? teamInfo[activeIndex] : null;

  return (
    <div ref={teamTrigger} className={s.rewiewsWrapper}>
      <div className={s.wrapWithText}>
        <div className={s.reviewsContainer} ref={teamPicture}>
          {teamInfo.map((review, index) => (
            <HeroTeamComponent
              teamText={review}
              key={review.id}
              index={index}
              activeIndex={activeIndex}
              setActiveIndex={setActiveIndex}
            />
          ))}
        </div>

        <p
          className={clsx(s.reviewsText, activeIndex && s.reviewsTextActive)}
          ref={team}
        >
          Our <br /> Team
        </p>
      </div>

      {activeReview && (
        <p ref={teamText} className={s.reviewText}>
          {activeReview.text}
        </p>
      )}
    </div>
  );
};

export default HeroTemList;
