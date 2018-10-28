import React, { Component } from 'react'
import gql from 'graphql-tag'
import { compose, graphql } from 'react-apollo'
import $ from 'jquery'

const TESTING = true

const projects = gql`
  query{
    projects {
      id
      name
      description
    }
  }
`

const profiles = gql`
  query{
    profiles {
      id
      name
    }
  }
`

class Test extends Component {
  constructor (props) {
    super(props)
    this.state = {
      renderChild: true,
      notificationsEnabled: false,
      notifications: [],
      projectsState: 'IDLE',
      profilesState: 'IDLE',
      gapiReady: false,
    }
    this.projects = []
    this.profiles = []
  }

  render() {
    if (TESTING) {
      if (this.state.projectsState === 'IDLE') {
        $.ajax({
          url: 'http://barux301.local:4000/api/graphiql',
          data: { query: 'query{projects{name tag}}' },
          headers: {
            'Authorization': 'Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJ2YWxpb3RfYXBwIiwiZXhwIjoxNTQzMTQ0OTMxLCJpYXQiOjE1NDA3MjU3MzEsImlzcyI6InZhbGlvdF9hcHAiLCJqdGkiOiJhMzBmMDA0My0zOTAzLTRjMzYtOWJjYy0yNGFlMWE3OGZlMTkiLCJuYmYiOjE1NDA3MjU3MzAsInN1YiI6IjEiLCJ0eXAiOiJhY2Nlc3MifQ.MwbQKhTM-wvjDqg9gRjKudP95j95OB6eFggrEwsPCH5pqN7HX0caoBofR6crIvjoRAwYKY1FYB2jr7GZ94xjyQ'
          },
          dataType: 'json',
          success: (data) => {
            console.log('SUCCESS')
            console.log(data)
            this.projects = data.data.projects
            console.log('PROJECTS:')
            console.log(this.projects)
            this.setState({ projectsState: 'DONE' })
          }
        })
      }
      if (this.state.profilesState === 'IDLE') {
        $.ajax({
          url: 'http://barux301.local:4000/api/graphiql',
          data: { query: 'query{profiles{id name profileAreas{area{name}}}}' },
          headers: {
            'Authorization': 'Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJ2YWxpb3RfYXBwIiwiZXhwIjoxNTQzMTQ0OTMxLCJpYXQiOjE1NDA3MjU3MzEsImlzcyI6InZhbGlvdF9hcHAiLCJqdGkiOiJhMzBmMDA0My0zOTAzLTRjMzYtOWJjYy0yNGFlMWE3OGZlMTkiLCJuYmYiOjE1NDA3MjU3MzAsInN1YiI6IjEiLCJ0eXAiOiJhY2Nlc3MifQ.MwbQKhTM-wvjDqg9gRjKudP95j95OB6eFggrEwsPCH5pqN7HX0caoBofR6crIvjoRAwYKY1FYB2jr7GZ94xjyQ'
          },
          dataType: 'json',
          success: (data) => {
            console.log('SUCCESS')
            console.log(data)
            this.profiles = data.data.profiles
            console.log('PROFILES:')
            console.log(this.profiles)
            this.setState({profilesState: 'DONE'})
          }
        })
      }
      return (
        <div>
          <h1>PROYECTOS</h1>
          {this.projects.map((project) => (
            <React.Fragment>
              <h2>{project.name}</h2>
              <h3>{project.tag}</h3>
            </React.Fragment>
          ))}
          <h1>PERFILES</h1>
          {this.profiles.map((profile) => (
            <React.Fragment>
              <h2>{profile.name}</h2>
              {profile.profileAreas.length > 0 && (<h3>Areas:</h3>)}
              <ul>
                {profile.profileAreas.map((profArea) => (
                  <li>{profArea.area.name}</li>
                ))}
              </ul>
            </React.Fragment>
          ))}
        </div>
      )
    }
  }
}

export default compose(
  graphql(projects, { name: 'projects' }),
  graphql(profiles, { name: 'profiles' })
)(Test)
