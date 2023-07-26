import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const DOCSIE_DEPLOYMENT_KEY = "deployment_xXQn2cyJyNN9OkKvw";

const DocumentationPage = ({ data, location }) => {
    const siteTitle = data.site.siteMetadata.title

    return (
        <Layout location={location} title={siteTitle}>
            <link media="all" href="https://lib.docsie.io/current/styles/docsie.css" rel="stylesheet" />
            <script src="https://lib.docsie.io/current/service.js" dataDocsie={`docsie_pk_key:${DOCSIE_DEPLOYMENT_KEY}`} />
        </Layout>
    )
}

export const Head = () => <Seo title="Docs" />

export default DocumentationPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
