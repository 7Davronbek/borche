
const ContactUs = () => {
    return (
        <div className="ContactUs">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <h6 className="title">
                            <span><img src="./setting.png" alt="" /></span>
                            CONTACT US
                        </h6>

                        <h1>Get in touch <span>with us</span></h1>
                        <h2>Reach out for any inquiries, support, or to discuss how we can meet your industrial needs.</h2>

                        <div className="wrap">
                            <div className="img"><img src="./contact1.png" alt="" /></div>
                            <div>
                                <h3>Contact</h3>
                                <a href="tel:">+1.809.120.670</a>
                            </div>
                        </div>
                        <div className="wrap">
                            <div className="img"><img src="./contact2.png" alt="" /></div>
                            <div>
                                <h3>E-mail</h3>
                                <a href="mailto:info@domainname.com">info@domainname.com</a>
                            </div>
                        </div>
                        <div className="wrap mb-0">
                            <div className="img"><img src="./contact3.png" alt="" /></div>
                            <div>
                                <h3>Our Address</h3>
                                <a href="#">37 San Juan Lane Graaf Florisstraat 22A,3021 CH </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <iframe className='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1932.764956494705!2d69.34543539597519!3d41.296972760046145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b698a8600e3%3A0x6de0dfe5784471d1!2sMedicana.uz!5e0!3m2!1sru!2s!4v1726407320942!5m2!1sru!2s" width="100%" height="100%" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-6 mx-auto">
                        <div className="contactWrap">
                            <h4>Contact <span>us</span></h4>
                            <input placeholder="Enter first name" type="text" className="form-control" />
                            <input placeholder="Enter last name" type="text" className="form-control" />
                            <input placeholder="Enter phone number" type="text" className="form-control" />
                            <button className="btn">Submit Message</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactUs
