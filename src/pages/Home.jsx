import AboutUs from "../components/AboutUs"
import Header from "../components/Header"
import LatestBlog from "../components/LatestBlog"
import OurClientSay from "../components/OurClientSay"
import OurProjects from "../components/OurProjects"
import Services from "../components/Services"

const Home = () => {
    return (
        <>
            <Header />
            <AboutUs />
            <Services />
            <OurProjects />
            <OurClientSay />
            <LatestBlog />
        </>
    )
}

export default Home
