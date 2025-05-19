import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom"

const LatestBlog = () => {
    const { t } = useTranslation()
    return (
        <div className="LatestBlog">
            <div className="container">
                <div className="row">

                    <div className="col-lg-12">
                        <h6 className="title">
                            <span><img src="./setting.png" /></span>
                            {t('latestBlog1')}
                        </h6>
                    </div>
                    <div className="col-lg-6">
                        <h1>{t('latestBlog2')}</h1>
                    </div>
                    <div className="col-lg-6">
                        <h2>{t('latestBlog3')}</h2>
                    </div>
                </div>

                <div className="row rowWrap">
                    <div className="col-lg-6">
                        <Link to='/blog' className="cards">
                            <div className="img"><img src="./blog1.png" /></div>
                            <div className="wrap">
                                <h3>Sanoat ishlab chiqarishda chiqindilarni kamaytirish bo‘yicha barqaror yondashuvlar</h3>
                                <img src="./arrowTopRounded.png" />
                            </div>
                        </Link>
                    </div>
                    <div className="col-lg-6">
                        <Link to='/blog' className="cards">
                            <div className="img"><img src="./blog1.png" /></div>
                            <div className="wrap">
                                <h3>Sanoat ishlab chiqarishda chiqindilarni kamaytirish bo‘yicha barqaror yondashuvlar</h3>
                                <img src="./arrowTopRounded.png" />
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LatestBlog;
