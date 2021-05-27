import React, { useEffect, useState } from "react";
// import './header.scss';
// import '../../assets/_scss/buttons.scss'
import logo from '../../css/images/logo.png';



function Header(props) {
  let formClass = 'form form__type__head js-login-form header-form'
    if(props.isActiveForm){
      formClass = 'form form__type__head js-login-form header-form active'
    }
  return (
    <div className='wrapper container'>
      <div className='wrapper__head row'>
        <div className='head clearfix row'>
          <div className='head__logo col-lg-8 col-md-7 col-sm-12 col-xs-12'>
            <a href='/' className='logo'>
              <img className='logo__img' src={logo} />
              <div className='logo__header'>
                <span className='logo-name-bold g-text-light-blue'>
                  Минский городской
                </span>
                <span className='logo-name-normal g-text-blue'>
                  центр инжиниринговых услуг
                </span>
                <span className='logo-text g-text-dark-blue'>
                  Основан в 2007 году
                </span>
              </div>
            </a>
          </div>
          <div className='head__form col-lg-4 col-md-5 col-sm-12 col-xs-12'>
            <form className={formClass}>
            <span class="error-message">Поле обязательно для заполнения<br/></span>
              <div className='form__row'>
                <input
                  name='LoginForm[username]'
                  type='text'
                  className='form-input'
                />
              </div>
              <div className='form__row'>
                <input
                  name='LoginForm[password]'
                  type='password'
                  className='form-input'
                />
              </div>
              <div className='form__row'>
                <button className='button button__blue'>Войти</button>
                <a
                  href='#'
                  className='form-link g-text-dark-blue g-decoration-none'
                >
                  Восстановить пароль
                </a>
                <br />
                <a
                  href='/registration'
                  className='form-link g-text-dark-blue g-decoration-none'
                >
                  Регистрация
                </a>
              </div>
            </form>

            <div className='b-flags'>
              <a href='?lang_id=1' className='e-flags_ru m-flags-active'></a>
              <a href='?lang_id=2' className='e-flags_en '></a>
              <a href='?lang_id=3' className='e-flags_by '></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
