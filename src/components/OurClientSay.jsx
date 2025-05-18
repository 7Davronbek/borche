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
                        <div className="img"><img src="./clientSay.png" alt="" /></div>
                    </div>
                    <div className="col-lg-6">
                        <h6 className="title">
                            <span><img src="./setting.png" alt="" /></span>
                            OUR CLIENT SAY
                        </h6>
                        <h1>What our satisfied clients <span>are saying</span></h1>

                        <Swiper
                        loop={true}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            navigation={true} modules={[Navigation, Autoplay]} className="mySwiper">
                            <SwiperSlide>
                                <h2>
                                    "The team's attention to detail and commitment to quality
                                    exceeded our expectations. They delivered on time, and their
                                    innovative solutions improved our production efficiency by 30%.
                                    Highly recommended!"
                                </h2>

                                <div className="imgWrap">
                                    <img src="./person4.png" alt="" />
                                    <div>
                                        <h3>Brooklyn Simmons</h3>
                                        <h4>Homeowner</h4>
                                    </div>
                                </div>

                            </SwiperSlide>
                            <SwiperSlide>
                                <h2>
                                    "The team's attention to detail and commitment to quality
                                    exceeded our expectations. They delivered on time, and their
                                    innovative solutions improved our production efficiency by 30%.
                                    Highly recommended!"
                                </h2>

                                <div className="imgWrap">
                                    <img src="./person4.png" alt="" />
                                    <div>
                                        <h3>Brooklyn Simmons</h3>
                                        <h4>Homeowner</h4>
                                    </div>
                                </div>

                            </SwiperSlide>
                            <SwiperSlide>
                                <h2>
                                    "The team's attention to detail and commitment to quality
                                    exceeded our expectations. They delivered on time, and their
                                    innovative solutions improved our production efficiency by 30%.
                                    Highly recommended!"
                                </h2>

                                <div className="imgWrap">
                                    <img src="./person4.png" alt="" />
                                    <div>
                                        <h3>Brooklyn Simmons</h3>
                                        <h4>Homeowner</h4>
                                    </div>
                                </div>

                            </SwiperSlide>
                        </Swiper>
                    </div>

                    <div className="col-12">
                        <div className="logos">
                            <img src="./lorem1.png" alt="" />
                            <img src="./lorem2.png" alt="" />
                            <img src="./lorem3.png" alt="" />
                            <img src="./lorem4.png" alt="" />
                            <img src="./lorem5.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurClientSay
