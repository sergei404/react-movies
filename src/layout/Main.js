import React from "react";
import Movies from "../components/Movies"
import Preloader from "../components/Preloader";
import Search from "../components/Search";

const API_KEY = process.env.REACT_APP_API_KEY

class Main extends React.Component {
  state = {
    movies: [],
    loading: true
  }

  componentDidMount() {
    // fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=matrix`)
    // .then((res) => res.json())
    // .then((data) => this.setState({
    //   movies: data.Search,
    //   loading: false
    // }))
    this.searchMovies()
  }

  searchMovies = (str = 'matrix', type = 'all') => {
    this.setState({
      loading: true
    })

    let path = `http://www.omdbapi.com/?apikey=${API_KEY}&s=${str}${type !== 'all' ? `&type=${type}` : ''}`
    
    fetch(path)
    .then((res) => res.json())
    .then((data) => this.setState({
      movies: data.Search,
      loading: false
    }))
  }

  render() {
    return (
      <main className={`container content ${this.state.loading ? 'preloader' : ''}`}>
        <Search searchMovies={this.searchMovies}/>
        {!this.state.loading ? 
        <Movies movies={this.state.movies}/> :
        <Preloader />}
      </main>
    )
  } 
};

export default Main;