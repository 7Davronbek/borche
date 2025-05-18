import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

const OurClientSay = () => {
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
                            MIJOZLARIMIZ FIKRI
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
                            <SwiperSlide>
                                <h2>
                                    “Jamoaning diqqat-e’tibori va sifatga bo‘lgan sadoqati bizning kutganimizdan oshdi. Ular belgilangan muddatda ishni topshirishdi va innovatsion yechimlari ishlab chiqarish samaradorligimizni 30% ga oshirdi. Tavsiya qilaman!”
                                </h2>
                                <div className="imgWrap">
                                    <img src="./person4.png" />
                                    <div>
                                        <h3>Brooklyn Simmons</h3>
                                        <h4>Uy egasi</h4>
                                    </div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <h2>
                                    “Jamoaning diqqat-e’tibori va sifatga bo‘lgan sadoqati bizning kutganimizdan oshdi. Ular belgilangan muddatda ishni topshirishdi va innovatsion yechimlari ishlab chiqarish samaradorligimizni 30% ga oshirdi. Tavsiya qilaman!”
                                </h2>
                                <div className="imgWrap">
                                    <img src="./person4.png" />
                                    <div>
                                        <h3>Brooklyn Simmons</h3>
                                        <h4>Uy egasi</h4>
                                    </div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <h2>
                                    “Jamoaning diqqat-e’tibori va sifatga bo‘lgan sadoqati bizning kutganimizdan oshdi. Ular belgilangan muddatda ishni topshirishdi va innovatsion yechimlari ishlab chiqarish samaradorligimizni 30% ga oshirdi. Tavsiya qilaman!”
                                </h2>
                                <div className="imgWrap">
                                    <img src="./person4.png" />
                                    <div>
                                        <h3>Brooklyn Simmons</h3>
                                        <h4>Uy egasi</h4>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>

                    <div className="col-12">
                        <div className="logos">
                            <img src="./lorem1.png" />
                            <img src="./lorem2.png" />
                            <img src="./lorem3.png" />
                            <img src="./lorem4.png" />
                            <img src="./lorem5.png" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OurClientSay;
