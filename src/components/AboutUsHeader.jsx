import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom"

const AboutUsHeader = () => {
    const { t } = useTranslation()
    return (
        <div className="AboutUsHeader TopHeader">
            <div className="shadow"></div>
            <div className="container">
                <div className="row">
                    <div className="col-12 zIndex">
                        <h1>{t('navbar4')}</h1>
                        <div className="linkWrap">
                            <Link to={'/'}>{t('navbar1')}</Link>
                            <div className="circle"></div>
                            <Link className="active" to={'/about-us'}>{t('navbar4')}</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUsHeader
