import React from "react";
function PartnersPage() {
  // Component code start
  return (
    <div class='wrapper container'>
      <div class='row'>
        <div class='breadcrumbs col-xs-12'>
          <a href='/'>Главная</a> » <span>Партнеры компании</span>
        </div>
      </div>
      <div class='page-content'>
        <div class='page-content__header'>
          <h1 class='header'></h1>
          <h1 class='header'>Партнеры компании</h1>
        </div>
        <div class='list-view clearfix' id='yw0'>
          <div class=''>
            <div class='partner-tile partner-tile_full_width col-xs-12'>
              <div class='partner-tile__image'>
                <img src='/images/empty_foto.png' class='partner-tile-image' />
              </div>
              <div class='partner-tile__label'>РУП «БЕЛТЭИ» </div>
              <div class='partner-tile__caption clearfix'>
                <p class='partner-tile-text'>
                  С 1964 — года основания — предприятие прошло путь от
                  Белорусского филиала Государственного научно-
                  исследовательского института им. Г. М. Кржижановского
                  (БелЭНИН), выполняющего локальные задачи в области АСУ ТП, до
                  Научно-исследовательского и проектного республиканского
                  унитарного предприятия «БЕЛТЭИ», способного выполнить «под
                  ключ» проект любой сложности в области энергетики и
                  промышленности.
                </p>
                <a
                  href='http://mgciu.demo-upit.by/partners/4'
                  class='button button__light-blue'
                >
                  Подробнее
                </a>
              </div>
              <div class='row center-row g-align-center'>
                <div class='divisor'></div>
              </div>
            </div>
            <div class='partner-tile partner-tile_full_width col-xs-12'>
              <div class='partner-tile__image'>
                <img
                  src='http://mgciu.demo-upit.by/filestore/qg3bg9t925fvn96kupb7tpvhi48derd/partner_2.png'
                  class='partner-tile-image'
                />
              </div>
              <div class='partner-tile__label'>ООО «СОЛВЕНДО» </div>
              <div class='partner-tile__caption clearfix'>
                <p class='partner-tile-text'>
                  Проектирование любой сложности в сфере строительства Работаем
                  по Республике Беларусь
                </p>
                <a
                  href='http://mgciu.demo-upit.by/partners/6'
                  class='button button__light-blue'
                >
                  Подробнее
                </a>
              </div>
              <div class='row center-row g-align-center'>
                <div class='divisor'></div>
              </div>
            </div>
            <div class='partner-tile partner-tile_full_width col-xs-12'>
              <div class='partner-tile__image'>
                <img
                  src='http://mgciu.demo-upit.by/filestore/2hqvyq3dc3ml552wao4iz8pm49n1wvf/partner_3.png'
                  class='partner-tile-image'
                />
              </div>
              <div class='partner-tile__label'>Минскпромстрой </div>
              <div class='partner-tile__caption clearfix'>
                <p class='partner-tile-text'>
                  Сегодня ОАО «Минскпромстрой" – это одна из самых крупных,
                  технически оснащенных и опытных организаций Республики
                  Беларусь, которая уверенно занимает ведущее место на рынке
                  строительных услуг.
                </p>
                <a
                  href='http://mgciu.demo-upit.by/partners/7'
                  class='button button__light-blue'
                >
                  Подробнее
                </a>
              </div>
              <div class='row center-row g-align-center'>
                <div class='divisor'></div>
              </div>
            </div>
            <div class='partner-tile partner-tile_full_width col-xs-12'>
              <div class='partner-tile__image'>
                <img
                  src='http://mgciu.demo-upit.by/filestore/fdksg75bxm2l6ztowh0u4hyqtvvapvs/partner_4.png'
                  class='partner-tile-image'
                />
              </div>
              <div class='partner-tile__label'>Арэса-Сервис </div>
              <div class='partner-tile__caption clearfix'>
                <p class='partner-tile-text'>
                  В настоящий момент СООО «Арэса-Сервис» осуществляет полный
                  цикл создания комплекса жилых домов, административных зданий,
                  таунхаусов, крупных торговых центров, начиная от приобретения
                  прав на застройку территории и заканчивая сдачей готовых
                  объектов.
                </p>
                <a
                  href='http://mgciu.demo-upit.by/partners/8'
                  class='button button__light-blue'
                >
                  Подробнее
                </a>
              </div>
              <div class='row center-row g-align-center'>
                <div class='divisor'></div>
              </div>
            </div>
          </div>
          <div class='pager'>
            <ul class='pager pager_align_center g-m-top_40' id='yw1'>
              <li class='pager__first hidden'>
                <a href='/partners/index'>&lt;&lt; Первая</a>
              </li>
              <li class='pager__previous hidden'>
                <a href='/partners/index'>&lt; Предыдущая</a>
              </li>
              <li class='pager__page pager__selected'>
                <a href='/partners/index'>1</a>
              </li>
              <li class='pager__page'>
                <a href='/partners/index/Partners_page/2'>2</a>
              </li>
              <li class='pager__next'>
                <a href='/partners/index/Partners_page/2'>Следующая &gt;</a>
              </li>
              <li class='pager__last'>
                <a href='/partners/index/Partners_page/2'>Последняя &gt;&gt;</a>
              </li>
            </ul>
          </div>
          {/* <div class='keys'  title='/partners'>
            <span>4</span>
            <span>6</span>
            <span>7</span>
            <span>8</span>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default PartnersPage;
