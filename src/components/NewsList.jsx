import { Link } from "react-router-dom"
import httpClient from "../shared/axios"
import { useEffect, useState } from "react"
import Loading from "./Loading"
import { BORCHE_LANGUAGE, LANGUANGE } from "../locale"

const NewsList = () => {
    const [datas, setDatas] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        const getData = async () => {
            setIsLoading(true);
            try {
                const { data } = await httpClient(`/web/news/?lang=${LANGUANGE}`);
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
        <div className="NewsList">
            <div className="container">
                <div className="row">
                    {
                        isLoading ? (
                            <Loading />
                        ) : datas.length > 0 ? (
                            <>
                                <div className="col-lg-8">
                                    <Link to={`/news/${datas[0].id}`} className="cards big">
                                        <div className="img">
                                            <img src={datas[0].gallery[0].image} alt={datas[0].title} />
                                        </div>
                                        <h1>{datas[0].title}</h1>
                                        <h2>
                                            Read More <span><img src="./arrowTopYellow.png" alt="arrow" /></span>
                                        </h2>
                                    </Link>
                                </div>

                                <div className="col-lg-4 right">
                                    {datas.slice(1).map(item => (
                                        <Link to={`/news/${item.id}`} className="cards" key={item.id}>
                                            <div className="img">
                                                <img src={item.gallery[0].image} alt={item.title} />
                                            </div>
                                            <h1>{item.title}</h1>
                                            <h2>
                                                Read More <span><img src="./arrowTopYellow.png" alt="arrow" /></span>
                                            </h2>
                                        </Link>
                                    ))}
                                </div>
                            </>
                        ) : (
                            <p>No news available.</p>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default NewsList