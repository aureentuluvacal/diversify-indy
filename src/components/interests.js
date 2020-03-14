import React from "react"
import styled from "styled-components"
import { uniqueId } from "../utils"

const Interest = styled.div`
  border: 1px solid blue;
  border-radius: 16px;
  margin-right: 10px;
  padding: 4px 6px;
`

const Interests = ({ interests, interestsIfOther }) => {
  return (
    <div style={{ display: "flex" }}>
      {interests.map(interest => (
        <Interest key={uniqueId("Interest_")}>{interest}</Interest>
      ))}
    </div>
  )
}

export default Interests
