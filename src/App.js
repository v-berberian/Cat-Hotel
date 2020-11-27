import React, { useEffect } from "react";
import "./base.css";
import "./styles.css";
import "./swiper.css";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
  withRouter
} from "react-router-dom";

import ProductsPage from "./pages/Products";
import ProductPage from "./pages/Product";
import HomePage from "./pages/Home";

export default function App() {
  function _ScrollToTop(props) {
    const { pathname } = useLocation();
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
    return props.children;
  }
  const ScrollToTop = withRouter(_ScrollToTop);
  withRouter;
  return (
    <Router>
      <ScrollToTop>
        <div className="wrapper">
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>

            <Route exact path="/products">
              <ProductsPage />
            </Route>
            <Route path="/products/:id">
              <ProductPage />
            </Route>
            <Route>
              <h1>404</h1>
            </Route>
          </Switch>
        </div>
      </ScrollToTop>
    </Router>
  );
}
