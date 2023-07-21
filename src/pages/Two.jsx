import { useTranslation } from 'react-i18next';

const Two = ({style, children}) => {
  const { t } = useTranslation();
  style = style || {backgroundColor: "lightblue", margin: 0};
  return (
    <div>
      <h4 style={style}>
          {t("two")}
          {children}
      </h4>
    </div>
  );
};
  
  export default Two;