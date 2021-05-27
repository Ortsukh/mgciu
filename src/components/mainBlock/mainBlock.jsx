import React from 'react';
import {
    Link
  } from 'react-router-dom';

function MainBlock() {

    // Component code start
    return (
        <div>
        <div className="wrapper container">
   
    <div className="row center-row g-align-center">
                <h1 className="header"><span className="g-bold">Услуги</span> компании</h1>
                    </div>
    <div className="wrapper__news center-row row">
                <div className="news-tile col-sm-4 col-xs-12">
            <div className="news-tile__image">
                <img src="/images/slider.jpg" className="news-tile-image"/>
            </div>
            <div className="news-tile__title">
                <div className="news-tile-center">
                    <h4 className="news-tile-center__header">Согласование проекта бурения скважин, установки рекламы, остановочных пунктов</h4>
                </div>
            </div>	
            <div className="news-tile__caption">
                <p className="news-tile-text">Согласование проекта бурения скважин, установки рекламы, остановочных пунктов</p>
                <a href="http://mgciu.demo-upit.by/services/9" className="button button__light-blue">Подробнее</a>
            </div>
        </div>
                <div className="news-tile col-sm-4 col-xs-12">
            <div className="news-tile__image">
                <img src="/images/slider.jpg" className="news-tile-image"/>
            </div>
            <div className="news-tile__title">
                <div className="news-tile-center">
                    <h4 className="news-tile-center__header">Топографический план в электронном виде</h4>
                </div>
            </div>	
            <div className="news-tile__caption">
                <p className="news-tile-text">Формирование электронной версии топографических и картографических материалов
Предоставление топографического плана в  электронном виде</p>
                <a href="http://mgciu.demo-upit.by/services/7" className="button button__light-blue">Подробнее</a>
            </div>
        </div>
                <div className="news-tile col-sm-4 col-xs-12">
            <div className="news-tile__image">
                <img src="/images/slider.jpg" className="news-tile-image"/>
            </div>
            <div className="news-tile__title">
                <div className="news-tile-center">
                    <h4 className="news-tile-center__header">Подготовка задания на проектирование</h4>
                </div>
            </div>	
            <div className="news-tile__caption">
                <p className="news-tile-text">Подготовка задания на проектирование на правах архитектурно-планировочного задания (упрощенная форма)</p>
                <a href="http://mgciu.demo-upit.by/services/8" className="button button__light-blue">Подробнее</a>
            </div>
        </div>
            </div>
    <div className="row center-row g-align-center">
        <Link to="/services" className="button button__size__big button__blue">Все услуги</Link>
    </div>
    <div className="row center-row g-align-center">
        <div className="divisor"></div>
    </div>
  
    <div className="row center-row g-align-center">
                <h1 className="header"><span className="g-bold">Партнеры</span> компании</h1>
                    </div>
    <div className="row center-row">
                <a href="http://mgciu.demo-upit.by/partners/4" className="partner-tile col-lg-2 col-md-2 col-sm-4 col-xs-6">
            <img className="partner-tile__image" src="/images/empty_foto.png"/>
            <span className="partner-tile__label">
                РУП «БЕЛТЭИ»            </span>
        </a>    
                <a href="http://mgciu.demo-upit.by/partners/6" className="partner-tile col-lg-2 col-md-2 col-sm-4 col-xs-6">
            <img className="partner-tile__image" src="http://mgciu.demo-upit.by/filestore/qg3bg9t925fvn96kupb7tpvhi48derd/partner_2.png"/>
            <span className="partner-tile__label">
                ООО «СОЛВЕНДО»            </span>
        </a>    
                <a href="http://mgciu.demo-upit.by/partners/7" className="partner-tile col-lg-2 col-md-2 col-sm-4 col-xs-6">
            <img className="partner-tile__image" src="http://mgciu.demo-upit.by/filestore/2hqvyq3dc3ml552wao4iz8pm49n1wvf/partner_3.png"/>
            <span className="partner-tile__label">
                Минскпромстрой            </span>
        </a>    
                <a href="http://mgciu.demo-upit.by/partners/8" className="partner-tile col-lg-2 col-md-2 col-sm-4 col-xs-6">
            <img className="partner-tile__image" src="http://mgciu.demo-upit.by/filestore/fdksg75bxm2l6ztowh0u4hyqtvvapvs/partner_4.png"/>
            <span className="partner-tile__label">
                Арэса-Сервис            </span>
        </a>    
                <a href="http://mgciu.demo-upit.by/partners/9" className="partner-tile col-lg-2 col-md-2 col-sm-4 col-xs-6">
            <img className="partner-tile__image" src="http://mgciu.demo-upit.by/filestore/lzwjfkbw313pi8hytd9957c7sakmb2j/partner_5.png"/>
            <span className="partner-tile__label">
                Инжитрэйд            </span>
        </a>    
                <div className="partner-btn col-lg-2 col-md-12 col-sm-4 col-xs-6">
            <Link to="/partners" className="button button__size__big button__blue">Просмотреть все</Link>
        </div>
    </div>
    <div className="row center-row g-align-center">
        <div className="divisor"></div>
    </div>
  
    <div className="row center-row g-align-center">
                <h1 className="header"><span className="g-bold">Новости</span> компании</h1>
                    </div>
    <div className="wrapper__news center-row row">
                <div className="news-tile col-sm-4 col-xs-12">
            <div className="news-tile__image">
                <img src="http://mgciu.demo-upit.by/filestore/n6gmqnsov1ymjokb8r10n1dsimz4ohg/news_2.jpg" className="news-tile-image"/>
            </div>
            <div className="news-tile__title">
                <div className="news-tile-center">
                    <h4 className="news-tile-center__header">Постановление Совета Министров Республики Беларусь 16 мая 2013 г. № 384</h4>
                    <span className="news-tile-center__date g-text-light-blue"><img src="/images/vector.png"/>Опубликовано 22.01.2015, 21:26:16</span>
                </div>
            </div>	
            <div className="news-tile__caption">
                <p className="news-tile-text">О некоторых вопросах переустройства и перепланировки, установки на крышах и фасадах многоквартирных жилых домов индивидуальных антенн и иных конструкций, а также реконструкции жилых домов</p>
                <a href="http://mgciu.demo-upit.by/news/2014-11-23_12_58_58" className="button button__light-blue">Подробнее</a>
            </div>
        </div>
                <div className="news-tile col-sm-4 col-xs-12">
            <div className="news-tile__image">
                <img src="http://mgciu.demo-upit.by/filestore/1x73b0pyq9nw4eiutcxukdlfxz135zh/news_3.jpg" className="news-tile-image"/>
            </div>
            <div className="news-tile__title">
                <div className="news-tile-center">
                    <h4 className="news-tile-center__header">График приема граждан</h4>
                    <span className="news-tile-center__date g-text-light-blue"><img src="/images/vector.png"/>Опубликовано 27.11.2014, 20:33:56</span>
                </div>
            </div>	
            <div className="news-tile__caption">
                <p className="news-tile-text">График приема посетителей должностными лицами  государственного предприятия «Минский городской центр инжиниринговых услуг»</p>
                <a href="http://mgciu.demo-upit.by/news/schedule_of_citizens_reception" className="button button__light-blue">Подробнее</a>
            </div>
        </div>
                <div className="news-tile col-sm-4 col-xs-12">
            <div className="news-tile__image">
                <img src="http://mgciu.demo-upit.by/filestore/6dzocciuywoq3u8cw2pys8up0tahjio/news-img.png" className="news-tile-image"/>
            </div>
            <div className="news-tile__title">
                <div className="news-tile-center">
                    <h4 className="news-tile-center__header">Одно окно</h4>
                    <span className="news-tile-center__date g-text-light-blue"><img src="/images/vector.png"/>Опубликовано 27.11.2014, 20:35:14</span>
                </div>
            </div>	
            <div className="news-tile__caption">
                <p className="news-tile-text">Личный прием заявителей и формирование заявлений на получение услуг по принципу одного окна.</p>
                <a href="http://mgciu.demo-upit.by/news/one_window" className="button button__light-blue">Подробнее</a>
            </div>
        </div>
            </div>
    <div className="row center-row g-align-center">
        <Link to="/news" className="button button__size__big button__blue">Все новости</Link>
    </div>
    <div className="row center-row g-align-center">
        <div className="divisor"></div>
    </div>
    
    <div className="row center-row g-align-center">
                <h1 className="header"><span className="g-bold">Рейтинг</span> организаций</h1>
                    </div>
    <div className="organization-wrap center-row">
                <a href="http://mgciu.demo-upit.by/organizations/8" className="organization-tile col-xs-12">
            <div className="organization-tile__image">
                <img src="/images/empty_foto.png"/>
            </div>
            <span className="organization-tile__rank">
                Место в рейтинге: 1            </span>
            <h3 className="organization-tile__label">
                РУП «БЕЛТЭИ»            </h3>
            <p className="organization-tile__description">
                С 1964 — года основания — предприятие прошло путь от Белорусского филиала Государственного научно- исследовательского института им. Г. М. Кржижановского (БелЭНИН), выполняющего локальные задачи в области АСУ ТП, до Научно-исследовательского и проектного республиканского унитарного предприятия «БЕЛТЭИ», способного выполнить «под ключ» проект любой сложности в области энергетики и промышленности.            </p>
        </a>
                <a href="http://mgciu.demo-upit.by/organizations/9" className="organization-tile col-xs-12">
            <div className="organization-tile__image">
                <img src="http://mgciu.demo-upit.by/filestore/3gb47ddzbwzyl1l1dyx24al241pkrmc/partner_2.png"/>
            </div>
            <span className="organization-tile__rank">
                Место в рейтинге: 2            </span>
            <h3 className="organization-tile__label">
                ООО «СОЛВЕНДО»            </h3>
            <p className="organization-tile__description">
                Проектирование любой сложности в сфере строительства Работаем по Республике Беларусь            </p>
        </a>
                <a href="http://mgciu.demo-upit.by/organizations/10" className="organization-tile col-xs-12">
            <div className="organization-tile__image">
                <img src="http://mgciu.demo-upit.by/filestore/6vbh33y37v4r0nn1x0h9pk1jg7bta4b/partner_3.png"/>
            </div>
            <span className="organization-tile__rank">
                Место в рейтинге: 3            </span>
            <h3 className="organization-tile__label">
                Минскпромстрой            </h3>
            <p className="organization-tile__description">
                Сегодня ОАО «Минскпромстрой"  – это одна из самых крупных, технически оснащенных и опытных организаций Республики Беларусь, которая уверенно занимает ведущее место на рынке строительных услуг.            </p>
        </a>
                <div className="organization-view-all col-xs-12">
            <Link to="/organizations" className="button button__size__big button__blue">Просмотреть все</Link>
        </div>
    </div>
    <div className="row center-row g-align-center">
        <div className="divisor"></div>
    </div>
   
    <div className="row center-row g-align-center">
        <h1 className="header"><span className="g-bold">Отзывы</span></h1>
    </div>
    <div className="wrapper__reviews center-row js-reviews-carousel owl-carousel owl-theme" >
                <div className="owl-wrapper-outer"><div className="owl-wrapper" ><div className="owl-item" ><div className="title-rewiew col-xs-12">
            <p className="title-rewiew__text">
                «В этом году возникла необходимость переустройства квартиры. В администрации района посоветовали обратиться в центр инжиниринговых услуг. Заключил договор на оказание услуг и остался доволен результатом: все предложенные услуги были выполнены быстро и качественно. Спасибо!»
            </p>
                        <div className="title-rewiew__foto">
                <img src="http://mgciu.demo-upit.by/filestore/aq7skhuskfldoml2xnptxympqcoealu/review.jpg"/>
            </div>
                        <p className="title-rewiew__caption">
                Александр, 22 ноября 2014&nbsp;г.            </p>
        </div></div><div className="owl-item" ><div className="title-rewiew col-xs-12">
            <p className="title-rewiew__text">
                «В этом году возникла необходимость переустройства квартиры. В администрации района посоветовали обратиться в центр инжиниринговых услуг. Заключил договор на оказание услуг и остался доволен результатом: все предложенные услуги были выполнены быстро и качественно. Спасибо!»
            </p>
                        <p className="title-rewiew__caption">
                Дмитрий, 22 ноября 2014&nbsp;г.            </p>
        </div></div></div></div>
                
            <div className="owl-controls clickable"><div className="owl-pagination"><div className="owl-page active"><span className=""></span></div><div className="owl-page"><span className=""></span></div></div></div></div>
  
    <div className="row center-row g-align-center">
    </div>
</div>
        </div>
    );
}

export default MainBlock;
