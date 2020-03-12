import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { speakers } from "../constants/speakers"

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
    <ul>
      {speakers.map(speaker => (
        <li key={`${Math.floor(Math.random() * 80000)}`}>
          <h3>{speaker.name}</h3>
          <br />
          <p>{speaker.biography}</p>
        </li>
      ))}
    </ul>
  </Layout>
)

export default SpeakersPage
