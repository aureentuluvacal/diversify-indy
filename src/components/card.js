import React from "react"
import styled from "styled-components"

const Wrapper = styled.div`
  border: 1px solid #e9e9e9;
  border-radius: 8px;
  background-color: #ffffff;
  margin: 10px 0;
`

const Card = ({ children }) => {
  return <Wrapper>{children}</Wrapper>
}

export default Card
