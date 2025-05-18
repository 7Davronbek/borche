import AboutUs from "../components/AboutUs"
import Header from "../components/Header"
import LatestBlog from "../components/LatestBlog"
import OurClientSay from "../components/OurClientSay"
import OurProjects from "../components/OurProjects"
import OurStory from "../components/OurStory"
import Services from "../components/Services"

const Home = () => {
    return (
        <>
            <Header />
            <AboutUs />
            <Services />
            <OurStory />
            <OurProjects />
            <OurClientSay />
            <LatestBlog />
        </>
    )
}

export default Home
