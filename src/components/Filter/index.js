import React from "react";
import Button from "../Button";
import Checkbox from "../Checkbox";

const Filter = () => {
  return (
    <div className="filter">
      <form action="#" className="filter__form" method="GET">
        <div className="filter__item">
          <span className="filter__label">Цена за сутки, ₽</span>
          <div className="filter__control">
            <div className="price">
              <input className="price__from" type="text" placeholder="от 100" />
              <input className="price__to" type="text" placeholder="до 600" />
            </div>
          </div>
        </div>
        <div className="filter__item">
          <span className="filter__label">Площадь</span>
          <p className="filter__control">
            <Checkbox>0,63 м2</Checkbox>
          </p>
          <p className="filter__control">
            <Checkbox>0,90 м2</Checkbox>
          </p>
          <p className="filter__control">
            <Checkbox>0,90 м2</Checkbox>
          </p>
          <p className="filter__control">
            <Checkbox>0,90 м2</Checkbox>
          </p>
          <p className="filter__control">
            <Checkbox>0,90 м2</Checkbox>
          </p>
          <p className="filter__control">
            <Checkbox>0,90 м2</Checkbox>
          </p>
        </div>
        <div className="filter__item">
          <span className="filter__label">Оснащение номера</span>
          <p className="filter__control">
            <Checkbox>Пустой номер</Checkbox>
          </p>
          <p className="filter__control">
            <Checkbox>Лежак</Checkbox>
          </p>
          <p className="filter__control">
            <Checkbox>Когтеточка</Checkbox>
          </p>
          <p className="filter__control">
            <Checkbox>Игровой-комплекс</Checkbox>
          </p>
          <p className="filter__control">
            <Checkbox>Домик</Checkbox>
          </p>
        </div>
        <div className="filter__actions">
          <Button secondary>Применить</Button>
          <Button tertiary>Сбросить фильтр</Button>
        </div>
      </form>
    </div>
  );
};

export default Filter;
