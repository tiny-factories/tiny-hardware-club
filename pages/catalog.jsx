import React from "react";
import { useCurrentUser } from "@/hooks/index";
import ProductEditor from "@/components/product/productEditor";
import Products from "@/components/product/products";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const CatalogPage = () => {
  {
     const [user] = useCurrentUser();
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
        <ProductEditor />
        <Tabs>
        <TabList>
          <Tab>All</Tab>
          <Tab>Keyboards</Tab>
          <Tab>Title 2</Tab>
          <Tab>Title 2</Tab>
          <Tab>Title 2</Tab>

        </TabList>

        <TabPanel>
          <Products />

        </TabPanel>
        <TabPanel>
          <Products />

        </TabPanel>
      </Tabs>
      </div>
    </>
  );
};

export default CatalogPage;
