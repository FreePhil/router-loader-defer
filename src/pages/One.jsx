import React from 'react';
import { useTranslation } from 'react-i18next';

const One = ({style, children}) => {
    const { t } = useTranslation();
    style = style || {backgroundColor: "lightgray", margin: 0};
    return (
      <div>
        <h4 style={style}>
            {t('one')}
            {children}
        </h4>
      </div>
    );
  };
  
  export default One;