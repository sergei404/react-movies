const Movie = (props) => {
  const {Title: title, Year: year, imdbID: id, Type: type, Poster: poster} = props
  return (
    <li className="card movie" id={id}>
      <div className="card-image waves-effect waves-block waves-light">
        {poster === 'N/A' ?
        <img className="activator" src={`https://via.placeholder.com/300x160?text=${title}`} alt=""/>:
        <img className="activator" src={poster} alt=""/>
      }
        
      </div>
      <div className="card-content">
        <span className="card-title activator grey-text text-darken-4">{title}</span>
        <p>{year} <span className="right">{type}</span></p>
      </div>
    </li>
  );
};

export default Movie;
