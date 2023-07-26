import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

import "./docs.css"

const DOCSIE_DEPLOYMENT_KEY = "deployment_xXQn2cyJyNN9OkKvw";

const DocsieComponent = React.memo(() => <div data-ddsroot="true" />);
class DocumentationPage extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        const style = document.createElement("link");
        style.id = "docsie-style";
        style.setAttribute("media", "all");
        style.setAttribute("rel", "stylesheet");
        style.setAttribute("href", "https://lib.docsie.io/current/styles/docsie.css");
        document.body.appendChild(style);

        const script = document.createElement("script");
        script.id = "docsie-script";
        script.setAttribute("async", "");
        script.setAttribute("type", "text/javascript");
        script.setAttribute("src", "https://lib.docsie.io/current/service.js");
        script.setAttribute("data-docsie", `docsie_pk_key:${DOCSIE_DEPLOYMENT_KEY}`);
        document.body.appendChild(script);
    }
    componentWillUnmount() {
        document.getElementById("docsie-style").remove();
        document.getElementById("docsie-script").remove();
    }
    render() {
        const { data, location } = this.props;
        const siteTitle = data.site.siteMetadata.title

        return (
            <Layout location={location} title={siteTitle}>
                <DocsieComponent />
            </Layout>
        )
    }
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
