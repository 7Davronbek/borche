import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import httpClient from "../shared/axios";
import { LANGUANGE } from "../locale";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import parse from "html-react-parser";
import Loading from "../components/Loading";
import ProductsHeader from "../components/ProductsHeader";

const ProductDetailPage = () => {
    const { id } = useParams();
    const [datas, setDatas] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const getData = async () => {
            setIsLoading(true);
            try {
                const { data } = await httpClient(`/web/products/${id}/?lang=${LANGUANGE}`);
                setDatas(data);
            } catch (error) {
                console.error("Failed to fetch data:", error);
            } finally {
                setIsLoading(false);
            }
        };
        getData();
    }, [id]);

    if (isLoading) {
        return (
            <>
                <ProductsHeader />
                <Loading />
            </>
        );
    }

    if (!datas || Object.keys(datas).length === 0) {
        return (
            <>
                <ProductsHeader />
                <div className="container text-center my-5">
                    <h4>No data available.</h4>
                </div>
            </>
        );
    }

    return (
        <>
            <ProductsHeader />
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

                            <h3>{datas.name}</h3>
                            <h3>{datas.clamping_force}</h3>
                            <h3>{datas.daylight_max}</h3>
                            <h3>{datas.ejection_stroke}</h3>
                            <h3>{datas.ejector_force}</h3>
                            <h3>{datas.ejector_pin}</h3>
                            <h3>{datas.energy_saving}</h3>
                            <h3>{datas.heater_zones}</h3>
                            <h3>{datas.heating_capacity}</h3>
                            <h3>{datas.injection_pressure}</h3>
                            <h3>{datas.injection_stroke}</h3>
                            <h3>{datas.machine_dimensions}</h3>
                            <h3>{datas.machine_weight}</h3>
                            <h3>{datas.mold_thickness_min_max}</h3>
                            <h3>{datas.nozzle_contact_force}</h3>
                            <h3>{datas.nozzle_stroke}</h3>
                            <h3>{datas.oil_tank_capacity}</h3>
                            <h3>{datas.opening_stroke}</h3>
                            <h3>{datas.platen_size}</h3>
                            <h3>{datas.pump_motor}</h3>
                            <h3>{datas.screw_diameter}</h3>
                            <h3>{datas.screw_ld_ratio}</h3>
                            <h3>{datas.screw_rotary_speed_max}</h3>
                            <h3>{datas.series}</h3>
                            <h3>{datas.short_description}</h3>
                            <h3>{datas.short_volume}</h3>
                            <h3>{datas.shot_weight_1}</h3>
                            <h3>{datas.shot_weight_2}</h3>
                            <h3>{datas.space_between_tie_bars}</h3>
                            <h3>{datas.system_pressure}</h3>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductDetailPage
