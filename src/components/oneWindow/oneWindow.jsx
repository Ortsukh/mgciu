import React from 'react';
function OneWindow() {
  // Component code start
  return (
    <div class='wrapper container'>
      <div class='row'>
        <div class='breadcrumbs col-xs-12'>
          <a href='/'>Главная</a> » <span>Одно окно</span>
        </div>
      </div>
      <div class='page-content'>
        <div class='page-content__header'>
          <h1 class='header'>Одно окно </h1>
        </div>
        <p class='page-content__description'></p>
        <div class='page-content__content'>
          <h3>Прием документов осуществляется:</h3>
          <p>
            <br />
             по ул. Советская,19
            <br />
            каб. 103 по направлениям, требуется предоставить следующие
            документы.
            <br />
            каб. 401б по направлениям:
          </p>
          <p>
            • Отдел подготовки АПЗ, требуется предоставить следующие документы
          </p>
          <p>• Отдел кадастра, требуется предоставить следующие документы.</p>
          <p>
             ул. Первомайская,2 по направлениям, требуется предоставить
            следующие документы.
          </p>
        </div>
      </div>
    </div>
  );
}

export default OneWindow;
