import React from "react";
import Layout from "../../components/Layout";
import * as styles from "../../styles/projects.module.css";
import { Link, graphql } from "gatsby";

// import { GatsbyImage, getImage } from "gatsby-plugin-image";

const Projects = ({ data }) => {
  console.log(data);
  const projects = data.projects.nodes;
  const contact = data.contact.siteMetadata.contact;
  // const image = getImage(data.projects.frontmatter.thumb.childImageSharp);

  return (
    <Layout>
      <div className={styles.portfolio}>
        <h2>Portfolio</h2>
        <h3>Projects & Websites I've Created</h3>
        <div className={styles.projects}>
          {projects.map((project) => (
            <Link to={"/projects/" + project.frontmatter.slug} key={project.id}>
              <div>
                {/* <Img fluid={project.frontmatter.thumb.childImageSharp.fluid} /> */}
                {/* <GatsbyImage image={image} alt="site banner" /> */}
                <h3>{project.frontmatter.title}</h3>
                <p>{project.frontmatter.stack}</p>
              </div>
            </Link>
          ))}
        </div>
        <p>Like what you see? email me at {contact} for a quote!</p>
      </div>
    </Layout>
  );
};

export default Projects;

export const Head = () => <title>Portfolio Page | Fekadu Gatsby</title>;

// export page query
export const query = graphql`
  query ProjectsPage {
    projects: allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
      nodes {
        frontmatter {
          slug
          stack
          title
          thumb {
            childImageSharp {
              gatsbyImageData(
                placeholder: BLURRED
                blurredOptions: { width: 100 }
              )
            }
          }
        }
        id
      }
    }
    contact: site {
      siteMetadata {
        contact
      }
    }
  }
`;
