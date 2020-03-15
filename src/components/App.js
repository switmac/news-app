import React from "react";
import { getNewsResults } from "../api/news";
import Filter from "./Filter";
import Article from "./Article";

class App extends React.Component {
  state = { results: [], isSearching: false };

  componentDidMount() {}

  setSearchingState = isSearching => {
    this.setState({ isSearching });
  };

  onSubmit = async filter => {
    if (!filter) return;
    this.setSearchingState(true);

    const response = await getNewsResults(filter);
    const { articles, status } = response && response.data;
    status === "ok" && this.setState({ results: articles });

    setTimeout(() => {
      this.setSearchingState(false);
    }, 500);
  };

  content = () => {
    if (!this.state.results) return;
    const results = this.state.results.map((article, index) => {
      return <Article {...article} key={index} />;
    });

    return <div className="ui items">{results}</div>;
  };

  render() {
    const resultLength = this.state.results.length;
    const articleText = resultLength === 1 ? "article" : "articles";

    return (
      <div className="ui container" style={{ marginTop: "20px" }}>
        <h1 style={{ textAlign: "center", color: "#6BB5FF" }}>
          Marie News App
        </h1>
        <Filter onSubmit={this.onSubmit} isSearching={this.state.isSearching} />
        <div style={{ marginBottom: "20px" }}>
          <div style={{ fontWeight: "bold" }}>Search Results!</div>
          <div>
            Found {resultLength} {articleText}
          </div>
        </div>
        <div>{this.content()}</div>
      </div>
    );
  }
}

export default App;
