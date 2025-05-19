import { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { useTranslation } from 'react-i18next';

const OurApproach = () => {
    const [key, setKey] = useState('home');
    const { t } = useTranslation()
    return (
        <>
            <div className="OurApproach">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-12 zIndex">
                            <h6 className="title">
                                <span><img src="./setting.png" alt="" /></span>
                                {t('approach1')}
                            </h6>
                        </div>
                        <div className="col-lg-6 zIndex">
                            <h1>{t('approach2')}</h1>
                        </div>
                        <div className="col-lg-6 zIndex">
                            <p>
                                {t('approach3')}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="bg"><img src="./serviceBg.png" alt="" /></div>
                <div className="gradient"></div>
            </div>
{/* 
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
                                <Tab eventKey="home" title="Bosh sahifa">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            Chap tomonda matn (left lorem)
                                        </div>
                                        <div className="col-lg-6">
                                            O‘ng tomonda matn (right lorem)
                                        </div>
                                    </div>
                                </Tab>
                                <Tab eventKey="contact" title="Aloqa">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            Chap tomonda matn (left lorem)
                                        </div>
                                        <div className="col-lg-6">
                                            O‘ng tomonda matn (right lorem)
                                        </div>
                                    </div>
                                </Tab>
                            </Tabs>
                        </div>
                    </div>
                </div>
            </div> */}
        </>
    )
}

export default OurApproach;
