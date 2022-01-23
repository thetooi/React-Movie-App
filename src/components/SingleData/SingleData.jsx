import { useHistory } from "react-router-dom";
import { img_300, unavailable } from "../../api/config/DefaultImages";
import "./SingleData.css";

const SingleData = ({
  poster_path,
  title,
  name,
  id,
  vote_average,
  release_date,
  first_air_date,
  mediaType,
  media_type,
}) => {
  const history = useHistory();

  const handleClick = () => {
    history.push(`/${mediaType || media_type}/${id}`);
  };
  const setVoteClass = (vote) => {
    if (vote >= 8) {
      return "green";
    } else if (vote >= 6) {
      return "orange";
    } else {
      return "red";
    }
  };

  return (
    <>
      <div style={{ color: "white" }} className="SingleDataMedia">
        <span className={` tag ${setVoteClass(vote_average)} vote__tag`}>
          {Math.round(vote_average * 10) / 10}
        </span>

        <img
          src={poster_path ? `${img_300}/${poster_path}` : unavailable}
          alt=""
        />
        <div className="read__more">
          <button onClick={handleClick}>Read More</button>
        </div>
        <div className="SingleDataDetails">
          <h6>
            {title || name}(
            {(first_air_date || release_date || "-----").substring(0, 4)})
          </h6>
        </div>
      </div>
    </>
  );
};

export default SingleData;
