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
                            <h1>23+</h1>
                            <h2>Yillik <span>tajriba</span></h2>
                        </div>

                        <div className="leftBottom">
                            <img src="./aboutUsRight.png" alt="" />
                        </div>
                    </div>

                    <div className="col-lg-6 ms-lg-auto">
                        <h6 className="title">
                            <span><img src="./setting.png" alt="" /></span>
                            BIZ HAQIMIZDA
                        </h6>
                        <h3>Xitoyda yetakchi, <span>IMM sanoatida peshqadam</span></h3>
                        <h4>Bizning faoliyatimiz markazida zamonaviy texnologiyalar va innovatsion jarayonlar orqali yuqori sifatli mahsulotlar yetkazib berishga sodiqlik turadi.</h4>

                        <div className="row">
                            <div className="col-lg-6 leftWrap">
                                <h5><span><img src="./verified.png" alt="" /></span> Barqaror ishlab chiqarish</h5>
                                <h5><span><img src="./verified.png" alt="" /></span> Ilg‘or avtomatlashtirish</h5>
                                <h5><span><img src="./verified.png" alt="" /></span> Samarali ishlab chiqarish jarayonlari</h5>
                                <h5><span><img src="./verified.png" alt="" /></span> Ishonchli yetkazib berish xizmati</h5>
                                {location.pathname === '/' && (
                                    <Link to='/about-us' className="btn myBtn">
                                        <span>Batafsil ma'lumot</span> 
                                        <span><img src="./arrowTop.png" alt="" /></span>
                                    </Link>
                                )}
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
                                    <h5>15.5K haqiqiy reyting</h5>
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
