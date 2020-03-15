import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const ContactPage = () => (
  <Layout>
    <SEO title="Contact" />
    <h1>Contact</h1>
    <p style={{ minWidth: "960px" }}>
      If you have any questions, please reach out to{" "}
      <Link
        to="mailto:irmammesa@gmail.com"
        style={{
          textDecoration: `none`,
          color: "#008080",
        }}
      >
        Irma Mesa via email.
      </Link>
    </p>
  </Layout>
)

export default ContactPage
