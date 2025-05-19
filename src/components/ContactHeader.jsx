import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom"

const ContactHeader = () => {
    const { t } = useTranslation()
    return (
        <div className="ContactHeader TopHeader">
            <div className="shadow"></div>
            <div className="container">
                <div className="row">
                    <div className="col-12 zIndex">
                        <h1>{t('contactHeader1')}</h1>
                        <div className="linkWrap">
                            <Link to={'/'}>{t('navbar1')}</Link>
                            <div className="circle"></div>
                            <Link className="active" to={'/contacts'}>{t('contactHeader1')}</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactHeader
