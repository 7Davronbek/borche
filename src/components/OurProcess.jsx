import { useTranslation } from "react-i18next";

const OurProcess = () => {
    const { t } = useTranslation()
    return (
        <div className="OurProcess">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h6 className="title">
                            <span><img src="./setting.png" alt="" /></span>
                            {t('process1')}
                        </h6>
                    </div>
                    <div className="col-12">
                        <div className="topWrap">
                            <h1>{t('process2')}</h1>
                            <h2>{t('process3')}</h2>
                        </div>
                    </div>
                </div>

                <div className="row align-items-center">

                    <div className="col-lg-6">
                        <div className="img"><img src="./process.png" alt="" className="" /></div>
                    </div>

                    <div className="col-lg-6">
                        <div className="wrap">
                            <h3>01</h3>
                            <div>
                                <h4>{t('process4')}</h4>
                                <h5>{t('process5')}</h5>
                            </div>
                        </div>
                        <div className="wrap active">
                            <h3>02</h3>
                            <div>
                                <h4>{t('process6')}</h4>
                                <h5>{t('process7')}</h5>
                            </div>
                        </div>
                        <div className="wrap">
                            <h3>03</h3>
                            <div>
                                <h4>{t('process8')}</h4>
                                <h5>{t('process9')}</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurProcess;
