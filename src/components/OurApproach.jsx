import { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

const OurApproach = () => {
    const [key, setKey] = useState('home');
    return (
        <>
            <div className="OurApproach">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-12 zIndex">
                            <h6 className="title">
                                <span><img src="./setting.png" alt="" /></span>
                                OUR APPROACH
                            </h6>
                        </div>
                        <div className="col-lg-6 zIndex">
                            <h1>Empowering sustainable <span>growth in industry</span></h1>
                        </div>
                        <div className="col-lg-6 zIndex">
                            <p>
                                We provide a wide range of services tailored to meet the unique needs of
                                modern industries. From precision manufacturing and advanced
                                automation to custom product design and efficient logistics.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="bg"><img src="./serviceBg.png" alt="" /></div>
                <div className="gradient"></div>
            </div>

            <div className="Tabs">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <Tabs
                                id="controlled-tab-example"
                                activeKey={key}
                                onSelect={(k) => setKey(k)}
                                className="mb-3"
                            >
                                <Tab eventKey="home" title="Home">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            Left lorem
                                        </div>
                                        <div className="col-lg-6">
                                            Right lorem
                                        </div>
                                    </div>
                                </Tab>
                                <Tab eventKey="contact" title="Contact">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            Left lorem
                                        </div>
                                        <div className="col-lg-6">
                                            Right lorem
                                        </div>
                                    </div>
                                </Tab>
                            </Tabs>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OurApproach
