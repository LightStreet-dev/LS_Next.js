import { Field } from "formik";
import s from "./InputComponent.module.css";
import { useId } from "react";
import clsx from "clsx";
interface inputProps {
  name: string;
  as: string;
  type: string;
  altDesing?: boolean;
  label?: string;
  require?: boolean;
}
const InputComponent: React.FC<inputProps> = ({
  name,
  as,
  type,
  altDesing = false,
  label,
  require = false,
}) => {
  const id = useId();
  return (
    <div className={s.fieldWrapper}>
      <Field
        className={clsx(s.fieldStyle, altDesing && s.inputStyleShort)}
        as={as}
        type={type}
        id={id}
        placeholder=" "
        name={name}
      />
      <label
        className={clsx(
          s.labelForm,
          type === "textarea" && s.labelFormTextArea, altDesing && 
          s.labelStyleShort,
        )}
        htmlFor={id}
      >
        {label}{" "}
        <span className={clsx(s.requireNone, require && s.require)}>*</span>
      </label>
    </div>
  );
};

export default InputComponent;
