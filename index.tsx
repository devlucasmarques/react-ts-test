import React, { Component } from "react";
import { render } from "react-dom";
import Character from "./Character";
import { injectGlobal } from "styled-components";
import { Content } from "./Styles";
import axios from "axios";

interface IChar {
  name: string;
  eye_color: string;
}

interface AppProps {}
interface AppState {
  name: string;
  char: IChar[];
}

export default class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      name: "React",
      char: []
    };
  }

  componentDidMount() {
    this.getCharacters();
  }

  render() {
    return (
      <Content>
        {this.state.char.map(char => (
          <Character text={char.name} color={char.eye_color} />
        ))}
      </Content>
    );
  }

  async getCharacters(): Promise<number> {
    let len = -1;
    await axios
      .get("https://swapi.dev/api/people/")
      .then(res => {
        const chars = res.data.results;
        let charDTO: IChar[] = [];
        chars.forEach(char => {
          const { name, eye_color } = char;
          charDTO.push({ name, eye_color });
        });
        charDTO.sort((a, b) =>
          a.name < b.name ? -1 : a.name > b.name ? 1 : 0
        );
        this.setState({ char: charDTO });
        len = charDTO.length;
      })
      .catch(err => {
        console.log(err);
      });
    return len;
  }
}

injectGlobal`
  *, body {
    margin: 0;
    padding: 0;
    box-sizing: border-box 
  }
`;

render(<App />, document.getElementById("root"));
