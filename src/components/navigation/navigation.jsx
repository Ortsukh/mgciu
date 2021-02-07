import React from 'react';
import '../../css/ace-responsive-menu.css'
import {
    Link
  } from 'react-router-dom';
function Navigation() {

    // Component code start
    return (
        <div className="container wrapper wrapper_full_width">
        <div className="wrapper__menu row">
            <nav className="navigation navigation_type_fixed">
                <div className="container wrapper">
                    <div className="navigation__main-menu">
                        <div className="menu-toggle ative" >                        
                            <button type="button" id="menu-btn">
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                        </div>
                        <div className="menu-toggle ative" >                        
                            <button type="button" id="menu-btn-login">
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                        </div>
                        <ul className="main-menu ace-responsive-menu ative_block" data-menu-style="horizontal" id="main_menu" >
<li className="main-menu__item g-do_transition main-menu__item g-do_transition"><Link className="main-menu-item" to="/news">Новости</Link></li>
<li className="main-menu__item g-do_transition main-menu-item_has_child main-menu__item g-do_transition"><Link className="main-menu-item" to="/about_company">О компании</Link>
<ul className="sub-menu">
<li className="main-menu__item g-do_transition main-menu-item_last main-menu__item g-do_transition"><Link to="/structure">Структура компании</Link></li>
</ul>
</li>
<li className="main-menu__item g-do_transition main-menu__item g-do_transition"><Link className="main-menu-item" to="/regulatoryframework">Нормативно-правовая база</Link></li>
<li className="main-menu__item g-do_transition main-menu__item g-do_transition"><Link className="main-menu-item" to="/services">Услуги</Link></li>
<li className="main-menu__item g-do_transition main-menu__item g-do_transition"><Link className="main-menu-item" to="/odno_okno">Одно окно</Link></li>
<li className="main-menu__item g-do_transition main-menu-item_has_child main-menu__item g-do_transition"><Link className="main-menu-item" to="/feedback">Обратная связь</Link>
<ul className="sub-menu">
<li className="main-menu__item g-do_transition main-menu__item g-do_transition"><Link to="/feedback/reviews">Отзывы</Link></li>
<li className="main-menu__item g-do_transition main-menu-item_last main-menu__item g-do_transition"><Link to="/feedback/questions">Вопрос-ответ</Link></li>
</ul>
</li>
<li className="main-menu__item g-do_transition main-menu__item g-do_transition"><Link className="main-menu-item" to="/partners">Партнеры</Link></li>
<li className="main-menu__item g-do_transition main-menu-item_last main-menu__item g-do_transition"><Link className="main-menu-item" to="/contacts">Контакты</Link></li>
</ul>                    </div>
                </div>
            </nav>
        </div>
    </div>
    );
}

export default Navigation;
