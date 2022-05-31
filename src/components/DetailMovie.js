import PropTypes from "prop-types";
import styles from "../css/Detail.module.css";

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
    <div className={styles.container}>
      <img className={styles.backImg} src={backImg} alt={backImg} />
      <img className={styles.coverImg} src={coverImg} alt={title} />
      <h1 className={styles.title}>{title}</h1>
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
