import { Link } from "react-router-dom"

const Footer = () => {
    return (
        <div className="Footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-10 mx-auto">
                        <div className="wrap">
                            <div>
                                <div className="logo"><img src="./logo.png" alt="" /></div>
                                <h1>© 2023 Borche.uz</h1>
                                <div className="socialWrap">
                                    <img src="./fb.png" alt="" />
                                    <img src="./insta.png" alt="" />
                                    <img src="./yt.png" alt="" />
                                </div>
                            </div>
                            <div>
                                <h2>Aloqa uchun</h2>
                                <h1><a href="#">Taxtapul ko'chasi, 348, Toshkent, O'zbekiston</a></h1>
                                <h1><a href="mailto:info@borche.uz">info@borche.uz</a></h1>
                                <h1><a href="tel: +998 (94) 060 00 10">+998 (94) 060 00 10</a></h1>
                            </div>
                            <div>
                                <h2>Ba'tafsil ma'lumot uchun</h2>
                                <h1><Link to='/'>Bosh sahifa</Link></h1>
                                <h1><Link to='/about-us'>Biz haqimizda</Link></h1>
                                <h1><Link to='/products'>Mahsulotlar</Link></h1>
                                <h1><Link to='/contacts'>Biz bilan bog'lanish</Link></h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
