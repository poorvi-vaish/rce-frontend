import React, { Component } from "react";
import "./App.css";
import TextEditor from "./components/TextEditor/TextEditor";
import LanguageSelector from "./components/LanguageSelector/LanguageSelector";

class App extends Component {
  render() {
    return (
      <div>
        <LanguageSelector />
        <TextEditor />

        {/* <Result /> */}
      </div>
    );
  }
}

export default App;
