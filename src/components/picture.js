import React from "react"
import styled from "styled-components"

const Image = styled.img`
  max-width: 300px;
`
const Picture = ({ picture, name }) => {
  return <Image src={`../../${picture}`} alt={name} />
}

export default Picture
