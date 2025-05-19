import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom"

const NewsHeader = () => {
    const { t } = useTranslation()
    return (
        <div className="NewsHeader TopHeader">
            <div className="shadow"></div>
            <div className="container">
                <div className="row">
                    <div className="col-12 zIndex">
                        <h1>{t('navbar2')}</h1>
                        <div className="linkWrap">
                            <Link to={'/'}>{t('navbar1')}</Link>
                            <div className="circle"></div>
                            <Link className="active" to={'/news'}>{t('navbar2')}</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewsHeader
