import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom"

const AboutUs = () => {
  const { t } = useTranslation()
    return (
        <div className="AboutUs">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-5">
                        <div className="topLeft">
                            <img src="./aboutUsLeft.png" alt="" />
                            <h1>23+</h1>
                            <h2>{t('about1')} <span>{t('about2')}</span></h2>
                        </div>

                        <div className="leftBottom">
                            <img src="./aboutUsRight.png" alt="" />
                        </div>
                    </div>

                    <div className="col-lg-6 ms-lg-auto">
                        <h6 className="title">
                            <span><img src="./setting.png" alt="" /></span>
                            {t('about3')}
                        </h6>
                        <h3>{t('about4')} <span>{t('about5')}</span></h3>
                        <h4>{t('about6')}</h4>

                        <div className="row">
                            <div className="col-lg-6 leftWrap">
                                <h5><span><img src="./verified.png" alt="" /></span> {t('about7')}</h5>
                                <h5><span><img src="./verified.png" alt="" /></span> {t('about8')}</h5>

                                <Link to='/about-us' className="btn myBtn">
                                    <span>{t('learnMore')}</span>
                                    <span><img src="./arrowTop.png" alt="" /></span>
                                </Link>
                                {/* {location.pathname === '/' && (
                                    <Link to='/about-us' className="btn myBtn">
                                        <span>Batafsil ma'lumot</span> 
                                        <span><img src="./arrowTop.png" alt="" /></span>
                                    </Link>
                                )} */}
                            </div>
                            <div className="col-lg-6">
                                <h5><span><img src="./verified.png" alt="" /></span> {t('about9')}</h5>
                                <h5><span><img src="./verified.png" alt="" /></span> {t('about10')}</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs
