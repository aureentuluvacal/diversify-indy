/** @jsx jsx */
import { jsx } from "theme-ui"
import styled from "styled-components"

const Wrapper = styled.div`
  border-radius: 0.5rem;
  margin: 0.625rem 0;
`

const Card = ({ children }) => {
  return (
    <Wrapper
      sx={{
        backgroundColor: "tertiary",
        color: "text",
        borderStyle: "solid",
        borderWidth: "1px",
        borderColor: "border",
      }}
    >
      {children}
    </Wrapper>
  )
}

export default Card
