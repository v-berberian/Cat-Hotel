import React from "react";

import { useParams } from "react-router-dom";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";

import Header from "../components/Header";
import Banner from "../components/Banner";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Container from "../components/Container";
import Product from "../components/Product";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

export default function ProductsPage() {
  const params = useParams();

  return (
    <div>
      <Header />

      <main className="main">
        <Container>
          <Product />

          <div className="products__related">
            <Swiper
              spaceBetween={50}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
            >
              <SwiperSlide>
                <div className="card card_product-2">
                  <div className="card__media">
                    <img
                      src="/images/cat1.jpg"
                      className="card__image"
                      alt=""
                    />
                  </div>
                  <div className="card__body">
                    <h3 className="card__title">Эконом</h3>
                    <div className="card__params">
                      <div className="card__param">
                        Размеры (ШхГхВ) - 90х70х180см
                      </div>
                      <div className="card__param">Площадь - 0,63 м2</div>
                      <span className="card__param">
                        Цена за сутки:<span className="card__price">200₽</span>
                      </span>
                    </div>
                    <div className="card__actions">
                      <a className="button button_primary" href="/products/1">
                        Забронировать
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="card card_product-2">
                  <div className="card__media">
                    <img
                      src="/images/cat1.jpg"
                      className="card__image"
                      alt=""
                    />
                  </div>
                  <div className="card__body">
                    <h3 className="card__title">Эконом</h3>
                    <div className="card__params">
                      <div className="card__param">
                        Размеры (ШхГхВ) - 90х70х180см
                      </div>
                      <div className="card__param">Площадь - 0,63 м2</div>
                      <span className="card__param">
                        Цена за сутки:<span className="card__price">200₽</span>
                      </span>
                    </div>
                    <div className="card__actions">
                      <a className="button button_primary" href="/products/1">
                        Забронировать
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="card card_product-2">
                  <div className="card__media">
                    <img
                      src="/images/cat1.jpg"
                      className="card__image"
                      alt=""
                    />
                  </div>
                  <div className="card__body">
                    <h3 className="card__title">Эконом</h3>
                    <div className="card__params">
                      <div className="card__param">
                        Размеры (ШхГхВ) - 90х70х180см
                      </div>
                      <div className="card__param">Площадь - 0,63 м2</div>
                      <span className="card__param">
                        Цена за сутки:<span className="card__price">200₽</span>
                      </span>
                    </div>
                    <div className="card__actions">
                      <a className="button button_primary" href="/products/1">
                        Забронировать
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="card card_product-2">
                  <div className="card__media">
                    <img
                      src="/images/cat1.jpg"
                      className="card__image"
                      alt=""
                    />
                  </div>
                  <div className="card__body">
                    <h3 className="card__title">Эконом</h3>
                    <div className="card__params">
                      <div className="card__param">
                        Размеры (ШхГхВ) - 90х70х180см
                      </div>
                      <div className="card__param">Площадь - 0,63 м2</div>
                      <span className="card__param">
                        Цена за сутки:<span className="card__price">200₽</span>
                      </span>
                    </div>
                    <div className="card__actions">
                      <a className="button button_primary" href="/products/1">
                        Забронировать
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </Container>
        <Banner />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
