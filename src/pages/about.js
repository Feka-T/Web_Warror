import React from "react";
import Layout from "../components/Layout";
import { Link } from "gatsby";
import * as styles from "../styles/about.module.css";

const About = () => {
  return (
    <Layout>
      <div>
        <h1>About Page</h1>
        <p style={{ textAlign: "justify" }}>
          Today, Netlify is announcing that following our acquisition of Gatsby
          in February 2023, we are taking further steps to unify the Netlify and
          Gatsby Cloud platforms by taking the best features of each product and
          combining them into one world-class solution. As part of this product
          evolution, we are notifying all Gatsby Cloud customers of an end of
          service date for Gatsby Cloud products and services. That date depends
          on each Gatsby Cloud customer’s contract and renewal dates, and
          Netlify is providing direct migration paths to Netlify Cloud for all
          Gatsby Cloud customers to ensure continued fidelity and operations of
          all web properties. While this will impact the Gatsby Cloud product,
          it will not impact Gatsby JS. When Gatsby JS was launched, it was a
          groundbreaking framework and its innovative content sourcing truly
          made it stand out. Gatsby is used by more than 20 percent of Netlify
          Enterprise customers. We’re committed to the maintenance and
          innovation of Gatsby JS as an enterprise grade framework, with focus
          on stability and support for large scale projects. To do this, it’s
          important to free up our Gatsby specific resources that’ve been spent
          on the closed source Gatsby Cloud product to keep the framework truly
          open.
        </p>
        <h2>Reference</h2>
        <p>
          <Link
            className={styles.outLink}
            to="https://www.netlify.com/blog/gatsby-cloud-evolution/"
            target="_blank"
          >
            https://www.netlify.com/blog/gatsby-cloud-evolution/
          </Link>
        </p>
      </div>
    </Layout>
  );
};

export default About;

export const Head = () => <title>About Page | Fekadu Gatsby</title>;
