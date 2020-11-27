import React from "react";

export default function Card({ icon, title, description }) {
  return (
    <section className="why-us__card">
      <div className="why-us__card--icon">
        <img src={icon} alt="" />{" "}
      </div>
      <div className="why-us__card--title"> {title} </div>
      <div className="why-us__card--description"> {description} </div>
    </section>
  );
}
