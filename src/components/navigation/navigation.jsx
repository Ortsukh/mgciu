import React from 'react';
import '../../css/ace-responsive-menu.css'
// import './navigation.scss';
// import {  dashboardProps} from '../../constants/interfaces';
function Navigation() {

    // Component code start
    return (
        <div class="container wrapper wrapper_full_width">
        <div class="wrapper__menu row">
            <nav class="navigation navigation_type_fixed">
                <div class="container wrapper">
                    <div class="navigation__main-menu">
                        <div class="menu-toggle ative" >                        
                            <button type="button" id="menu-btn">
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                            </button>
                        </div>
                        <div class="menu-toggle ative" >                        
                            <button type="button" id="menu-btn-login">
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                            </button>
                        </div>
                        <ul class="main-menu ace-responsive-menu ative_block" data-menu-style="horizontal" id="main_menu" >
<li class="main-menu__item g-do_transition main-menu__item g-do_transition"><a class="main-menu-item" href="/news">Новости</a></li>
<li class="main-menu__item g-do_transition main-menu-item_has_child main-menu__item g-do_transition"><a class="main-menu-item" href="/page/about_company">О компании</a>
<ul class="sub-menu">
<li class="main-menu__item g-do_transition main-menu-item_last main-menu__item g-do_transition"><a href="/structure">Структура компании</a></li>
</ul>
</li>
<li class="main-menu__item g-do_transition main-menu__item g-do_transition"><a class="main-menu-item" href="/regulatoryframework">Нормативно-правовая база</a></li>
<li class="main-menu__item g-do_transition main-menu__item g-do_transition"><a class="main-menu-item" href="/services">Услуги</a></li>
<li class="main-menu__item g-do_transition main-menu__item g-do_transition"><a class="main-menu-item" href="/page/odno_okno">Одно окно</a></li>
<li class="main-menu__item g-do_transition main-menu-item_has_child main-menu__item g-do_transition"><a class="main-menu-item" href="/feedback">Обратная связь</a>
<ul class="sub-menu">
<li class="main-menu__item g-do_transition main-menu__item g-do_transition"><a href="/feedback/reviews">Отзывы</a></li>
<li class="main-menu__item g-do_transition main-menu-item_last main-menu__item g-do_transition"><a href="/feedback/questions">Вопрос-ответ</a></li>
</ul>
</li>
<li class="main-menu__item g-do_transition main-menu__item g-do_transition"><a class="main-menu-item" href="/partners">Партнеры</a></li>
<li class="main-menu__item g-do_transition main-menu-item_last main-menu__item g-do_transition"><a class="main-menu-item" href="/contacts">Контакты</a></li>
</ul>                    </div>
                </div>
            </nav>
        </div>
    </div>
    );
}

export default Navigation;
