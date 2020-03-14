import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Card from "../components/card"
import Interests from "../components/interests"
import Contact from "../components/contact"
import { speakers } from "../constants/speakers"
import { uniqueId } from "../utils"

const List = styled.ul`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  list-style-type: none;
  margin: 0;
  padding: 0;
`

const ListItem = styled.li`
  padding: 20px;
`

const SpeakerName = styled.h2`
  font-size: 1.62671rem;
`

const Pronouns = styled.h4`
  font-size: 1.1rem;
  color: gray;
`

const SpeakersPage = () => (
  <Layout>
    <SEO title="Diversify Indy Speakers" />
    <h1>Speakers</h1>
    <p>
      This list was created to expose talented and diverse individuals who are
      local to Indianapolis. We encourage you to contact them for panels and
      conferences.
    </p>
    <br />
    <p>
      If you're interested in joining this list, <a href="">go here</a>.
    </p>
    <br />
    <List>
      {speakers.map(speaker => {
        const {
          name,
          biography,
          interests,
          interestsIfOther,
          pronouns,
          contact,
        } = speaker
        return (
          <Card key={uniqueId("Speaker_")}>
            <ListItem>
              <SpeakerName>{name}</SpeakerName>
              <Pronouns>{pronouns}</Pronouns>
              <br />
              <p>{biography}</p>
              <Interests interests={interests} other={interestsIfOther} />
              <Contact contact={contact} />
            </ListItem>
          </Card>
        )
      })}
    </List>
  </Layout>
)

export default SpeakersPage
