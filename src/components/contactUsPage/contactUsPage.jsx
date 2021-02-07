import React from "react";
function ContactUsPage() {
  // Component code start
  return (
    <div class='wrapper container feedback_page'>
      <div class='row'>
        <div class='breadcrumbs'>
          <a href='/'>Главная</a> » <span>Свяжитесь с нами</span>
        </div>
      </div>
      <div class='row'>
        <h1 class='header'>Свяжитесь с нами</h1>
      </div>
      <div class='form form_type_inline form_type_big js-feedback-form-container row'>
        <form>
          <p class='form__note'>
            Поля помеченные символом * обязательны для заполнения
          </p>
          <div class='form__row'>
            <label class='form__label required' for='Feedback_first_name'>
              Фамилия <span class='required'>*</span>
            </label>
            <input
              class='form-input'
              name='Feedback[first_name]'
              id='Feedback_first_name'
              type='text'
              maxlength='1024'
            />
          </div>
          <div class='form__row'>
            <label class='form__label required' for='Feedback_email'>
              Email <span class='required'>*</span>
            </label>
            <input
              class='form-input'
              name='Feedback[email]'
              id='Feedback_email'
              type='text'
              maxlength='1024'
            />
          </div>
          <div class='form__row'>
            <label class='form__label required' for='Feedback_phone'>
              Телефон <span class='required'>*</span>
            </label>
            <input
              class='form-input'
              name='Feedback[phone]'
              id='Feedback_phone'
              type='text'
              maxlength='1024'
            />
          </div>
          <div class='form__row'>
            <label class='form__label' for='Feedback_theme'>
              Тема
            </label>
            <select
              class='form-input'
              name='Feedback[theme]'
              id='Feedback_theme'
            >
              <option value='0'>Общие вопросы</option>
              <option value='1'>Предложение сотрудничества</option>
              <option value='2'>Ошибка в работе сайта</option>
            </select>
          </div>
          <div class='form__row'>
            <label class='form__label required' for='Feedback_content'>
              Текст сообщения <span class='required'>*</span>
            </label>
            <textarea
              class='form-input'
              rows='6'
              name='Feedback[content]'
              id='Feedback_content'
            ></textarea>
          </div>
          <div class='form__row form__row_type_captcha'>
            <label class='form__label' for='Feedback_verifyCode'>
              Проверочный код
            </label>
            <div class='captcha'>
              <img
                class='captcha__image'
                id='feedback-captcha'
                src='/api/feedback/captcha/v/601fd4d2068fb'
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
              name='Feedback[verifyCode]'
              id='Feedback_verifyCode'
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

export default ContactUsPage;
