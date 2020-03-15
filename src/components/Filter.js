import React from "react";
import { countryOptions, topicOptions } from "../constants/options";

const baseSeachFieldClassNames = "ui icon input";
class Filter extends React.Component {
  state = {
    searchText: "",
    country: countryOptions[0].value,
    topic: topicOptions[0].value
  };

  onFormSubmit = e => {
    e.preventDefault();
    const params = {
      searchText: this.state.searchText,
      topic: this.state.topic,
      country: this.state.country
    };

    const isValidFilter = this.isValidFilter(params);
    if (!isValidFilter) return;

    this.props.onSubmit(params);
  };

  isValidFilter(params) {
    if (params.topic === "everything" && !params.searchText) return false;
    return true;
  }

  getCountryDropdownHtml() {
    const list = countryOptions.map((opt, index) => (
      <option key={index} value={opt.value}>
        {opt.label}
      </option>
    ));
    return (
      <select
        className="ui dropdown"
        onChange={e => this.setState({ country: e.target.value })}
      >
        {list}
      </select>
    );
  }

  getTopicDropdownHtml() {
    const list = topicOptions.map((opt, index) => (
      <option key={index} value={opt.value}>
        {opt.label}
      </option>
    ));
    return (
      <select
        className="ui dropdown"
        onChange={e => this.setState({ topic: e.target.value })}
      >
        {list}
      </select>
    );
  }

  render() {
    const searchFieldClassNames = this.props.isSearching
      ? `${baseSeachFieldClassNames} loading`
      : baseSeachFieldClassNames;

    return (
      <div className="search-bar ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="inline fields">
            <div className="three wide field">
              {this.getCountryDropdownHtml()}
            </div>
            <div className="three wide field">
              {this.getTopicDropdownHtml()}
            </div>
            <div className="five wide field">
              <div className={searchFieldClassNames}>
                <input
                  type="text"
                  placeholder="Search article..."
                  value={this.state.searchText}
                  onChange={e => this.setState({ searchText: e.target.value })}
                />
                <i className="search icon"></i>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Filter;
