import { Link } from "react-router-dom"

const ContactHeader = () => {
    return (
        <div className="ContactHeader TopHeader">
            <div className="shadow"></div>
            <div className="container">
                <div className="row">
                    <div className="col-12 zIndex">
                        <h1>Bog’lanish</h1>
                        <div className="linkWrap">
                            <Link to={'/'}>Home</Link>
                            <div className="circle"></div>
                            <Link className="active" to={'/contacts'}>About Us</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactHeader
