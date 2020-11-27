import React from "react";

import Container from "../Container";
import Card from "./Card";

export default function WhyUs() {
  return (
    <>
      <div className="why-us__cards">
        <Card
          icon={"/icons/SVG/why-us-cards/card-icon-1.svg"}
          title={"Комфортная температура"}
          description={
            "Во всех номерах поддерживается комфортная температура в пределах 23 - 25 градусов. В каждом номере можно дополнительно отрегулировать температуру."
          }
        />
        <Card
          icon={"/icons/SVG/why-us-cards/card-icon-2.svg"}
          title={"Видеонаблюдение"}
          description={
            "Мы предоставляем доступ в нашу систему. Вы сможете следить за своим питомцем со своего смартфона или компьютера."
          }
        />
        <Card
          icon={"/icons/SVG/why-us-cards/card-icon-3.svg"}
          title={"Услуги Зоотакси"}
          description={
            "Мы приедем за вашим питомцем в любой район Санкт-Петербурга."
          }
        />
        <Card
          icon={"/icons/SVG/why-us-cards/card-icon-4.svg"}
          title={"Сбалансированное питание"}
          description={
            "Вы можете привезти свой корм или доверить рацион своего питомца нашим профессионалам."
          }
        />
        <Card
          icon={"/icons/SVG/why-us-cards/card-icon-5.svg"}
          title={"Комфортная температура"}
          description={
            "Во всех номерах поддерживается комфортная температура в пределах 23 - 25 градусов. В каждом номере можно дополнительно отрегулировать температуру."
          }
        />
        <Card
          icon={"/icons/SVG/why-us-cards/card-icon-6.svg"}
          title={"Лучшие ветеринары"}
          description={
            "В гостинице 24 часа дежурит ветеринарный врач, который окажет любую помощь в случае необходимости."
          }
        />
      </div>
    </>
  );
}
