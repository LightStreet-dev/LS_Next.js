import clsx from "clsx";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import s from "./SubmitForm.module.css";
import { MdClose } from "react-icons/md";
import { ErrorMessage, Field, Form, Formik } from "formik";
import InputComponent from "../InputComponent/InputComponent";
import { useTranslation } from "react-i18next";
import mainFormSchema from "@/utils/FormValidators/mainFormValidation";
import AutoClearErrorsComponent from "@/components/ui/AutoClearErrorsComponent/AutoClearErrorsComponent";
type FormValue = {
  Name: string;
  Company: string;
  Phone: string;
  Email: string;
  Text: string;
  agree: boolean;



};

interface SubmitFormProps {
  openForm: boolean;
 setOpenForm: React.Dispatch<React.SetStateAction<boolean>>;
  setOpenLink: React.Dispatch<React.SetStateAction<boolean>>;
   toggleModal: (setter: React.Dispatch<React.SetStateAction<boolean>>) => void;
}

const SubmitForm: React.FC<SubmitFormProps> = ({ openForm, setOpenForm, setOpenLink, toggleModal }) => {
  const formRef = useRef<HTMLFormElement>(null);
  const { t } = useTranslation(["translation", "formTranslation"]);
  const initialValues: FormValue = {
    Name: "",
    Company: "",
    Phone: "",
    Email: "",
    Text: "",
    agree: false,
  };

  const sendEmail = async (
    values: FormValue,
    actions: import("formik").FormikHelpers<FormValue>
  ) => {
    if (!formRef.current) return;
    const confirmMail = t("formReply.reply");
    const mailTitle = t("formReply.title");
    const mailVelcome = t("formReply.velcome");
    const mailSignOne = t("formReply.signatureOne");
    const mailSignTwo = t("formReply.signatureTwo");
    try {
      //  Надіслати лист адміністратору
      Promise.all([
        emailjs.sendForm(
          "service_b9158j4",
          "template_3o02fkr",
          formRef.current,
          "WfwuYGLBQ1Q_uC7jX"
        ),
        emailjs.send(
          "service_b9158j4",
          "template_5or214p",
          {
            name: values.Name,
            email: values.Email,
            confirmation: confirmMail,
            title: mailTitle,
            velcome: mailVelcome,
            signatureOne: mailSignOne,
            signatureTwo: mailSignTwo,
          },
          "WfwuYGLBQ1Q_uC7jX"
        ),
      ]);

      console.log("SUCCESS! Emails sent.");
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.log("FAILED...", error.message);
      } else {
        console.log("FAILED...", error);
      }
    } finally {
      actions.setSubmitting(false);
      setOpenForm(false);
      actions.resetForm();
    }
  };

  const handleCloseForm = (evt: React.MouseEvent<HTMLDivElement>) => {
    if (evt.target === evt.currentTarget) {
      setOpenForm(false);
    }
  };

  return (
    <div
      className={clsx(s.modalFormOverlay, openForm && s.modalFormOverlayActive)}
      onClick={handleCloseForm}
    >
      <div className={s.formWrapper}>
        <MdClose
          size={24}
          className={s.closeFormBtn}
          onMouseDown={() => setOpenForm(false)}
        />
        <h2 className={s.formHeader}>{t("formTranslation:formTitle")}</h2>
        <Formik
          initialValues={initialValues}
          onSubmit={(values, actions) => {
            if (!values.agree) {
              actions.setFieldTouched("agree", true);
              actions.setSubmitting(false);
              return;
            }

            sendEmail(values, actions); // якщо agree=true, відправляємо форму
          }}
          validationSchema={mainFormSchema}
          validateOnBlur={true}
          validateOnChange={false}
        >
          {({ values, isSubmitting, touched }) => (
            <Form ref={formRef} className={s.form}>
                <AutoClearErrorsComponent delay={2000}/>
              <div className={s.inputWrapper}>
                <InputComponent
                  name="Name"
                  as="input"
                  type="text"
                  label={t("formTranslation:formPlaseholders.name")}
                  require={true}
                />
                <ErrorMessage className={s.error} name="Name" component="p" />
              </div>
              <div className={s.inputWrapper}>
                <InputComponent
                  name="Company"
                  as="input"
                  type="text"
                  label={t("formTranslation:formPlaseholders.company")}
                />
                <ErrorMessage
                  className={s.error}
                  name="Company"
                  component="p"
                />
              </div>
              <div className={s.inputWrapper}>
                <InputComponent
                  name="Phone"
                  as="input"
                  type="number"
                  label={t("formTranslation:formPlaseholders.telefon")}
                  require={true}
                />
                <ErrorMessage className={s.error} name="Phone" component="p" />
              </div>
              <div className={s.inputWrapper}>
                <InputComponent
                  name="Email"
                  as="input"
                  type="text"
                  label={t("formTranslation:formPlaseholders.email")}
                  require={true}
                />
                <ErrorMessage className={s.error} name="Email" component="p" />
              </div>
              <div className={s.inputWrapper}>
                <InputComponent
                  name="Text"
                  as="textarea"
                  type="text"
                  label={t("formTranslation:formPlaseholders.text")}
                />
                <ErrorMessage className={s.error} name="Text" component="p" />
              </div>
              <label className={s.checkbox}>
                <Field
                  type="checkbox"
                  name="agree"
                  className={clsx(
                    s.checkboxField,
                    !values.agree && touched.agree && s.checkboxFieldError
                  )}
                />
                <div className={s.checkWrap}>
                <span className={s.checkboxText} >
                  {t("formTranslation:formPlaseholders.agree")}
                </span>
                <button className={s.checkLink} onClick={() => toggleModal(setOpenLink)}>
                 <svg className={s.fileText2} ><use href="/svg/symbol-defs.svg#icon-file-text2"></use></svg>
                </button>
                </div>
              </label>
              <button
                className={s.submitBtn}
                disabled={isSubmitting}
                type="submit"
              >
                {isSubmitting ? t("formTranslation:button.sending") : t("formTranslation:button.send")}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default SubmitForm;
