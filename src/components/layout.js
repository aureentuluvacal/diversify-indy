/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import "./layout.css"

const Wrapper = styled.div`
  border-radius: 0.5rem;
  margin: 0 auto;
  max-width: 960px;
  min-width: 800px;
  padding: 0 1.0875rem 1.45rem;
  @media (max-width: 768px) {
    min-width: auto;
    padding: 0;
  }
`

const Layout = ({ children }) => {
  return (
    <>
      <Wrapper>
        <main>{children}</main>
      </Wrapper>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
