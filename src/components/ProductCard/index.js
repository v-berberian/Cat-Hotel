import React from "react";

import Button from "../Button";
import Icon from "../Icon";

import ReactTooltip from "react-tooltip";

import { Link } from "react-router-dom";

const ProductCard = ({ id, title, params = [], price, image }) => {
  return (
    <div className="card card_product">
      <div className="card__media">
        <img src={image} className="card__image" alt="" />
      </div>
      <div className="card__body">
        <h3 className="card__title">{title}</h3>
        <div className="cadr__params">
          {params.map((param, index) => {
            return (
              <div key={index} className="card__param">
                {param.title}

                {param?.features && (
                  <span className="card__features">
                    {param?.features?.map((feature, index) => {
                      return (
                        <span key={index} className="card__feature">
                          <Icon
                            name={feature?.icon}
                            data-tip={feature?.title}
                          />
                          <ReactTooltip
                            className="tooltip"
                            place="top"
                            type="light"
                            effect="solid"
                            backgroundColor="white"
                            border
                            borderColor="#FAC663"
                          />
                        </span>
                      );
                    })}
                  </span>
                )}
              </div>
            );
          })}

          {price && (
            <span className="card__param">
              Цена за сутки:
              <span className="card__price">{price}</span>
            </span>
          )}
        </div>
        <div className="card__actions">
          <Button primary block to={`/products/${id}`} as={Link}>
            Забронировать
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
