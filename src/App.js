import React from 'react';
import './App.css';

import Home from './pages/Home/Home'
import Navbar from './components/Navbar/Navbar'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndexOfInstrument: 3,
      currentInstrumentImg: require("./components/assets/piano.png"),
      instruments: [
          {
              description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr.",
              class: "turqouise",
              expandedContent: {
                title: "Millenium Acoustic Guitar",
                description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
              }
          },
          {
              description: "Pellentesque ut tortor vitae mauris luctus congue non at velit. Donec semper risus in ligula finibus, eget tempor nibh dictum. Nam pretium velit et nisi ultrices pretium. Nulla a lobortis mi. Duis dignissim accumsan massa quis tincidunt. Nunc vitae tristique justo. Nunc at magna sit amet ante aliquam gravida. Nunc dignissim orci id consequat elementum.",
              class: "bleu",
              expandedContent: {
                title: "Infinity Cello",
                description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
              }
          },
          {
              description: "Phasellus a nisl dictum, aliquet lorem eget, ultricies turpis. Maecenas tempor tempus nunc quis pretium. Vestibulum feugiat, risus sit amet aliquam ultricies, orci enim faucibus diam, at placerat quam eros at magna. Curabitur mattis sodales diam quis venenatis. Vestibulum ante ipsum primis in faucibus orci luctus.",
              class: "pink",
              expandedContent: {
                title: "Eternity Piano",
                description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
              }
          },
          {
              description: "Ut id viverra ante. Vivamus nisi turpis, venenatis vitae erat sed, consequat suscipit nisi. Integer eget sapien augue. Praesent ligula urna, laoreet eget dapibus sit amet, rutrum sed ex. Curabitur odio tellus, sollicitudin ut ex et, dictum elementum mi. Phasellus rhoncus ullamcorper turpis a euismod",
              class: "bej",
              type: "violin",
              expandedContent: {
                title: "Infinity Violin",
                description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
              }
          },
          {
              description: "Aliquam erat volutpat. Fusce vitae lacinia ante, vel accumsan purus. Nam at purus non ipsum maximus accumsan. Nullam dignissim arcu urna, eu blandit mi pellentesque sed. Nullam placerat bibendum dui, quis tristique nisl molestie eu. Curabitur gravida ligula tincidunt metus semper fringilla.",
              class: "orange",
              expandedContent: {
                title: "Flute of the Stars",
                description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
              }
          }
      ]
    }

    this.changeCurrentInstrument = this.changeCurrentInstrument.bind(this);
  }

  changeCurrentInstrument(index, img) {
    this.setState({
      currentIndexOfInstrument: index,
      currentInstrumentImg: img
    })
  }

  render() {
    return (
      <div className="App">
        <Navbar instruments={this.state.instruments} currentIndex={this.state.currentIndexOfInstrument}></Navbar>
        <Home instruments={this.state.instruments} 
        slideHandler={this.changeCurrentInstrument}
        currentIndex={this.state.currentIndexOfInstrument}></Home>
      </div>
    );
  }
}

