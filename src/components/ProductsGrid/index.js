import React from "react";

import ProductCard from "../ProductCard";

const products = [
  {
    id: 1,
    title: "Эконом",
    image: "images/cat1.jpg",
    price: "200₽",
    params: [
      {
        title: "Размеры (ШхГхВ) - 90х70х180см"
      },
      {
        title: "Площадь - 0,63 м2"
      },
      {
        title: "Оснащение номера",
        features: [
          {
            icon: "sofa",
            title: "Лежак"
          },
          {
            icon: "claw-point",
            title: "Когтеточка"
          },
          {
            icon: "clew",
            title: "Игровой комплекс",
            title: "Игровой комплекс"
          },
          {
            icon: "house",
            title: "Домик"
          }
        ]
      }
    ]
  },
  {
    id: 2,
    title: "Эконом",
    image: "images/cat1.jpg",
    price: "200₽",
    params: [
      {
        title: "Размеры (ШхГхВ) - 90х70х180см"
      },
      {
        title: "Площадь - 0,63 м2"
      },
      {
        title: "Оснащение номера",
        features: [
          {
            icon: "sofa",
            title: "Лежак"
          },
          {
            icon: "claw-point",
            title: "Когтеточка"
          },
          {
            icon: "clew",
            title: "Игровой комплекс"
          },
          {
            icon: "house",
            title: "Домик"
          }
        ]
      }
    ]
  },
  {
    id: 3,
    title: "Эконом",
    image: "images/cat1.jpg",
    price: "200₽",
    params: [
      {
        title: "Размеры (ШхГхВ) - 90х70х180см"
      },
      {
        title: "Площадь - 0,63 м2"
      },
      {
        title: "Оснащение номера",
        features: [
          {
            icon: "sofa",
            title: "Лежак"
          },
          {
            icon: "claw-point",
            title: "Когтеточка"
          },
          {
            icon: "clew",
            title: "Игровой комплекс"
          },
          {
            icon: "house",
            title: "Домик"
          }
        ]
      }
    ]
  },
  {
    id: 4,
    title: "Эконом",
    image: "images/cat1.jpg",
    price: "200₽",
    params: [
      {
        title: "Размеры (ШхГхВ) - 90х70х180см"
      },
      {
        title: "Площадь - 0,63 м2"
      },
      {
        title: "Оснащение номера",
        features: [
          {
            icon: "sofa",
            title: "Лежак"
          },
          {
            icon: "claw-point",
            title: "Когтеточка"
          },
          {
            icon: "clew",
            title: "Игровой комплекс"
          },
          {
            icon: "house",
            title: "Домик"
          }
        ]
      }
    ]
  },
  {
    id: 5,
    title: "Эконом",
    image: "images/cat1.jpg",
    price: "200₽",
    params: [
      {
        title: "Размеры (ШхГхВ) - 90х70х180см"
      },
      {
        title: "Площадь - 0,63 м2"
      },
      {
        title: "Оснащение номера",
        features: [
          {
            icon: "sofa",
            title: "Лежак"
          },
          {
            icon: "claw-point",
            title: "Когтеточка"
          },
          {
            icon: "clew",
            title: "Игровой комплекс"
          },
          {
            icon: "house",
            title: "Домик"
          }
        ]
      }
    ]
  },
  {
    id: 6,
    title: "Эконом",
    image: "images/cat1.jpg",
    price: "200₽",
    params: [
      {
        title: "Размеры (ШхГхВ) - 90х70х180см"
      },
      {
        title: "Площадь - 0,63 м2"
      },
      {
        title: "Оснащение номера",
        features: [
          {
            icon: "sofa",
            title: "Лежак"
          },
          {
            icon: "claw-point",
            title: "Когтеточка"
          },
          {
            icon: "clew",
            title: "Игровой комплекс"
          },
          {
            icon: "house",
            title: "Домик"
          }
        ]
      }
    ]
  }
];

const ProductsGrid = () => {
  return (
    <div className="grid grid_products">
      {products.map((product) => {
        return (
          <div key={product.id} className="grid_item">
            <ProductCard {...product} />
          </div>
        );
      })}
    </div>
  );
};

export default ProductsGrid;
