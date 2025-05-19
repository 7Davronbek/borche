import { useTranslation } from "react-i18next"

const Services = () => {
  const { t } = useTranslation()
    return (
        <>
            <div className="Services">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-12 zIndex">
                            <h6 className="title">
                                <span><img src="./setting.png" alt="" /></span>
                                {t('service1')}
                            </h6>
                        </div>
                        <div className="col-lg-6 zIndex">
                            <h1>{t('service2')} <span>{t('service3')}</span></h1>
                        </div>
                        <div className="col-lg-6 zIndex">
                            <p>{t('service4')}</p>
                        </div>
                    </div>
                </div>
                <div className="bg"><img src="./serviceBg.png" alt="" /></div>
                <div className="gradient"></div>
            </div>

            <div className="Cards">
                <div className="container">
                    <div className="row">
                        <div className="col-12 zIndex">
                            <div className="wrap borderRight">
                                <div className="cards">
                                    <div className="img"><img src="./service1.png" alt="" /></div>
                                    <h2>{t('service5')}</h2>
                                    <p style={{ marginTop: 0 }}>{t('service6')}</p>
                                </div>
                            </div>
                            <div className="wrap borderRight">
                                <div className="cards">
                                    <div className="img"><img src="./service2.png" alt="" /></div>
                                    <h2>{t('service7')}</h2>
                                    <p style={{ marginTop: 0 }}>{t('service8')}</p>
                                </div>
                            </div>
                            <div className="wrap borderRight">
                                <div className="cards">
                                    <div className="img"><img src="./service3.png" alt="" /></div>
                                    <h2>{t('service9')}</h2>
                                    <p style={{ marginTop: 0 }}>{t('service10')}</p>
                                </div>
                            </div>
                            <div className="wrap">
                                <div className="cards">
                                    <div className="img"><img src="./service4.png" alt="" /></div>
                                    <h2>{t('service11')}</h2>
                                    <p style={{ marginTop: 0 }}>{t('service12')}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Services
