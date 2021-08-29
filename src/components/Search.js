import React from "react";

class Search extends React.Component {
  state = {
    search: "",
    filter: "all",
  };

  hendleKey = (evt) => {
    if (evt.code === "Enter") {
      this.props.searchMovies(this.state.search, this.state.filter);
    }
  };

  searchClick = () => {
    if (!this.state.search) {
      return;
    }
    this.props.searchMovies(this.state.search, this.state.filter);
  };

  handleFilter = ({ target }) => {
    this.setState(() => ({ filter: target.value }), () => {
      this.props.searchMovies(this.state.search, this.state.filter);
    });
  };

  render() {
    return (
      <div className="row">
        <div className="search-wrap">
          <div className="input-field">
            <input
              id="email_inline"
              type="search"
              className="validate"
              placeholder="search"
              value={this.state.search}
              onChange={({ target }) => this.setState({ search: target.value })}
              onKeyDown={this.hendleKey}
            />
            <button className="btn btn-search" onClick={this.searchClick}>
              Search
            </button>
          </div>
          <div className="filter-movies">
            <label className="form__label">
              <input
                className="form__checkbox"
                type="radio"
                name="filter"
                value="all"
                onChange={this.handleFilter}
                checked={this.state.filter === "all"}
              />
              <span className="form__fake"></span>
              <span className="form__text">All</span>
            </label>
            <label className="form__label">
              <input
                className="form__checkbox"
                type="radio"
                name="filter"
                value="movie"
                onChange={this.handleFilter}
                checked={this.state.filter === "movie"}
              />
              <span className="form__fake"></span>
              <span className="form__text">Movies</span>
            </label>
            <label className="form__label">
              <input
                className="form__checkbox"
                type="radio"
                name="filter"
                value="series"
                onChange={this.handleFilter}
                checked={this.state.filter === "series"}
              />
              <span className="form__fake"></span>
              <span className="form__text">Series</span>
            </label>
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
