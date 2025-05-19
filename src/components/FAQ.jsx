import { useEffect, useState } from "react"
import { Accordion } from "react-bootstrap"
import { useTranslation } from "react-i18next"
import httpClient from "../shared/axios"
import { LANGUANGE } from "../locale"
import parse from "html-react-parser";
import Loading from "./Loading"

const FAQ = () => {
    const { t } = useTranslation()
    const [datas, setDatas] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        const getData = async () => {
            setIsLoading(true);
            try {
                const { data } = await httpClient(`/web/faqs/?lang=${LANGUANGE}`);
                setDatas(data);
            } catch (error) {
                console.error("Failed to fetch news:", error);
            } finally {
                setIsLoading(false);
            }
        };
        getData();
    }, []);

    return (
        <div className="FAQ">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h6 className="title">
                            <span><img src="./setting.png" alt="" /></span>
                            {t('faq1')}
                        </h6>
                    </div>
                    <div className="col-12">
                        <div className="topWrap">
                            <h1>{t('faq2')} <span>{t('faq3')}</span></h1>
                        </div>
                    </div>
                </div>
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <img src="./faq.png" alt="" className="w-100" />
                    </div>

                    <div className="col-lg-6">
                        <Accordion defaultActiveKey="0">
                            {
                                isLoading ? (
                                    <Loading />
                                ) : datas.length > 0 ? (
                                    <>

                                        {datas.map((item, index) => (
                                            <Accordion.Item eventKey={index}>
                                                <Accordion.Header>{item.question}</Accordion.Header>
                                                <Accordion.Body>
                                                    {parse(item.answer || '')}
                                                </Accordion.Body>
                                            </Accordion.Item>
                                        ))}
                                    </>
                                ) : (
                                    <p>No FAQs available.</p>
                                )
                            }
                        </Accordion>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default FAQ