import { Link } from "react-router-dom"

const LatestBlog = () => {
    return (
        <div className="LatestBlog">
            <div className="container">
                <div className="row">

                    <div className="col-lg-12">
                        <h6 className="title">
                            <span><img src="./setting.png" alt="" /></span>
                            latest blog
                        </h6>
                    </div>
                    <div className="col-lg-6">
                        <h1>Insights from our <span>latest blogs</span></h1>
                    </div>
                    <div className="col-lg-6">
                        <h2>Stay updated with the latest trends, innovations, and expert insights in the
                            manufacturing and industrial sectors</h2>
                    </div>
                </div>

                <div className="row rowWrap">
                    <div className="col-lg-6">
                        <Link to='/blog' className="cards">
                            <div className="img"><img src="./blog1.png" alt="" /></div>
                            <div className="wrap">
                                <h3>Sustainable Practices Reducing Waste in Industrial Production</h3>
                                <img src="./arrowTopRounded.png" alt="" />
                            </div>
                        </Link>
                    </div>
                    <div className="col-lg-6">
                        <Link to='/blog' className="cards">
                            <div className="img"><img src="./blog1.png" alt="" /></div>
                            <div className="wrap">
                                <h3>Sustainable Practices Reducing Waste in Industrial Production</h3>
                                <img src="./arrowTopRounded.png" alt="" />
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LatestBlog
