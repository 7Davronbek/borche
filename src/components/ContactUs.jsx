import { useState } from "react"
import { useTranslation } from "react-i18next"
import httpClient from "../shared/axios"
import { toast } from "react-toastify"

const ContactUs = () => {
    const [full_name, setFullName] = useState('')
    const [phone_number, setPhoneNumber] = useState('')
    const { t } = useTranslation()

    const handleForm = async (e) => {
        e.preventDefault()
        await httpClient.post('/bot/message/', { full_name, phone_number })
        toast.success("Success")
        setPhoneNumber('')
        setFullName('')
    }
    return (
        <div className="ContactUs">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <h6 className="title">
                            <span><img src="./setting.png" alt="" /></span>
                            {t('contactUs1')}
                        </h6>
                        <h1>{t('contactUs2')}</h1>
                        <h2>{t('contactUs3')}</h2>

                        <div className="wrap">
                            <div className="img"><img src="./contact1.png" alt="Telefon raqam" /></div>
                            <div>
                                <h3>{t('contactUs4')}</h3>
                                <a href="tel:+1809120670">+1 809 120 670</a>
                            </div>
                        </div>
                        <div className="wrap">
                            <div className="img"><img src="./contact2.png" alt="Email" /></div>
                            <div>
                                <h3>{t('contactUs5')}</h3>
                                <a href="mailto:info@domainname.com">info@borche.uz</a>
                            </div>
                        </div>
                        <div className="wrap mb-0">
                            <div className="img"><img src="./contact3.png" alt="Manzil" /></div>
                            <div>
                                <h3>{t('contactUs6')}</h3>
                                <a href="#">{t('contactUs7')}</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <iframe
                            className='map'
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3488.924828436402!2d69.2603773592001!3d41.34213507683886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b676d1b0227%3A0x6afd84e2709d13f2!2sBorche!5e0!3m2!1sen!2s!4v1687429828415!5m2!1sen!2s"
                            width="100%"
                            height="100%"
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Manzil xaritasi"
                        ></iframe>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6 mx-auto">
                        <form onSubmit={handleForm} className="contactWrap">
                            <h4>{t('contactUs8')}</h4>
                            <input value={full_name} onChange={e => setFullName(e.target.value)} required placeholder={t('contactUs9')} type="text" className="form-control" />
                            <input value={phone_number} onChange={e => setPhoneNumber(e.target.value)} required placeholder={t('contactUs10')} type="text" className="form-control" />
                            <button type="submit" className="btn">{t('contactUs11')}</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactUs
