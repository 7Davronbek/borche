
const Services = () => {
    return (
        <>
            <div className="Services">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-12 zIndex">
                            <h6 className="title">
                                <span><img src="./setting.png" alt="" /></span>
                                services
                            </h6>
                        </div>
                        <div className="col-lg-6 zIndex">
                            <h1>Comprehensive solutions <span>for industrial excellence</span></h1>
                        </div>
                        <div className="col-lg-6 zIndex">
                            <p>We provide a wide range of services tailored to meet the unique needs of
                                modern industries. From precision manufacturing and advanced
                                automation to custom product design and efficient logistics.</p>
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
                                    <h2>Custom Manufacturing Solution</h2>
                                    <div className="arrow"><img src="./arrowRight.png" alt="" /></div>
                                </div>
                            </div>
                            <div className="wrap borderRight">
                                <div className="cards">
                                    <div className="img"><img src="./service2.png" alt="" /></div>
                                    <h2>Industrial Automation And Robotics</h2>
                                    <div className="arrow"><img src="./arrowRight.png" alt="" /></div>
                                </div>
                            </div>
                            <div className="wrap borderRight">
                                <div className="cards">
                                    <div className="img"><img src="./service3.png" alt="" /></div>
                                    <h2>Product Design And Prototyping</h2>
                                    <div className="arrow"><img src="./arrowRight.png" alt="" /></div>
                                </div>
                            </div>
                            <div className="wrap">
                                <div className="cards">
                                    <div className="img"><img src="./service4.png" alt="" /></div>
                                    <h2>Equipment Maintenance Support</h2>
                                    <div className="arrow"><img src="./arrowRight.png" alt="" /></div>
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
