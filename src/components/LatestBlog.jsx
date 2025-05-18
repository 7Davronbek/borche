import { Link } from "react-router-dom"

const LatestBlog = () => {
    return (
        <div className="LatestBlog">
            <div className="container">
                <div className="row">

                    <div className="col-lg-12">
                        <h6 className="title">
                            <span><img src="./setting.png" /></span>
                            Yangiliklar
                        </h6>
                    </div>
                    <div className="col-lg-6">
                        <h1>So'nggi yangiliklar</h1>
                    </div>
                    <div className="col-lg-6">
                        <h2>So‘nggi tendensiyalar, innovatsiyalar va sanoat tarmoqlaridagi ekspert fikrlari bilan doimo xabardor bo‘ling</h2>
                    </div>
                </div>

                <div className="row rowWrap">
                    <div className="col-lg-6">
                        <Link to='/blog' className="cards">
                            <div className="img"><img src="./blog1.png" /></div>
                            <div className="wrap">
                                <h3>Sanoat ishlab chiqarishda chiqindilarni kamaytirish bo‘yicha barqaror yondashuvlar</h3>
                                <img src="./arrowTopRounded.png" />
                            </div>
                        </Link>
                    </div>
                    <div className="col-lg-6">
                        <Link to='/blog' className="cards">
                            <div className="img"><img src="./blog1.png" /></div>
                            <div className="wrap">
                                <h3>Sanoat ishlab chiqarishda chiqindilarni kamaytirish bo‘yicha barqaror yondashuvlar</h3>
                                <img src="./arrowTopRounded.png" />
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LatestBlog;
