import React from "react"
import styled from "styled-components"
import { uniqueId } from "../utils"

const Interest = styled.div`
  border: ${props => {
    if (props.type === "Meetups") {
      return "1px solid #800000"
    } else if (props.type === "Companies") {
      return "1px sold #004080"
    }
    return "1px solid #008080"
  }};
  border-radius: 1rem;
  margin-right: 0.625rem;
  padding: 0.375rem 0.5rem;
  color: white;
  background-color: ${props => {
    if (props.type === "Meetups") {
      return "#800000"
    } else if (props.type === "Companies") {
      return "#004080"
    }
    return "#008080"
  }};
`

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 1.5rem 0;
  justify-content: start;
`

const Interests = ({ interests }) => {
  return (
    <Wrapper>
      <span style={{ marginRight: "1rem" }}>Interested in speaking at:</span>
      <div style={{ display: "flex" }}>
        {interests.map(interest => (
          <Interest type={interest} key={uniqueId("Interest_")}>
            {interest}
          </Interest>
        ))}
      </div>
    </Wrapper>
  )
}

export default Interests
