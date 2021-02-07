import React from 'react';
function ContactPage() {

    // Component code start
    return (
        
<div className="wrapper container">
    <div className="row">
        <div className="col-lg-12">
        <div className="breadcrumbs">
<a href="/">Главная</a> » <span>Контакты</span></div></div>
    </div>
    <div className="row">
        <div className="page-content">
            <div className="page-content__header">
                <h1 className="header">
                    Контакты                </h1>
            </div>
            <p className="page-content__description">
            </p>
            <div className="page-content__content">
                <div className="contacts">
                    <div className="contacts__item">
                        <span className="contacts-icon contacts-icon_type_map"></span>
                         г. Минск, ул.Немига, 3 пав.97, 0 этаж                    </div>
                    <div className="contacts__item">
                        <span className="contacts-icon contacts-icon_type_phone"></span>
                        <pre>+375 29 973-48-47</pre>
                    </div>
                    <div className="contacts__item">
                        <span className="contacts-icon contacts-icon_type_mail"></span>
                        info@nsgroup.by                    </div>
                    <div className="contacts__item">
                        <span className="contacts-icon contacts-icon_type_time"></span>
                        <pre>ежедневно с 12:00 до 20:00</pre>
                    </div>
                </div>
                <h3 className="header header_border_bottom header-toggle js-header-toggle">Карта<span className="dropdown-toggle dropdown-toggle_state_close"></span></h3>
                <div className="section-closed">
                    <div >
                </div>
            </div>
            <br/>
            <br/>
            <h2 className="header">Свяжитесь с нами</h2>
            <div className="form form_type_inline form_type_big js-feedback-form-container">
                <form>
                    <p className="form__note">Поля помеченные символом * обязательны для заполнения</p>
                    <div className="form__row">
                        <label className="form__label required" for="Feedback_first_name">Фамилия <span className="required">*</span></label>                        <input className="form-input" name="Feedback[first_name]" id="Feedback_first_name" type="text" maxlength="1024"/>                    </div>
                    <div className="form__row">
                        <label className="form__label required" for="Feedback_email">Email <span className="required">*</span></label>                        <input className="form-input" name="Feedback[email]" id="Feedback_email" type="text" maxlength="1024"/>                    </div>
                    <div className="form__row">
                        <label className="form__label required" for="Feedback_phone">Телефон <span className="required">*</span></label>                        <input className="form-input" name="Feedback[phone]" id="Feedback_phone" type="text" maxlength="1024"/>                    </div>
                    <div className="form__row">
                        <label className="form__label" for="Feedback_theme">Тема</label>                        <select className="form-input" name="Feedback[theme]" id="Feedback_theme">
                    <option value="0">Общие вопросы</option>
                    <option value="1">Предложение сотрудничества</option>
                    <option value="2">Ошибка в работе сайта</option>
                    </select>                    </div>
                    <div className="form__row">
                        <label className="form__label required" for="Feedback_content">Текст сообщения <span className="required">*</span></label>                        <textarea className="form-input" rows="6" name="Feedback[content]" id="Feedback_content"></textarea>                    </div>
                                        <div className="form__row form__row_type_captcha">
                        <label className="form__label" for="Feedback_verifyCode">Проверочный код</label>                        <div className="captcha">
                            <img className="captcha__image" id="feedback-captcha" src="/api/feedback/captcha/v/601fd73e8dae0" alt=""/><a className="captcha__button" id="feedback-captcha_button" href="/api/feedback/captcha/refresh/1"></a>                        </div>
                        <input className="form-input" name="Feedback[verifyCode]" id="Feedback_verifyCode" type="text"/>                        <p className="form__hint">Пожалуйста, введите символы, указанные на картинке. Символы не чувствительны к регистру.</p>
                    </div>
                                        <div className="form__row">
                        <button className="button button__blue">Отправить</button>
                    </div>
                </form>
            </div>
        </div>
        </div></div>
</div>
    );
}

export default ContactPage;
