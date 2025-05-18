import { Link } from "react-router-dom"

const ProductsHeader = () => {
    return (
        <div className="ProductsHeader TopHeader">
            <div className="shadow"></div>
            <div className="container">
                <div className="row">
                    <div className="col-12 zIndex">
                        <h1>Mahsulotlarimiz</h1>
                        <div className="linkWrap">
                            <Link to={'/'}>Home</Link>
                            <div className="circle"></div>
                            <Link className="active" to={'/products'}>Mahsulotlarimiz</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductsHeader
