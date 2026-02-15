import s from "./Hero.module.css";
import HeroTitle from "@/components/sections/HeroSection/components/HeroTitle/HeroTitle";
import HeroTemList from "@/components/sections/HeroSection/components/HeroTemList/HeroTemList";
import { useMediaQuery } from "react-responsive";
import HeroButton from "./components/HeroButton/HeroButton";
import HeroFeatures from "./components/HeroFeatures/HeroFeatures";


const HeroComponent: React.FC = () => {
  const showTeam = useMediaQuery({ minWidth: 768 });

  return (
    <div className="container">
      <div className={s.herroContainer}>
        <HeroTitle />
        {showTeam && <HeroTemList />}
      </div>
      <div className={s.heroWraper}>
      <HeroButton />
      {showTeam &&  <HeroFeatures/>}
    
      </div>
    </div>
  );
};

export default HeroComponent;
