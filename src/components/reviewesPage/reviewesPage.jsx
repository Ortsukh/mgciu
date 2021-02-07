import React from "react";
function ReviewesPage() {
  // Component code start
  return (
    <div class='wrapper container feedback_page'>
      <div class='row'>
        <div class='breadcrumbs'>
          <a href='/'>Главная</a> » <span>Обратная связь</span>
        </div>
      </div>
      <div class='row'>
        <h1 class='header'>Отзывы</h1>
      </div>
      <div class='form form_type_inline form_type_big js-feedback-form-container row'>
        <form>
          <p class='form__note'>
            Поля помеченные символом * обязательны для заполнения
          </p>
          <div class='form__row'>
            <label class='form__label required' for='Reviews_first_name'>
              Фамилия <span class='required'>*</span>
            </label>
            <input
              class='form-input'
              name='Reviews[first_name]'
              id='Reviews_first_name'
              type='text'
              maxlength='1024'
            />
          </div>
          <div class='form__row'>
            <label class='form__label required' for='Reviews_email'>
              Email <span class='required'>*</span>
            </label>
            <input
              class='form-input'
              name='Reviews[email]'
              id='Reviews_email'
              type='text'
              maxlength='1024'
            />
          </div>
          <div class='form__row'>
            <label class='form__label' for='Reviews_phone'>
              Телефон
            </label>
            <input
              class='form-input'
              name='Reviews[phone]'
              id='Reviews_phone'
              type='text'
              maxlength='1024'
            />
          </div>
          <div class='form__row'>
            <label class='form__label required' for='Reviews_content'>
              Текст сообщения <span class='required'>*</span>
            </label>
            <textarea
              class='form-input'
              rows='6'
              name='Reviews[content]'
              id='Reviews_content'
            ></textarea>
          </div>
          <div class='form__row form__row_type_captcha'>
            <label class='form__label' for='Reviews_verifyCode'>
              Проверочный код
            </label>
            <div class='captcha'>
              <img
                class='captcha__image'
                id='feedback-captcha'
                src='/api/feedback/captcha/v/601fd5127cc0e'
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
              name='Reviews[verifyCode]'
              id='Reviews_verifyCode'
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

export default ReviewesPage;
