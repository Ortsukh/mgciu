import React from 'react';
import './mainSlider.scss';
// import {  dashboardProps} from '../../constants/interfaces';
function MainSlider() {

    // Component code start
    return (
        <div class="container wrapper wrapper_full_width wrapper_type_slider">
    <div class="wrapper__slider js-carousel owl-carousel owl-theme" >
         
        <div class="owl-wrapper-outer"><div class="owl-wrapper" >
            <div class="owl-item" ><div class="wrapper-slider">
            <div class="slider-content__bg">
                <img src="/images/slider.jpg" class="slider-bg-img"/>
                <div class="slider-bg-mask"></div>
            </div>
            <div class="container wrapper">
                <div class="slider-content clearfix">
                    <h2 class="slider-content__header">подготовка задания на проектирование на правах архитектурно-планировочного задания</h2>
                    <div class="slider-content__description">
                        формирование электронной версии топографических и картографических материалов
предоставление топографического плана в электронном виде                    </div>
                    <div class="slider-content__button">
                        <a href="/s" class="button button__size__big">Подробнее</a>
                                                    <a href="/s_extra" class="button button__size__big button__blue">Заказать услугу</a>
                                            </div>
                </div>
            </div>
        </div></div><div class="owl-item" ><div class="wrapper-slider">
            <div class="slider-content__bg">
                <img src="/images/slider.jpg" class="slider-bg-img"/>
                <div class="slider-bg-mask"></div>
            </div>
            <div class="container wrapper">
                <div class="slider-content clearfix">
                    <h2 class="slider-content__header">Заголовок</h2>
                    <div class="slider-content__description">
                        Описание                    </div>
                    <div class="slider-content__button">
                        <a href="news" class="button button__size__big">Подробнее</a>
                                                    <a href="" class="button button__size__big button__blue">дополн кн</a>
                                            </div>
                </div>
            </div>
        </div></div><div class="owl-item" ><div class="wrapper-slider">
            <div class="slider-content__bg">
                <img src="/images/slider.jpg" class="slider-bg-img"/>
                <div class="slider-bg-mask"></div>
            </div>
            <div class="container wrapper">
                <div class="slider-content clearfix">
                    <h2 class="slider-content__header">заголовок</h2>
                    <div class="slider-content__description">
                        описание                    </div>
                    <div class="slider-content__button">
                        <a href="not published" class="button button__size__big">Подробнее</a>
                                                    <a href="http://google.by" class="button button__size__big button__blue">текст доп кнопки</a>
                                            </div>
                </div>
            </div>
        </div></div></div></div>
         
        
         
        
            <div class="owl-controls clickable"><div class="owl-pagination"><div class="owl-page active"><span class=""></span></div><div class="owl-page"><span class=""></span></div><div class="owl-page"><span class=""></span></div></div></div></div>
    <div class="container slider-navigation">
        <div class="slider-arrows">
            <div class="slider-arrows__arrow slider-arrows__arrow_left js-carousel-left"></div>
            <div class="slider-arrows__arrow slider-arrows__arrow_right js-carousel-right"></div>
        </div>	
    </div>
</div>

    );
}

export default MainSlider;
