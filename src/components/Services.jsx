const Services = () => {
    return (
        <>
            <div className="Services">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-12 zIndex">
                            <h6 className="title">
                                <span><img src="./setting.png" alt="" /></span>
                                Xizmatlar
                            </h6>
                        </div>
                        <div className="col-lg-6 zIndex">
                            <h1>Sanoat sohasida <span>mukammallik uchun keng qamrovli yechimlar</span></h1>
                        </div>
                        <div className="col-lg-6 zIndex">
                            <p>Biz zamonaviy sanoat ehtiyojlariga moslashtirilgan keng ko‘lamli xizmatlarni taklif qilamiz. Aniq ishlab chiqarish, ilg‘or avtomatlashtirish, maxsus mahsulot dizayni va samarali logistika.</p>
                        </div>
                    </div>
                </div>
                <div className="bg"><img src="./serviceBg.png" alt="" /></div>
                <div className="gradient"></div>
            </div>

            <div className="Cards">
                <div className="container">
                    <div className="row">
                        <div className="col-12 zIndex">
                            <div className="wrap borderRight">
                                <div className="cards">
                                    <div className="img"><img src="./service1.png" alt="" /></div>
                                    <h2 style={{ marginBottom: "8px" }}>O'zbekiston bo'ylab tezkor yetkazib berish</h2>
                                    <p style={{ marginTop: 0 }}>Mijozlarga tez va ishonchli yetkazib berish xizmatini taqdim etamiz, barcha hududlarni qamrab olamiz.</p>
                                </div>
                            </div>
                            <div className="wrap borderRight">
                                <div className="cards">
                                    <div className="img"><img src="./service2.png" alt="" /></div>
                                    <h2 style={{ marginBottom: "8px" }}>Sanoat avtomatlashtirish va robototexnika</h2>
                                    <p style={{ marginTop: 0 }}>Zamonaviy sanoat jarayonlarini avtomatlashtirish orqali samaradorlik va sifatni oshiramiz.</p>
                                </div>
                            </div>
                            <div className="wrap borderRight">
                                <div className="cards">
                                    <div className="img"><img src="./service3.png" alt="" /></div>
                                    <h2 style={{ marginBottom: "8px" }}>Mahsulot dizayni va prototip tayyorlash</h2>
                                    <p style={{ marginTop: 0 }}>Innovatsion dizayn va sifatli prototiplar ishlab chiqamiz, mijoz talablariga mos keladi.</p>
                                </div>
                            </div>
                            <div className="wrap">
                                <div className="cards">
                                    <div className="img"><img src="./service4.png" alt="" /></div>
                                    <h2 style={{ marginBottom: "8px" }}>Uskunalarni texnik xizmat ko‘rsatish va kafolat</h2>
                                    <p style={{ marginTop: 0 }}>Bir yil davomida to‘liq xizmat ko‘rsatish va texnik yordam bilan kafolat beramiz.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Services
