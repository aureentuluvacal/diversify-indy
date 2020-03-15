import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Card from "../components/card"
import Interests from "../components/interests"
import ContactList from "../components/contactList"
import Picture from "../components/picture"
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
  padding: 1.5rem;
  display: flex;
  line-height: 1.25rem;
`

const SpeakerName = styled.h2`
  font-size: 1.62671rem;
  margin-bottom: 0.5rem;
`

const Pronouns = styled.h4`
  font-size: 1.1rem;
  color: gray;
`

const TextWrapper = styled.div`
  margin-left: 1rem;
`

const Topics = styled.div`
  margin-top: 1rem;
`

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`

const NameWrapper = styled.div`
  display: flex;
  flex-direction: column;
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
      If you're interested in joining this list,{" "}
      <Link
        to="https://airtable.com/shrbBw5YZE60rie13"
        style={{
          textDecoration: `none`,
          color: "#008080",
        }}
      >
        fill out this form
      </Link>
      .
    </p>
    <br />
    <List>
      {speakers.map(speaker => {
        const {
          name,
          biography,
          interests,
          pronouns,
          contact,
          picture,
          topics,
        } = speaker
        return (
          <Card key={uniqueId("Speaker_")}>
            <ListItem>
              <Picture picture={picture} name={name} />
              <TextWrapper>
                <Header>
                  <NameWrapper>
                    <SpeakerName>{name}</SpeakerName>
                    <Pronouns>{pronouns}</Pronouns>
                  </NameWrapper>
                  <ContactList contact={contact} />
                </Header>
                <br />
                <p>{biography}</p>
                <Topics>
                  <b>Topics:</b> {topics}
                </Topics>
                <Interests interests={interests} />
              </TextWrapper>
            </ListItem>
          </Card>
        )
      })}
    </List>
  </Layout>
)

export default SpeakersPage
