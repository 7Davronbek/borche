import { Link } from "react-router-dom"

const AboutUsHeader = () => {
    return (
        <div className="AboutUsHeader TopHeader">
            <div className="shadow"></div>
            <div className="container">
                <div className="row">
                    <div className="col-12 zIndex">
                        <h1>About Us</h1>
                        <div className="linkWrap">
                            <Link to={'/'}>Home</Link>
                            <div className="circle"></div>
                            <Link className="active" to={'/about-us'}>About Us</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUsHeader
