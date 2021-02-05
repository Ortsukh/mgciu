import React from 'react';
// import './header.scss';
// import '../../assets/_scss/buttons.scss'
import logo from '../../assets/images/logo.png'
// import {  dashboardProps} from '../../constants/interfaces';
function Header() {

  // Component code start
  return (
    <div class="wrapper container">
            <div class="wrapper__head row">
                <div class="head clearfix row">
                    <div class="head__logo col-lg-8 col-md-7 col-sm-12 col-xs-12">
                        <a href="/" class="logo">
                            <img class="logo__img" src={logo}/>
                            <div class="logo__header">
                                <span class="logo-name-bold g-text-light-blue">Минский городской</span>
                                <span class="logo-name-normal g-text-blue">центр инжиниринговых услуг</span>
                                <span class="logo-text g-text-dark-blue">Основан в 2007 году</span>
                            </div>
                        </a>
                    </div>
                    <div class="head__form col-lg-4 col-md-5 col-sm-12 col-xs-12">
                        
                                                <form class="form form__type__head js-login-form">
                            <div class="form__row">
                                <input name="LoginForm[username]" type="text" class="form-input"/>
                            </div>
                            <div class="form__row">
                                <input name="LoginForm[password]" type="password" class="form-input"/>
                            </div>
                            <div class="form__row">
                                <button class="button button__blue">Войти</button>
                                <a href="#" class="form-link g-text-dark-blue g-decoration-none">Восстановить пароль</a><br/>
                                <a href="/registration" class="form-link g-text-dark-blue g-decoration-none">Регистрация</a>
                            </div>
                        </form>
                                                                    
						<div class="b-flags">
                            <a href="?lang_id=1" class="e-flags_ru m-flags-active"></a>
                            <a href="?lang_id=2" class="e-flags_en "></a>
                            <a href="?lang_id=3" class="e-flags_by "></a>
                        </div>
                        
					
					</div>
                </div>
            </div>
        </div>

    
  );
}

export default Header;
