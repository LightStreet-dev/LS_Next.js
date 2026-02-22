// LanguageChanger.tsx
"use client";
import ReactSelect from "react-select";
import type { StylesConfig } from "react-select";
import { useTranslation } from "react-i18next";
import s from "./LanguageChanger.module.css";

interface OptionType {
  value: string;
  label: string;
}

const customStyles: StylesConfig<OptionType, false> = {
  menu: (provided) => ({
    ...provided,
    backgroundColor: "transparent",
    backdropFilter: "blur(8px)",
    WebkitBackdropFilter: "blur(8px)",
    borderRadius: "8px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    zIndex: 1000,
    width: "50px",
  }),
  input: (provided) => ({
    ...provided,
    width: "50px",
    border: "none",
    padding: "0",
  }),
  option: (provided, state) => ({
    ...provided,
    width: "50px",
    color: "white",
    padding: "10px 0",
    cursor: "pointer",
    ":active": {
      backgroundColor: "#4c5eafff",
    },
    backgroundColor: state.isFocused
      ? "rgba(104, 147, 153, 0.34)"
      : "transparent",
  }),
  container: (provided) => ({
    ...provided,
    border: "none",
    padding: "0",
    margin: "0",
  }),
  control: (provided) => ({
    ...provided,
    backgroundColor: "transparent",
    border: "none",
    minHeight: "30px",
    width: "70px",
    boxShadow: "none",
  }),
  indicatorSeparator: () => ({
    display: "none",
  }),
  singleValue: (provided) => ({
    ...provided,
    border: "none",
    color: "var(--mainContentColor)",
  }),
  dropdownIndicator: (provided, state) => ({
    ...provided,
    padding: "0",
    color: state.selectProps.menuIsOpen ? "var(--mainContentColor)" : "gray",
    transition: "transform 0.5s ease, color 0.3s ease",
    transform: state.selectProps.menuIsOpen ? "rotate(180deg)" : "rotate(0deg)",
    "&:hover": {
      color: "var(--mainContentColor)",
    },
  }),
};

const languageOptions: OptionType[] = [
  { value: "en", label: "EN" },
  { value: "uk", label: "UA" },
  { value: "pl", label: "PL" },
];

const LanguageChanger: React.FC = () => {
  const { i18n } = useTranslation();

  const currentLang = i18n.resolvedLanguage || i18n.language || "en";
  const currentOption =
    languageOptions.find((opt) => opt.value === currentLang) ||
    languageOptions[0];

  const handleLanguageChange = (opt: OptionType) => {
    i18n.changeLanguage(opt.value);
    const url = new URL(window.location.href);
    url.searchParams.set("lng", opt.value);
    window.history.replaceState({}, "", url.toString());
  };

  return (
    <div className={s.lngSwitcher}>
      <ReactSelect<OptionType, false>
        styles={customStyles}
        value={currentOption}
        onChange={(opt) => opt && handleLanguageChange(opt)}
        options={languageOptions}
        isSearchable={false}
      />
    </div>
  );
};

export default LanguageChanger;