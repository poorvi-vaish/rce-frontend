import React, { Component } from "react";

import TextEditor from "./components/TextEditor/TextEditor";
import Run from "./components/Run/Run";
import LanguageSelector from "./components/LanguageSelector/LanguageSelector";
import Result from "./components/Result/Result";

class App extends Component {
  constructor() {
    super();
    this.state = {
      language: "javascript",
      code: "",
      output: "",
      loading: false,
    };
  }
  onLanguageChange = (language) => {
    this.setState({ language: language });
    console.log(this.state.language);
  };

  oncodeChange = (code) => {
    this.setState({ code });
  };

  onResult = (output) => {
    this.setState({ output });
  };

  onLoading = (loading) => {
    this.setState({ loading });
  };

  render() {
    return (
      <div>
        <div style={{ display: "flex" }}>
          <LanguageSelector changeLanguage={this.onLanguageChange} />
          <Run
            code={this.state.code}
            language={this.state.language}
            setResult={this.onResult}
            onLoading={this.onLoading}
          />
        </div>
        <TextEditor
          language={this.state.language}
          codeChange={this.oncodeChange}
        />
        <Result output={this.state.output} loading={this.state.loading} />
      </div>
    );
  }
}

export default App;
