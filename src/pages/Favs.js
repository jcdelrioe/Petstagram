import React from "react";
import { Helmet } from "react-helmet";
import { FavsWithQuery } from "../container/GetFavorites";
import { Layout } from "../components/Layout";

export default () => {
  return (
    <Layout
      title="Tus favoritos"
      subtitle="Aqui puedes encontrar tus favoritos"
    >
      <FavsWithQuery />
    </Layout>
  );
};
