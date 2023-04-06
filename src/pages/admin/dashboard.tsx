import React, { useState } from 'react';
import { useTranslation } from "react-i18next";
import i18n from "i18next";
import LanguageSwitcher from '@components/base/languageSwitcher';

const Dashboard = () => {
  const [language, setLanguage] = useState('en')
  const { t } = useTranslation();

  const onChangeLanguage = async(e:any) => {
    await  i18n.changeLanguage(e.target.value);
    setLanguage(e.target.value)
  };
  let value = 'value here'
  return (
    <div>
      <LanguageSwitcher language={language} onChangeLanguage={onChangeLanguage}/>
      <p>{`${t('caption')} ${value}`}</p>
      <p>{t('description')}</p>
    </div>
  )
}

export default Dashboard;