import React, { FC } from "react";
import { Select, MenuItem } from "@mui/material";

type LanguageSwitcherProps = {
  language: string;
  onChangeLanguage: Function;
};
const LanguageSwitcher: FC<LanguageSwitcherProps> = ({
  language,
  onChangeLanguage,
}) => {
    console.log(language)
  return (
    <Select value={language} onChange={(e) => onChangeLanguage(e)}>
      <MenuItem value={"en"}>en</MenuItem>
      <MenuItem value={"fr"}>fr</MenuItem>
    </Select>
  );
};

export default LanguageSwitcher;
