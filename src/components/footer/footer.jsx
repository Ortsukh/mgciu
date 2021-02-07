import React from 'react';
// import './header.scss';
// import '../../assets/_scss/buttons.scss'
import logo from '../../css/images/logo.png'
import footerBg from '../../css/images/footer_bg.jpg'
function Footer() {

  // Component code start
  return (
   
    <div className="container wrapper wrapper_full_width wrapper_footer">
            <img className="wrapper__footer-bg" src={footerBg}/>
            <div className="wrapper__footer-cover">
            </div>
            <div className="container wrapper">
                <div className="footer row clearfix">
                    <div className="col-md-4 col-sm-12">
                        <a href="#" className="logo logo_type_footer">
                            <img className="logo__img" src={logo}/>
                            <div className="logo__header">
                                <span className="logo-name-bold g-text-blue">Минский городской</span>
                                <span className="logo-name-normal g-text-light-blue">центр инжиниринговых услуг</span>
                            </div>
                        </a>
                    </div>
                    <div className="col-md-4 col-sm-6 col-xs-12">
                        <h5 className="footer-header">Полезные ссылки</h5>
                        <ul className="footer-menu">
                                                        <li className="footer-menu__item">
                                <a href="/about">О компании</a>                            </li>
                                                        <li className="footer-menu__item">
                                <a href="/">Карта для инвестора</a>                            </li>
                                                        <li className="footer-menu__item">
                                <a>Инвестиционные проекты</a>                            </li>
                                                        <li className="footer-menu__item">
                                <a>Рейтинг заказчиков</a>                            </li>
                                                        <li className="footer-menu__item">
                                <a>Личный кабинет</a>                            </li>
                                                        <li className="footer-menu__item">
                                <a>Карта строительства</a>                            </li>
                                                    </ul>
                    </div>
                    <div className="col-md-4 col-sm-6 col-xs-12">
                        <h5 className="footer-header">Контактная информация</h5>
                        <div className="footer-contacts">
                            <div className="footer-contacts__item">
                                <span className="contacts-icon contacts-icon_type_map">
                                </span>
                                 г. Минск, ул.Немига, 3 пав.97, 0 этаж                            </div>
                            <div className="footer-contacts__item">
                                <span className="contacts-icon contacts-icon_type_phone">
                                </span>
                                +375 29 973-48-47                            </div>
                            <div className="footer-contacts__item">
                                <span className="contacts-icon contacts-icon_type_mail">
                                </span>
                                info@nsgroup.by                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="wrapper__footer-cover row">
                    <div className="container wrapper">
                        <div className="footer row">
                            <div className="col-sm-4 col-xs-8">
                                © 2014, Минский городской центр инжиниринговых услуг                            </div>
                            <div className="col-xs-4 g-align-center">
                                <button type="button" className="button-to-top js-to-top"></button>
                            </div>
                            <div className="col-xs-4 ">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  );
}

export default Footer;
