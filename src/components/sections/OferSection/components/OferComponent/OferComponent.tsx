import clsx from "clsx";
import s from "./OferComponent.module.css"
interface Page {
  title: string;
  features: string[];
  price: string;
  timeTitle: string;
  time: string;
}

interface oferProps {
  page: Page;
  isActive: boolean
  size: boolean
}
const OferComponent: React.FC<oferProps> = ({
  page: { title, features,  timeTitle, time },isActive, size
}) => {
  return (
    <div className={s.slideWraper}>
      <h2  className={s.oferTitle}>{title}</h2>
      <ul className={s.featuresList}>
        {features.map((value, idx) => (
          <li  className={s.featurIteam}key={idx}>{value}</li>
        ))}
      </ul>
      <div className={clsx(s.priceInfo, isActive && size &&  s.priceInfoActive )}>
      <p className={s.oferPrice}></p>
      <p className={s.oferTermin}>{timeTitle}</p>
      <p className={s.oferTermin}>{time}</p>
      </div>
    </div>
  );
};

export default OferComponent;
