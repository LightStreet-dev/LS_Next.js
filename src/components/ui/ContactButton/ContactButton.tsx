import clsx from "clsx";
import s from "./ContactButton.module.css";
import { useTranslation } from "react-i18next";
import { useMediaQuery } from "react-responsive";

interface contactButton {
  isOpen?: boolean;
  toggleForm: (setter: React.Dispatch<React.SetStateAction<boolean>>) => void;
  setOpenForm: React.Dispatch<React.SetStateAction<boolean>>;
  className?: string;
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}

const ContactButton: React.FC<contactButton> = ({
  isOpen,
  setOpenForm,
  toggleForm,
  className,
  setOpen,
}) => {
  const maxWidth = useMediaQuery({ maxWidth: 767 });
  const { t } = useTranslation();
  return (
    <div>
      <button
        className={clsx(
          s.contactbtn,
          (isOpen || maxWidth) && s.modalContactBtn,
          className
        )}
        onClick={() => {
          toggleForm(setOpenForm);
          if (setOpen) setOpen(false);
        }}
      >
        {t("header.contactButton")}
      </button>
    </div>
  );
};

export default ContactButton;
