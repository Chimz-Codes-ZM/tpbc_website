import React from "react";
import Layout from "./components/layout";
import Header from "./sections/ministries/header";
import Ministry from "./sections/ministries/ministry";

const Ministries = () => {
  return (
    <Layout>
      <Header />
      <Ministry />
    </Layout>
  );
};

export default Ministries;
