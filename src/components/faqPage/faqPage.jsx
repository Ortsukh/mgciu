import React from "react";
function FaqPage() {
  // Component code start
  return (
    <div class='wrapper container feedback_page'>
      <div class='row'>
        <div class='breadcrumbs'>
          <a href='/'>Главная</a> » <a href='/feedback'>Обратная связь</a> »
          <span>Вопрос-ответ</span>
        </div>
      </div>
      <div class='row'>
        <h1 class='header'>Faq</h1>
      </div>
      <div class='form form_type_inline form_type_big js-feedback-form-container row'>
        <form>
          <p class='form__note'>
            Поля помеченные символом * обязательны для заполнения
          </p>
          <div class='form__row'>
            <label class='form__label' for='Faq_first_name'>
              Имя
            </label>
            <input
              class='form-input'
              name='Faq[first_name]'
              id='Faq_first_name'
              type='text'
              maxlength='1024'
            />
          </div>
          <div class='form__row'>
            <label class='form__label' for='Faq_email'>
              Email
            </label>
            <input
              class='form-input'
              name='Faq[email]'
              id='Faq_email'
              type='text'
              maxlength='1024'
            />
          </div>
          <div class='form__row'>
            <label class='form__label' for='Faq_phone'>
              Телефон
            </label>
            <input
              class='form-input'
              name='Faq[phone]'
              id='Faq_phone'
              type='text'
              maxlength='1024'
            />
          </div>
          <div class='form__row'>
            <label class='form__label' for='Faq_content'>
              Текст вопроса
            </label>
            <textarea
              class='form-input'
              rows='6'
              name='Faq[content]'
              id='Faq_content'
            ></textarea>
          </div>
          <div class='form__row form__row_type_captcha'>
            <label class='form__label' for='Faq_verifyCode'>
              Verify Code
            </label>
            <div class='captcha'>
              <img
                class='captcha__image'
                id='feedback-captcha'
                src='/api/feedback/captcha/v/601fd66be20b2'
                alt=''
              />
              <a
                class='captcha__button'
                id='feedback-captcha_button'
                href='/api/feedback/captcha/refresh/1'
              ></a>
            </div>
            <input
              class='form-input'
              name='Faq[verifyCode]'
              id='Faq_verifyCode'
              type='text'
            />
            <p class='form__hint'>
              Пожалуйста, введите символы, указанные на картинке. Символы не
              чувствительны к регистру.
            </p>
          </div>
          <div class='form__row'>
            <button class='button button__blue'>Отправить</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default FaqPage;
