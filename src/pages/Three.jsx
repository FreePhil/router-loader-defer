import { useTranslation } from 'react-i18next';

const Three = ({style, children}) => {
  const { t } = useTranslation();
  style = style || {backgroundColor: "lightyellow", margin: 0};
  return (
    <div>
      <h4 style={style}>
          {t("three")}
          {children}
      </h4>
    </div>
  );
};
  
  export default Three;