import s from "./HeroTeamComponent.module.css";
import type { teamText as teamType } from "@/data/teamData";
import clsx from "clsx";
import Image from "next/image";

interface teamProps {
  teamText: teamType;
  index: number | null;
  activeIndex: number | null;
  setActiveIndex: React.Dispatch<React.SetStateAction<number | null>>;
}

const HeroTeamComponent: React.FC<teamProps> = ({
  teamText: teamInfo,
  index,
  activeIndex,
  setActiveIndex,
}) => {
  const { photo } = teamInfo;
const isActive = activeIndex === index
  const handleClickRewiev = () => {
    setActiveIndex(index);
  };
  return (
    <div className={s.teamWraper} onClick={handleClickRewiev}>
      <Image className={clsx(s.teamImg, isActive && s.activeImg)} src={photo} alt="team"  width={300} 
  height={300} />
    </div>
  );
};

export default HeroTeamComponent;
