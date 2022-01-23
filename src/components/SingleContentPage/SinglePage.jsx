import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { img_300, img_500, unavailable } from "../../api/config/DefaultImages";
import SingleData from "../SingleData/SingleData";
import "./SinglePage.css";
import SingleVideoPage from "./SingleVideoPage";
import Carousel from "../Carousel/Carousel";
import "./singlepage.scss";
import $ from "jquery";

const SinglePage = () => {
  $(function () {
    $(".ico").on("click", function () {
      $(".ico").toggleClass("press", 1000);
    });
  });
  const [content, setContent] = useState();
  const [similarMovies, setSimilarMovies] = useState();
  const [video, setVideo] = useState();

  const { id, mediaType } = useParams();

  const fetchData = async () => {
    try {
      const { data } = await axios.get(` 
      https://api.themoviedb.org/3/${mediaType}/${id}?api_key=${process.env.REACT_APP_API_KEY}&page=1`);
      // eslint-disable-next-line
      setContent(data);
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };
  const fetchSimilarMovies = async () => {
    try {
      const { data } = await axios.get(` 
     https://api.themoviedb.org/3/${mediaType}/${id}/similar?api_key=${process.env.REACT_APP_API_KEY}`);
      // eslint-disable-next-line
      const dataSlice = data.results;
      const filter = dataSlice.slice(0, 7);
      // eslint-disable-next-line
      setSimilarMovies(filter);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchVideos = async () => {
    try {
      const { data } = await axios.get(` 
     https://api.themoviedb.org/3/${mediaType}/${id}/videos?api_key=${process.env.REACT_APP_API_KEY}`);

      setVideo(data.results[0].key);
      // eslint-disable-next-line
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchData();
    fetchSimilarMovies();
    fetchVideos();

    // eslint-disable-next-line
  }, [id, setContent]);
  return (
    <>
      <div>
        {content && (
          <div
            className="open__modal"
            style={{
              backgroundImage: `url( https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/${content.backdrop_path})`,
            }}
          >
            <img
              className="poster__img"
              src={
                content.poster_path
                  ? `${img_300}/${content.poster_path}`
                  : unavailable
              }
              alt=""
            />
            <img
              className="backdrop__img"
              src={
                content.backdrop_path
                  ? `${img_500}/${content.backdrop_path}`
                  : unavailable
              }
              alt=""
            />

            <div className="open__detailsPage">
              <h3>{content.original_title || content.name}</h3>
              <div
                style={{
                  zIndex: "1000",
                  marginTop: "10px",
                  textAlign: "left",
                }}
                className="year"
              >
                {(
                  content.first_air_date ||
                  content.release_date ||
                  "-----"
                ).substring(0, 4)}{" "}
              </div>
              <h5
                style={{
                  display: "flex",
                  fontSize: "12px",
                }}
                className="genreList"
              >
                {content.genres.map((n) => {
                  return (
                    <p
                      key={n.id}
                      style={{ fontSize: "13px" }}
                      className="genre"
                    >
                      {n.name}
                    </p>
                  );
                })}
              </h5>
              {/* <div className="all__btns">
                <div className="like__btn2"></div>{" "}
              </div> */}
              <div className="videopage">
                {content && (
                  <SingleVideoPage trailer={video} title={content.title} />
                )}
              </div>
              <div className="tagline">
                <h5>{content.tagline}</h5>
              </div>
              <div className="overview">
                {/* <h4 className="overview__title">Overview</h4> */}

                <p>{content.overview}</p>
                <div>
                  <Carousel mediaType={mediaType} id={id} />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="similar__shows">
        <div className="btn__title">
          <h5>Similar </h5>
        </div>
        <div className="similar">
          {similarMovies &&
            similarMovies.map((n) => (
              <SingleData key={n.id} {...n} mediaType="movie" />
            ))}
        </div>
      </div>
    </>
  );
};

export default SinglePage;
