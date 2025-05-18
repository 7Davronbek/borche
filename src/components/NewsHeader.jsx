import { Link } from "react-router-dom"

const NewsHeader = () => {
    return (
        <div className="NewsHeader TopHeader">
            <div className="shadow"></div>
            <div className="container">
                <div className="row">
                    <div className="col-12 zIndex">
                        <h1>Yangiliklar</h1>
                        <div className="linkWrap">
                            <Link to={'/'}>Home</Link>
                            <div className="circle"></div>
                            <Link className="active" to={'/news'}>Yangiliklar</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewsHeader
