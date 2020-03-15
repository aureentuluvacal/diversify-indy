/** @jsx jsx */
import { jsx } from "theme-ui"
import { library } from "@fortawesome/fontawesome-svg-core"
import { fab } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope, faLink } from "@fortawesome/free-solid-svg-icons"
import styled from "styled-components"
import { uniqueId } from "../utils"

library.add(fab, faEnvelope, faLink)

const Wrapper = styled.div`
  margin: 1rem 0;
`

const ContactList = ({ contact }) => {
  const contactMap = {
    linkedin: ["fab", "linkedin-in"],
    email: faEnvelope,
    twitter: ["fab", "twitter"],
    instagram: ["fab", "instagram"],
    website: faLink,
  }

  return (
    <Wrapper>
      {Object.keys(contact).map(key => (
        <a
          href={contact[key]}
          target="_blank"
          rel="noopener noreferrer"
          key={uniqueId("Contact_")}
          sx={{
            color: "text",
            marginRight: "1rem",
            fontSize: "1.5rem",
          }}
        >
          <FontAwesomeIcon icon={contactMap[key]} />
        </a>
      ))}
    </Wrapper>
  )
}

export default ContactList
