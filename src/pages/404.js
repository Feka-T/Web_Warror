import * as React from "react";
import Layout from "../components/Layout";

const NotFoundPage = () => {
  return (
    <Layout>
      <div>
        <h2>404</h2>
        <p>Sorry, that page doesn't exist (yet)!</p>
      </div>
    </Layout>
  );
};

export default NotFoundPage;

export const Head = () => <title>Not found | Fekadu Gatsby</title>;
