"use client";
import { useMediaQuery } from "react-responsive";
import Header from "@/components/layout/Header/Header";
import FooterComponent from "@/components/layout/Footer/Footer";
import PrivateData from "@/components/layout/Footer/components/PrivateDataComponent/PrivateData";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import clsx from "clsx";
import usePageViews from "@/hooks/usePageViews";
import ScrollUpButtonComponent from "@/components/ui/ScrollUpButton/ScrollUpButtonComponent";
import Hero from "@/components/sections/HeroSection/Hero";
import AboutUsComponent from "@/components/sections/AboutUsSection/AboutUsComponent";
import OferSectionComponent from "@/components/sections/OferSection/OferSectionComponent";
import AditionalServices from "@/components/sections/AditionalServiceSection/AditionalServices";

export default function Home() {
  const [openForm, setOpenForm] = useState<boolean>(false);
  const isMobileHeader = useMediaQuery({ maxWidth: 860 });
  const [openLink, setOpenLink] = useState<boolean>(false);
  const { ref: inViewRef, inView } = useInView({
    threshold: 0,
  });
  const handleToggle = (
    setter: React.Dispatch<React.SetStateAction<boolean>>,
  ) => {
    setter((prev) => !prev);
  };
  usePageViews();
  return (
    <div className="bodyWrapper">
      <div className="headerHerroWrapper">
        <Header
          observer={inViewRef}
          mobMediaQuery={isMobileHeader}
          toggleForm={handleToggle}
          setOpenForm={setOpenForm}
        />
        <Hero />
      </div>
      <AboutUsComponent />
      <OferSectionComponent
        toggleForm={handleToggle}
        setOpenForm={setOpenForm}
      />
      <AditionalServices />
      {/* <PortfolioSectionCompopnent />
      <BenefitsComponent />
      <ContactSectionComponent />
      <SubmitForm */}
      <FooterComponent toggleModal={handleToggle} setOpenLink={setOpenLink} />
      <PrivateData
        toggleModal={handleToggle}
        openLink={openLink}
        setOpenLink={setOpenLink}
      />
      <div className={clsx("scrollUpBtn", !inView && "scrollUpBtnActive")}>
        <ScrollUpButtonComponent />
      </div>
    </div>
  );
}
