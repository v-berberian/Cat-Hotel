import React from "react";

import Header from "../components/Header";
import Heading from "../components/Heading";
import ProductsGrid from "../components/ProductsGrid";
import Filter from "../components/Filter";
import Banner from "../components/Banner";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function ProductsPage() {
  return (
    <div>
      <Header />
      <Heading />
      <main className="main">
        <section className="section section_products">
          <div className="container">
            <div className="layout layout_products">
              <div className="layout_item">
                <Filter />
              </div>
              <div className="layout_item">
                <ProductsGrid />
              </div>
            </div>
          </div>
        </section>
        <Banner />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
