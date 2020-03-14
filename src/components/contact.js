import React from "react"
import { library } from "@fortawesome/fontawesome-svg-core"
import { fab } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope, faLink } from "@fortawesome/free-solid-svg-icons"
import { uniqueId } from "../utils"

library.add(fab, faEnvelope, faLink)

const Contact = ({ contact }) => {
  const contactMap = {
    linkedin: ["fab", "linkedin-in"],
    email: faEnvelope,
    twitter: ["fab", "twitter"],
    instagram: ["fab", "instagram"],
    website: faLink,
  }

  return Object.keys(contact).map(key => (
    <a
      href={contact[key]}
      target="_blank"
      rel="noopener noreferrer"
      key={uniqueId("Contact_")}
    >
      <FontAwesomeIcon icon={contactMap[key]} />
    </a>
  ))
}

export default Contact
