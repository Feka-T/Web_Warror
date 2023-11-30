import React from "react";
import Layout from "../components/Layout";
import * as styles from "../styles/project-details.module.css";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const ProjectDetails = ({ data }) => {
  const { html } = data.markdownRemark;
  const { title, stack } = data.markdownRemark.frontmatter;
  const featuredImg = getImage(data.markdownRemark.frontmatter.featuredImg);

  return (
    <Layout>
      <div className={styles.details}>
        <h2>{title}</h2>
        <h3>{stack}</h3>
        <div className={styles.featured}>
          <GatsbyImage image={featuredImg} alt={title} />
        </div>
        <div
          className={styles.html}
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </Layout>
  );
};

export default ProjectDetails;

export const Head = ({ data }) => (
  <title>{data.markdownRemark.frontmatter.title} | Fekadu Gatsby</title>
);

export const query = graphql`
  query ProjectDetails($slug: String) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        stack
        title
        featuredImg {
          childImageSharp {
            gatsbyImageData(
              blurredOptions: { width: 100 }
              placeholder: BLURRED
            )
          }
        }
      }
    }
  }
`;
