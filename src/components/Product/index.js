import React, { useState } from "react";

import Icon from "../Icon";

import SwiperCore, { Thumbs } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";
import ProductBookModal from "../ProductBook/ProductBookModal";

SwiperCore.use([Thumbs]);

const Product = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className="product">
      <div className="product__left">
        <div className="gallery">
          <div className="gallery__left">
            <Swiper
              direction="horizontal"
              spaceBetween={30}
              slidesPerView={3}
              style={{ marginBottom: -30 }}
              onSwiper={setThumbsSwiper}
              watchSlidesVisibility
              watchSlidesProgress
              breakpoints={{
                640: {
                  direction: "vertical"
                }
              }}
            >
              <SwiperSlide>
                <img
                  className="gallery__thumbnail"
                  src="/images/cat1.jpg"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className="gallery__thumbnail"
                  src="/images/cat1.jpg"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className="gallery__thumbnail"
                  src="/images/cat1.jpg"
                  alt=""
                />
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="gallery__body">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              thumbs={{ swiper: thumbsSwiper }}
            >
              <SwiperSlide>
                <img className="gallery__image" src="/images/cat1.jpg" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img className="gallery__image" src="/images/cat1.jpg" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img className="gallery__image" src="/images/cat1.jpg" alt="" />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
      <div className="product__body">
        <h1 className="product__title">Супер-Люкс</h1>
        <div className="product__properties">
          <div className="product__property">
            Размеры (ШхГхВ) - 180х160х180 см
          </div>
          <div className="product__property">Площадь - 2,88 м2</div>
          <div className="product__property">
            Оснащение номера
            <div className="product__properties">
              <div className="product__property">
                <Icon name="sofa" />
                Лежак
              </div>
              <div className="product__property">
                <Icon name="house" />
                Домик
              </div>
              <div className="product__property">
                <Icon name="clew" />
                Игровой комплекс - 3 яруса
              </div>
              <div className="product__property">
                <Icon name="claw-point" />
                Когтеточка
              </div>
            </div>
          </div>
        </div>
        <div className="product__price">Цена за сутки: 600₽</div>
        <div className="product__actions">
          <ProductBookModal />
        </div>
      </div>
    </div>
  );
};

export default Product;
