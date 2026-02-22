import s from "./ConsentToast.module.css"
import { useTranslation } from "react-i18next";
type ConsentToastProps = {
  closeToast: () => void;
  sendEmail?: () => void;
  onDecline?: () => void;}

const ConsentToast = ({ closeToast, sendEmail,onDecline }: ConsentToastProps) => {
   const { t } = useTranslation( "formTranslation");
  const handleAccept = () => {
    
    sendEmail?.()
    closeToast();
  };

  const handleDecline = () => {
    
    closeToast();
    onDecline?.();
  };

  return (
    <div className={s.consentWrapper}>
      <p> {t("formPlaseholders.shortAgree")}</p>

      <div className={s.consentBtnWrapper } >
        <button onClick={handleAccept}><svg className={s.accept}><use href="/svg/symbol-defs.svg#icon-checkmark"></use></svg></button>
        <button onClick={handleDecline}><svg className={s.decline}><use href="/svg/symbol-defs.svg#icon-cross"></use></svg></button>
      </div>
    </div>
  );
};

export default ConsentToast;