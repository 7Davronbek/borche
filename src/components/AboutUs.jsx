import { Link, useLocation } from "react-router-dom"

const AboutUs = () => {
    const location = useLocation()
    return (
        <div className="AboutUs">
            <div className="container">
                <div className="row">
                    <div className="col-lg-5">
                        <div className="topLeft">
                            <img src="./aboutUsLeft.png" alt="" />
                            <h1>25+</h1>
                            <h2>Year Of
                                <span>Experience</span>
                            </h2>
                        </div>
                        <div className="leftBottom">
                            <img src="./aboutUsRight.png" alt="" />
                        </div>
                    </div>

                    <div className="col-lg-6 ms-lg-auto">
                        <h6 className="title">
                            <span><img src="./setting.png" alt="" /></span>
                            ABOUT US
                        </h6>
                        <h3>Building quality through <span>industrial innovation</span>
                        </h3>
                        <h4>At the heart of our operations is a commitment to delivering superior products
                            through cutting-edge technology and innovative processes.</h4>

                        <div className="row">
                            <div className="col-lg-6 leftWrap">
                                <h5><span><img src="./verified.png" alt="" /></span> Sustainable Manufacturing</h5>
                                <h5><span><img src="./verified.png" alt="" /></span> Advanced Automation</h5>
                                <h5><span><img src="./verified.png" alt="" /></span> Efficient Production Processes</h5>
                                <h5><span><img src="./verified.png" alt="" /></span> Reliable Delivery Services</h5>
                                {location.pathname === '/' && <Link to='/about-us' className="btn myBtn"><span>Learn More</span> <span><img src="./arrowTop.png" alt="" /></span></Link>}
                            </div>
                            <div className="col-lg-6">
                                <div className="cards">
                                    <div className="starWrap">
                                        <img src="./star.png" alt="" />
                                        <img src="./star.png" alt="" />
                                        <img src="./star.png" alt="" />
                                        <img src="./star.png" alt="" />
                                        <img src="./star.png" alt="" />
                                    </div>
                                    <h5>15.5K Genuine Rating</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs
