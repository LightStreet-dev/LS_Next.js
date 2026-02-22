import { useFormikContext } from "formik";
import { useEffect } from "react";

const AutoClearErrorsComponent: React.FC<{ delay?: number }> = ({ delay = 10000 }) => {
  const { errors, setErrors } = useFormikContext<Record<string, string | undefined>>();

  useEffect(() => {
    if (!errors || Object.keys(errors).length === 0) return;

    const timer = setTimeout(() => {
      setErrors({});
    }, delay);

    return () => clearTimeout(timer);
  }, [errors, setErrors, delay]);

  return null; // нічого не рендерить
};

export default AutoClearErrorsComponent;
