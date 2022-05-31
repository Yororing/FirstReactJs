import PropTypes from "prop-types";

function DetailMovie({
  backImg,
  coverImg,
  title,
  rating,
  genres,
  language,
  description,
}) {
  return (
    <div>
      <img src={backImg} alt={backImg} />
      <img src={coverImg} alt={title} />
      <h1>{title}</h1>
      <h3>rating: {rating}</h3>
      <h3>language: {language}</h3>
      <p>{description}</p>
      <ul>
        {genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
    </div>
  );
}

DetailMovie.propTypes = {
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  language: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default DetailMovie;
