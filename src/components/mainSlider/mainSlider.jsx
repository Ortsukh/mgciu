import React, { useRef, useEffect, useState, ReactNode } from "react";
import {
    Link
  } from 'react-router-dom';
import mainSliderBg from "../../css/images/slider.jpg";
let sliderPosition = 0;
let sliderTransition = 300;

function MainSlider() {
  let a;
  useEffect(() => {
    a = document.querySelector(".owl-pagination");
  });
  let style = {
    transform: "translate3d(0px, 0px, 0px)",
  };
  const [isMoveSlider, setisMoveSlider] = useState(style);
  // let sliderStyle ={
  //         transform: 'translate3d(0, 0, 0);',
  // }
  const moveSliaderRight = () => {
    sliderPosition += 100;
    sliderTransition = 300;
    if (sliderPosition > 200) {
      sliderPosition = 0;
      sliderTransition = 1000;
    }
    style = {
      transform: `translate3d(-${sliderPosition}vw, 0px, 0px)`,
      transition: `all ${sliderTransition}ms ease 0s`,
    };
    setisMoveSlider(style);
    for (let i = 0; i < 3; i++) {
      a.children[i].classList.remove("active");
    }
    a.children[sliderPosition / 100].classList.add("active");
    // a.children[0].classList.remove()
  };
  const moveSliaderLeft = () => {
    sliderPosition -= 100;
    sliderTransition = 300;
    if (sliderPosition < 0) {
      sliderPosition = 200;
      sliderTransition = 1000;
    }
    style = {
      transform: `translate3d(-${sliderPosition}vw, 0px, 0px)`,
      transition: `all ${sliderTransition}ms ease 0s`,
    };
    setisMoveSlider(style);
    for (let i = 0; i < 3; i++) {
      a.children[i].classList.remove("active");
    }
    a.children[sliderPosition / 100].classList.add("active");
  };
  const setActivNav = (num) => {
    sliderPosition = num * 100;
    style = {
      transform: `translate3d(-${sliderPosition}vw, 0px, 0px)`,
    };
    setisMoveSlider(style);
    for (let i = 0; i < 3; i++) {
      a.children[i].classList.remove("active");
    }
    a.children[num].classList.add("active");
  };
  console.log(isMoveSlider);
  // Component code start
  return (
    <div className='container wrapper wrapper_full_width wrapper_type_slider'>
      <div className='wrapper__slider js-carousel owl-carousel owl-theme'>
        <div className='owl-wrapper-outer'>
          <div className='owl-wrapper mainSlider' style={isMoveSlider}>
            <div className='owl-item mainSlider-item'>
              <div className='wrapper-slider'>
                <div className='slider-content__bg'>
                  <img src={mainSliderBg} className='slider-bg-img' />
                  <div className='slider-bg-mask'></div>
                </div>
                <div className='container wrapper'>
                  <div className='slider-content clearfix'>
                    <h2 className='slider-content__header'>
                      подготовка задания на проектирование на правах
                      архитектурно-планировочного задания
                    </h2>
                    <div className='slider-content__description'>
                      формирование электронной версии топографических и
                      картографических материалов предоставление
                      топографического плана в электронном виде
                    </div>
                    <div className='slider-content__button'>
                      <a to='/s' className='button button__size__big'>
                        Подробнее
                      </a>
                      <a
                        href='/s_extra'
                        className='button button__size__big button__blue'
                      >
                        Заказать услугу
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='owl-item mainSlider-item'>
              <div className='wrapper-slider'>
                <div className='slider-content__bg'>
                  <img src={mainSliderBg} className='slider-bg-img' />
                  <div className='slider-bg-mask'></div>
                </div>
                <div className='container wrapper'>
                  <div className='slider-content clearfix'>
                    <h2 className='slider-content__header'>Заголовок</h2>
                    <div className='slider-content__description'>Описание </div>
                    <div className='slider-content__button'>
                      <a href='news' className='button button__size__big'>
                        Подробнее
                      </a>
                      <a
                        href=''
                        className='button button__size__big button__blue'
                      >
                        дополн кн
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='owl-item mainSlider-item'>
              <div className='wrapper-slider'>
                <div className='slider-content__bg'>
                  <img src={mainSliderBg} className='slider-bg-img' />
                  <div className='slider-bg-mask'></div>
                </div>
                <div className='container wrapper'>
                  <div className='slider-content clearfix'>
                    <h2 className='slider-content__header'>заголовок</h2>
                    <div className='slider-content__description'>описание </div>
                    <div className='slider-content__button'>
                      <a
                        href='not published'
                        className='button button__size__big'
                      >
                        Подробнее
                      </a>
                      <a
                        href='http://google.by'
                        className='button button__size__big button__blue'
                      >
                        текст доп кнопки
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='owl-controls clickable'>
          <div className='owl-pagination'>
            <div className='owl-page active'onClick={()=>setActivNav(0)}>
              <span className=''></span >
            </div>
            <div className='owl-page' onClick={()=>setActivNav(1)}>
              <span className=''></span>
            </div>
            <div className='owl-page' onClick={()=>setActivNav(2)}>
              <span className=''></span>
            </div>
          </div>
        </div>
      </div>
      <div className='container slider-navigation'>
        <div className='slider-arrows'>
          <div
            className='slider-arrows__arrow slider-arrows__arrow_left js-carousel-left'
            onClick={moveSliaderLeft}
          ></div>
          <div
            className='slider-arrows__arrow slider-arrows__arrow_right js-carousel-right'
            onClick={moveSliaderRight}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default MainSlider;
