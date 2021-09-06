import { useState, useEffect } from "react";
import Select from "react-select";
import styled from "styled-components";
import { useLanguageUpdate, useLanguage } from "../LanguageContext";

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  padding: 1rem;
  z-index: 10;
  width: 120px;
`;

const LanguagePicker = () => {
  const [selection, setSelection] = useState(null);
  const appLanguage = useLanguage();
  const selectOptions = [
    { value: "en-US", label: "English" },
    { value: "es-US", label: "Español" },
  ];

  useEffect(() => {
    if (appLanguage) {
      const defaultOption = selectOptions.find(
        (opt) => opt.value === appLanguage
      );
      setSelection(defaultOption);
    }
  }, [appLanguage]);

  const updateLanguage = useLanguageUpdate();

  const handleChange = (optionSelected) => {
    setSelection(optionSelected);
    updateLanguage(optionSelected.value);
  };

  return (
    <Wrapper>
      <Select
        onChange={handleChange}
        options={selectOptions}
        value={selection}
      ></Select>
    </Wrapper>
  );
};

export default LanguagePicker;
