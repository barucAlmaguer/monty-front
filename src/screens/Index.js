import React, { Component } from "react";
import WelcomeTitle from "../components/WelcomeTitle";
import ExampleContainer from "../containers/exampleContainer";

class Index extends Component {
  render() {
    return (
      <section className='Index'>
        <WelcomeTitle />
        <ExampleContainer />
      </section>
    )
  }
}

export default Index
