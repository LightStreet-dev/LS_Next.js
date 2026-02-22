import Image from "next/image"
import s from "./PortfolioComponent.module.css"

type webPage ={
  webPage: {
    img: string
    retina: string
    link:string
  }
}
const PortfolioComponent:React.FC<webPage> = ({ webPage:{img, retina, link} }) => {
  return (
    <div className={s.portfolioCard}>
             <a href={link} className={s.portfolioItem} target="blank">
    <Image className={s.slide}
      src={img}
      alt={"img"}
      width={500} // specify width
      height={400} // specify height
    />
          {/* <p>{key}</p> */}
        </a>
 
    </div>
  );
}

export default PortfolioComponent