import { Link } from "react-router-dom"

const AboutUsHeader = () => {
    return (
        <div className="AboutUsHeader TopHeader">
            <div className="shadow"></div>
            <div className="container">
                <div className="row">
                    <div className="col-12 zIndex">
                        <h1>Biz haqimizda</h1>
                        <div className="linkWrap">
                            <Link to={'/'}>Bosh sahifa</Link>
                            <div className="circle"></div>
                            <Link className="active" to={'/about-us'}>Biz haqimizda</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUsHeader
