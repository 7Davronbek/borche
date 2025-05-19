import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import httpClient from "../shared/axios";
import { LANGUANGE } from "../locale";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import NewsHeader from "../components/NewsHeader";
import parse from "html-react-parser";
import Loading from "../components/Loading";

const NewsDetailPage = () => {
    const { id } = useParams();
    const [datas, setDatas] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const getData = async () => {
            setIsLoading(true);
            try {
                const { data } = await httpClient(`/web/news/${id}/?lang=${LANGUANGE}`);
                setDatas(data);
            } catch (error) {
                console.error("Failed to fetch news:", error);
            } finally {
                setIsLoading(false);
            }
        };
        getData();
    }, [id]);

    if (isLoading) {
        return (
            <>
                <NewsHeader />
                <Loading />
            </>
        );
    }

    if (!datas || Object.keys(datas).length === 0) {
        return (
            <>
                <NewsHeader />
                <div className="container text-center my-5">
                    <h4>No news data available.</h4>
                </div>
            </>
        );
    }

    return (
        <>
            <NewsHeader />
            <div className="NewsDetailPage">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 mx-auto">

                            {Array.isArray(datas?.gallery) && datas.gallery.length > 0 && (
                                <Swiper
                                    slidesPerView={1}
                                    spaceBetween={30}
                                    pagination={{ clickable: true }}
                                    loop={true}
                                    autoplay={{ delay: 2500, disableOnInteraction: false }}
                                    modules={[Pagination]}
                                    className="mySwiper"
                                >
                                    {datas.gallery.map((item) => (
                                        <SwiperSlide key={item.id}>
                                            <div style={{ height: '500px' }} className="img">
                                                <img
                                                    className="w-100 h-100 object-fit-contain"
                                                    src={item.image}
                                                    alt={datas?.title || "Gallery image"}
                                                />
                                            </div>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            )}

                            <h3>{datas?.title || "No title available"}</h3>
                            <p>{parse(datas?.description || "No description available.")}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default NewsDetailPage;
