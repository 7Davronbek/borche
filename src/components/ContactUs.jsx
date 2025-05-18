const ContactUs = () => {
    return (
        <div className="ContactUs">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <h6 className="title">
                            <span><img src="./setting.png" alt="" /></span>
                            BIZ BILAN BOG‘LANING
                        </h6>
                        <h1>Hoziroq qo'ng'iroq qiling</h1>
                        <h2>Har qanday savol, qo‘llab-quvvatlash yoki sanoat ehtiyojlaringiz haqida suhbatlashish uchun biz bilan bog‘laning.</h2>

                        <div className="wrap">
                            <div className="img"><img src="./contact1.png" alt="Telefon raqam" /></div>
                            <div>
                                <h3>Telefon</h3>
                                <a href="tel:+1809120670">+1 809 120 670</a>
                            </div>
                        </div>
                        <div className="wrap">
                            <div className="img"><img src="./contact2.png" alt="Email" /></div>
                            <div>
                                <h3>Elektron pochta</h3>
                                <a href="mailto:info@domainname.com">info@borche.uz</a>
                            </div>
                        </div>
                        <div className="wrap mb-0">
                            <div className="img"><img src="./contact3.png" alt="Manzil" /></div>
                            <div>
                                <h3>Manzilimiz</h3>
                                <a href="#">Taxtapul ko'chasi 348, Toshkent, O'zbekiston</a>
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
                        <div className="contactWrap">
                            <h4>Bizga xabar qoldiring</h4>
                            <input placeholder="Ismingizni kiriting" type="text" className="form-control" />
                            <input placeholder="Familiyangizni kiriting" type="text" className="form-control" />
                            <input placeholder="Telefon raqamingizni kiriting" type="text" className="form-control" />
                            <button className="btn">Jo'natish</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactUs
