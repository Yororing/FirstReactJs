import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DetailMovie from "../components/DetailMovie";

function Detail() {
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState({});
  const { id } = useParams();
  let array = [];
  const getMovieDetail = useCallback(async () => {
    const response = await fetch(
      `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
    );
    const json = await response.json();
    setMovie(json.data.movie);
    setLoading(false);
  }, [id]);
  useEffect(() => {
    getMovieDetail();
  }, [getMovieDetail]);
  array = [movie];
  console.log(array);
  return (
    <div>
      {loading ? (
        <h1>Loading</h1>
      ) : (
        <div>
          {array.map((movie) => (
            <DetailMovie
              key={movie.id}
              backImg={movie.background_image}
              coverImg={movie.medium_cover_image}
              title={movie.title_long}
              rating={movie.rating}
              language={movie.language}
              description={movie.description_intro}
              genres={movie.genres}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Detail;
