import { useTranslation } from "react-i18next"

const OurProjects = () => {
    const { t } = useTranslation()
    return (
        <div className="OurProjects">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <h6 className="title">
                            <span><img src="./setting.png" alt="" /></span>
                            {t('ourProject1')}
                        </h6>
                    </div>
                    <div className="col-lg-6">
                        <h1>{t('ourProject2')}</h1>
                    </div>
                    <div className="col-lg-6">
                        <h2>{t('ourProject3')}</h2>
                    </div>
                </div>
                <div className="row cardsWrap">
                    <div className="col-lg-6 mb-5">
                        <div className="cards">
                            <div className="img">
                                <img src="./projects1.png" alt="" />
                                <h5>{t('ourProject4')}</h5>
                            </div>
                            <h3>{t('ourProject5')}</h3>
                        </div>
                    </div>
                    {/* <div className="col-lg-6 mb-5">
                        <div className="cards">
                            <div className="img">
                                <img src="./projects1.png" alt="" />
                                <h5>{t('ourProject6')}</h5>
                            </div>
                            <h3>Energiya tejovchi kompressor</h3>
                        </div>
                    </div>
                    <div className="col-lg-6 mb-5">
                        <div className="cards">
                            <div className="img">
                                <img src="./projects1.png" alt="" />
                                <h5>Yordamchi vositalar</h5>
                            </div>
                            <h3>IoT asosidagi boshqaruv paneli</h3>
                        </div>
                    </div>
                    <div className="col-lg-6 mb-5">
                        <div className="cards">
                            <div className="img">
                                <img src="./projects1.png" alt="" />
                                <h5>Automation</h5>
                            </div>
                            <h3>Total Quality Management Implementation</h3>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default OurProjects
