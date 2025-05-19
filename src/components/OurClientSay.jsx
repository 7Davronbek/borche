import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import httpClient from '../shared/axios';
import { LANGUANGE } from '../locale';
import Loading from './Loading';

const OurClientSay = () => {
    const { t } = useTranslation()
    const [datas, setDatas] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        const getData = async () => {
            setIsLoading(true);
            try {
                const { data } = await httpClient(`/web/comments/?lang=${LANGUANGE}`);
                setDatas(data);
            } catch (error) {
                console.error("Failed to fetch news:", error);
            } finally {
                setIsLoading(false);
            }
        };
        getData();
    }, []);

    const [partners, setPartners] = useState([])
    const [isLoading2, setIsLoading2] = useState(false)

    useEffect(() => {
        const getData = async () => {
            setIsLoading2(true);
            try {
                const { data } = await httpClient(`/web/partners/?lang=${LANGUANGE}`);
                setPartners(data);
            } catch (error) {
                console.error("Failed to fetch news:", error);
            } finally {
                setIsLoading2(false);
            }
        };
        getData();
    }, []);

    return (
        <div className="OurClientSay">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="img"><img src="./clientSay.png" /></div>
                    </div>
                    <div className="col-lg-6">
                        <h6 className="title">
                            <span><img src="./setting.png" /></span>
                            {t('clientSay1')}
                        </h6>
                        <br></br>
                        <Swiper
                            loop={true}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            navigation={true}
                            modules={[Navigation, Autoplay]}
                            className="mySwiper"
                        >
                            {
                                isLoading ? (
                                    <Loading />
                                ) : datas.length > 0 ? (
                                    <>

                                        {datas.map((item) => (
                                            <SwiperSlide>
                                                <h2>
                                                    {item?.comment}
                                                </h2>
                                                <div className="imgWrap">
                                                    <img src="./person4.png" />
                                                    <div>
                                                        <h3>{item?.first_name + ' ' + item.last_name}</h3>
                                                        <h4>{t('clientSay4')}</h4>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                        ))}
                                    </>
                                ) : (
                                    <p>No comments available.</p>
                                )
                            }
                        </Swiper>
                    </div>

                    <div className="col-12">
                        <div className="logos">
                            <Swiper
                                loop={true}
                                slidesPerView={5}
                                autoplay={{
                                    delay: 2500,
                                    disableOnInteraction: false,
                                }}
                                navigation={true}
                                modules={[Navigation, Autoplay]}
                                className="mySwiper2"
                            >
                                {
                                    isLoading2 ? (
                                        <Loading />
                                    ) : partners.length > 0 ? (
                                        <>

                                            {partners.map((item) => (
                                                <SwiperSlide>
                                                    <img src={item?.logo} />
                                                </SwiperSlide>
                                            ))}
                                        </>
                                    ) : (
                                        <p>No comments available.</p>
                                    )
                                }
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OurClientSay;
