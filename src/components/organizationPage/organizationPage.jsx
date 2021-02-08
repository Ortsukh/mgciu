import React from 'react';
function OrganizationPage() {
  // Component code start
  return (
    <div className='wrapper container'>
      <div className='row'>
        <div className='breadcrumbs col-xs-12'>
          <a href='/'>Главная</a> » <span>Рейтинг организаций</span>
        </div>
      </div>
      <div>
        <div className='page-content__header'>
          <h1 className='header'></h1>
          <h1 className='header'>Рейтинг организаций</h1>
        </div>
        <div className='list-view clearfix' id='yw0'>
          <div className=''>
            <a
              href='http://mgciu.by/organizations/8'
              className='organization-tile col-xs-12'
            >
              <div className='organization-tile__image'>
                <img src='http://mgciu.by/filestore/i2styauq537sm51xsv5mxkbyh1btq9y/%D0%B8.jpg' />
              </div>
              <span className='organization-tile__rank'>
                Место в рейтинге: 1
              </span>
              <h3 className='organization-tile__label'>
                Инжиниринговый центр РУП «Институт БелНИИС»
              </h3>
              <p className='organization-tile__description'>
                Создан в 2016 году как структурное подразделение
                Научно-исследовательского республиканского унитарного
                предприятия по строительству “Институт БелНИИС” Министерства
                архитектуры и строительства Республики Беларусь.
              </p>
            </a>
            <a
              href='http://mgciu.by/organizations/10'
              className='organization-tile col-xs-12'
            >
              <div className='organization-tile__image'>
                <img src='http://mgciu.by/filestore/6vbh33y37v4r0nn1x0h9pk1jg7bta4b/partner_3.png' />
              </div>
              <span className='organization-tile__rank'>
                Место в рейтинге: 2
              </span>
              <h3 className='organization-tile__label'>Минскпромстрой </h3>
              <p className='organization-tile__description'>
                Сегодня ОАО «Минскпромстрой" – это одна из самых крупных,
                технически оснащенных и опытных организаций Республики Беларусь,
                которая уверенно занимает ведущее место на рынке строительных
                услуг.
              </p>
            </a>
          </div>
          <div className='keys' title='/organizations/index'>
            <span>8</span>
            <span>10</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrganizationPage;
