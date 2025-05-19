import { useEffect, useState } from "react";
import httpClient from "../shared/axios";
import { LANGUANGE } from "../locale";
import Loading from "./Loading";
import { Link } from "react-router-dom";

const ProductList = () => {
    const [datas, setDatas] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        const getData = async () => {
            setIsLoading(true);
            try {
                const { data } = await httpClient(`/web/products/?lang=${LANGUANGE}`);
                setDatas(data);
            } catch (error) {
                console.error("Failed to fetch news:", error);
            } finally {
                setIsLoading(false);
            }
        };
        getData();
    }, []);
    return (
        <div className="ProductList">
            <div className="container">
                <div className="row">
                    {
                        isLoading ? (
                            <Loading />
                        ) : datas.length > 0 ? (
                            <>

                                {datas.map((item) => (
                                    <Link to={`/product/${item.id}`} key={item.id} className="col-lg-6 cards">
                                        <div className="img"><img className="w-100" src={item.gallery[0].image} alt="" /></div>
                                        <h3>{item.name}</h3>
                                        <p>#{item.series}</p>
                                    </Link>
                                ))}
                            </>
                        ) : (
                            <p>No data available.</p>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default ProductList
