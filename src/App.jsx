import React from "react";
import "./App.css";
import PreviewCard from "./components/PreviewCard";
import imgProductDesktop from "./images/image-product-desktop.jpg";
import imgProductMobile from "./images/image-product-mobile.jpg";
import { useWindowSize } from "./hooks/useWindowSize";

const App = () => {
  const [width] = useWindowSize();

  return (
    <div className="wrapper">
      <PreviewCard
        productImage={width >= 900 ? imgProductDesktop : imgProductMobile}
        title={"Gabrielle Essence Eau De Parfum"}
        desc={`A floral, solar and voluptuous interpretation composed by Olivier Polge,
        Perfumer-Creator for the House of CHANEL.`}
        category={"Perfume"}
        isOnSale={true}
        originalPrice={"$149.99"}
        onSalePrice={"$169.99"}
      />
    </div>
  );
};

export default App;
