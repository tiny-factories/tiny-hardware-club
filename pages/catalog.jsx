import React from "react";
import { useCurrentUser } from "@/hooks/index";
import ProductEditor from "@/components/product/productEditor";
import Products from "@/components/product/products";

const CatalogPage = () => {
  {
    /* const [user] = useCurrentUser(); */
  }

  return (
    <>
      <style jsx>
        {`
          p {
          }
          h3 {
          }
        `}
      </style>
      <div style={{ marginBottom: "2rem" }}>
        <h2>catalog</h2>
        <p>Have a wonderful day.</p>
      </div>
      <div>
        <h3>Search box and categories go here</h3>
        <input />
        {/* <ProductEditor /> */}
        {/* @FIX: posting isnt working */}
        <Products />
      </div>
    </>
  );
};

export default CatalogPage;
