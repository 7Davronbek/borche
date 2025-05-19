
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
// import Cursor from "./components/Cursor";
import Footer from "./components/Footer";
import ContactPage from "./pages/ContactPage";
import AboutUsPage from "./pages/AboutUsPage";
import NewsPage from "./pages/NewsPage";
import ProductsPage from "./pages/ProductsPage";
import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import { ru } from "./locale/ru";
import { uz } from "./locale/uz";
import { en } from "./locale/en";
import { LANGUANGE } from "./locale";
import NewsDetailPage from "./pages/NewsDetailPage";
import ProductDetailPage from "./pages/ProductDetailPage";
i18next.use(initReactI18next).init({
  resources: {
    ru: { translation: ru },
    uz: { translation: uz },
    en: { translation: en },
  },
  lng: LANGUANGE,
  fallbackLng: LANGUANGE,
});

const App = () => {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about-us' element={<AboutUsPage />} />
        <Route path='/news' element={<NewsPage />} />
        <Route path='/news/:id' element={<NewsDetailPage />} />
        <Route path='/products' element={<ProductsPage />} />
        <Route path='/product/:id' element={<ProductDetailPage />} />
        <Route path='/contacts' element={<ContactPage />} />
      </Routes>
      <Footer />
      <ToastContainer />
      <ScrollToTop />
      {/* <Cursor /> */}
    </Router>
  )
}

export default App
