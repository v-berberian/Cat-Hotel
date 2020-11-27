import React from "react";

import { useParams, Link } from "react-router-dom";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";

import Header from "../components/Header";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Container from "../components/Container";
import {
  Section,
  SectionBody,
  SectionHeader,
  SectionTitle
} from "../components/Section";
import WhyUs from "../components/WhyUs/index.js";
import Button from "../components/Button";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

export default function HomePage() {
  const params = useParams();

  console.log(params);
  return (
    <div>
      <Header />
      <main className="main">
        <div className="hero hero_home">
          <div className="hero__background">
            <picture>
              <source media="(max-width: 639px)" srcSet="/images/img-02.jpg" />
              <source media="(min-width: 640px)" srcSet="/images/img-01.jpg" />
              <img src="/images/img-01.jpg" alt="" />
            </picture>
          </div>

          <div className="hero__pattern"></div>
          <div className="hero__foreground">
            <Container>
              <div className="hero__content">
                <div className="hero__subtitle">Санкт-Петербург</div>
                <h1 className="hero__title">Котейка</h1>
                <div className="hero__description">
                  Уютная гостиница для котов и кошек
                </div>
                <div className="hero__actions">
                  <Button primary to={`/products`} as={Link}>
                    Забронировать
                  </Button>
                </div>
              </div>
            </Container>
          </div>
        </div>

        <Section id="why-us">
          {/* <div className="decor__paw">
            <picture>
              <img src="/images/paw.png" />
            </picture>
          </div> */}
          <SectionHeader>
            <SectionTitle as="h2">Почему мы ?</SectionTitle>
          </SectionHeader>
          <SectionBody>
            <Container>
              <WhyUs />
            </Container>
          </SectionBody>
        </Section>

        <Section className="section_products">
          <SectionHeader>
            <SectionTitle as="h2">Номера</SectionTitle>
          </SectionHeader>
          <SectionBody>
            <Container>
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
                          Цена за сутки:
                          <span className="card__price">200₽</span>
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
                          Цена за сутки:
                          <span className="card__price">200₽</span>
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
                          Цена за сутки:
                          <span className="card__price">200₽</span>
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
                          Цена за сутки:
                          <span className="card__price">200₽</span>
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
            </Container>
          </SectionBody>
        </Section>
        <Section className="section_reviews" id="reviews">
          <SectionHeader>
            <SectionTitle as="h2">Отзывы</SectionTitle>
          </SectionHeader>
          <SectionBody>
            <Container>
              <Swiper
                spaceBetween={50}
                slidesPerView="auto"
                navigation
                pagination={{ clickable: true }}
                onSlideChange={() => console.log("slide change")}
                onSwiper={(swiper) => console.log(swiper)}
                className="swiper-reviews"
              >
                <SwiperSlide>
                  <div className="card card_review">
                    <div className="card__body">
                      <div className="card__text">
                        Первый раз пришлось оставить нашего котика в гостинице,
                        очень переживали. Администратор Мария каждый день
                        высылала нам фото нашего питомца, рассказывала, как он
                        себя чувствует. И мы и котик остались очень довольны!
                      </div>
                      <div className="card__meta">
                        <div className="card__meta-author">
                          Валерия Гришаева
                        </div>
                        <div className="card__meta-date">15 ноября, 2019</div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="card card_review">
                    <div className="card__body">
                      <div className="card__text">
                        Первый раз пришлось оставить нашего котика в гостинице,
                        очень переживали. Администратор Мария каждый день
                        высылала нам фото нашего питомца, рассказывала, как он
                        себя чувствует. И мы и котик остались очень довольны!
                      </div>
                      <div className="card__meta">
                        <div className="card__meta-author">
                          Валерия Гришаева
                        </div>
                        <div className="card__meta-date">15 ноября, 2019</div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="card card_review">
                    <div className="card__body">
                      <div className="card__text">
                        Первый раз пришлось оставить нашего котика в гостинице,
                        очень переживали. Администратор Мария каждый день
                        высылала нам фото нашего питомца, рассказывала, как он
                        себя чувствует. И мы и котик остались очень довольны!
                      </div>
                      <div className="card__meta">
                        <div className="card__meta-author">
                          Валерия Гришаева
                        </div>
                        <div className="card__meta-date">15 ноября, 2019</div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="card card_review">
                    <div className="card__body">
                      <div className="card__text">
                        Первый раз пришлось оставить нашего котика в гостинице,
                        очень переживали. Администратор Мария каждый день
                        высылала нам фото нашего питомца, рассказывала, как он
                        себя чувствует. И мы и котик остались очень довольны!
                      </div>
                      <div className="card__meta">
                        <div className="card__meta-author">
                          Валерия Гришаева
                        </div>
                        <div className="card__meta-date">15 ноября, 2019</div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="card card_review">
                    <div className="card__body">
                      <div className="card__text">
                        Первый раз пришлось оставить нашего котика в гостинице,
                        очень переживали. Администратор Мария каждый день
                        высылала нам фото нашего питомца, рассказывала, как он
                        себя чувствует. И мы и котик остались очень довольны!
                      </div>
                      <div className="card__meta">
                        <div className="card__meta-author">
                          Валерия Гришаева
                        </div>
                        <div className="card__meta-date">15 ноября, 2019</div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </Container>
          </SectionBody>
        </Section>

        <Contact />
      </main>
      <Footer />
    </div>
  );
}
