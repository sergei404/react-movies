import Movie from "./Movie"

const Movies = (props) => {
  const {movies = []} = props
  return (
    <ul className="movies">
      {movies.length ? movies.map((movie) => <Movie key={movie.imdbID} {...movie}/>) : 'Not Found page'}
    </ul>
  )
}

export default Movies