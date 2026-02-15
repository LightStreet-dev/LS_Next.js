import clsx from "clsx";
import s from "./ASComponent.module.css";
interface AsInfo {
  asInfo: {
    svg: string;
    serviceName: string;
    info: string;
  };
  isOpen: boolean;
  onClick: () => void;
}

const ASComponent: React.FC<AsInfo> = ({
  asInfo: { svg, serviceName, info }, isOpen, onClick
}) => {
  return (
    <li className={s.AScontainer} onClick={onClick}>
      <div className={s.iconWrapper}>
        <svg className={s.asIcon}>
          <use href={svg}></use>
        </svg>
      </div>
      <h2 className={s.AStitle}>{serviceName}</h2>
      <p className={clsx(s.AStext, isOpen && s.show)}>{info}</p>
        <svg className={clsx(s.arrowIcon, isOpen && s.rotate)}>
          <use href="/svg/symbol-defs.svg#chevron-arrows"></use>
        </svg>
    </li>
  );
};

export default ASComponent;
