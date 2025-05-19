import { useTranslation } from "react-i18next";

const Header = () => {
  const { t } = useTranslation()
  return (
    <div className="Header">
      <div className="container">
        <div className="row">
          <div className="col-12 zIndex">
            <h1>{t('header1')} <span>{t('header2')}</span></h1>
            <h2>{t('header3')}</h2>
          </div>
          <div className="col-12 bottom zIndex">
            <div className="wrap">
              <span><img src="./verified.png" alt="" /></span>
              <h3>{t('header4')}</h3>
            </div>
            <div className="wrap">
              <span><img src="./verified.png" alt="" /></span>
              <h3>{t('header5')}</h3>
            </div>
            <div className="wrap">
              <span><img src="./verified.png" alt="" /></span>
              <h3>{t('header6')}</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="gradient"></div>
      <div className="bgImage"><img src="./headerBackground.png" alt="" /></div>
    </div>
  )
}

export default Header
