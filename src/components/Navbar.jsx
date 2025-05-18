import i18next from "i18next";
import { useCallback, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { LANGUANGE } from "../locale";
import { useTranslation } from "react-i18next";

const Navbar = () => {
    const [showNavbar, setShowNavbar] = useState(true);
    const [isScrolled, setIsScrolled] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);
    const location = useLocation();

    const handleScroll = useCallback(() => {
        const scrollY = window.scrollY;
        setShowNavbar(scrollY < lastScrollY);
        setLastScrollY(scrollY);
        setIsScrolled(scrollY >= 50);
    }, [lastScrollY]);

    useEffect(() => {
        let ticking = false;
        const onScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    handleScroll();
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener('scroll', onScroll);
        return () => {
            window.removeEventListener('scroll', onScroll);
        };
    }, [handleScroll]);


    const changeLocale = (e) => {
        i18next.changeLanguage(e.target.value);
        localStorage.setItem("LANGUAGE", e.target.value)
    }

    const isActive = (path) => location.pathname === path ? 'active' : '';

    const { t } = useTranslation();
    return (
        <>
            <div className={`Navbar ${showNavbar ? 'show' : 'hide'} ${isScrolled ? 'active' : ''}`}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-2">
                            <div className="logo">
                                <Link to={'/'}><img src="./logo.png" alt="" /></Link>
                            </div>
                        </div>
                        <div className="col-lg-9 leftWrap">
                            <div className="left">
                                <Link className={`${isActive('/')}`} to='/'>{t('navbar1')}</Link>
                                <Link className={`${isActive('/news')}`} to='/news'>{t('navbar2')}</Link>
                                <Link className={`${isActive('/products')}`} to='/products'>{t('navbar3')}</Link>
                                <Link className={`${isActive('/about-us')}`} to='/about-us'>{t('navbar4')}</Link>
                                <Link className={`${isActive('/contacts')}`} to='/contacts'>{t('navbar5')}</Link>
                            </div>
                            <div className="right">
                                <a href="tel:+998901234567"> <span><img src="./phoneCalling.png" alt="" /></span>+998 90 123-45-67</a>
                                <select onChange={changeLocale}>
                                    <option selected={LANGUANGE === 'uz'} value="uz">UZ</option>
                                    <option selected={LANGUANGE === 'ru'} value="ru">RU</option>
                                    <option selected={LANGUANGE === 'en'} value="en">EN</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="navbarLine"></div>
        </>
    )
}

export default Navbar
