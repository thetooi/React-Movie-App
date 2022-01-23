import axios from "axios";
import React, { useEffect, useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { img_300, noPicture } from "../../api/config/DefaultImages";
import "./Carousel.css";
// const handleDragStart = (e) => e.preventDefault();

const Gallery = ({ mediaType, id }) => {
  const [credits, setCredits] = useState();

  const responsive = {
    0: {
      items: 2,
    },
    380: {
      items: 2,
    },
    512: {
      items: 3,
    },
    665: {
      items: 4,
    },
    767: {
      items: 3,
    },
    870: {
      items: 3,
    },
    1024: {
      items: 5,
    },
    1265: {
      items: 6,
    },
  };

  const items = credits?.map((n) => {
    return (
      <div className="carousel__d">
        <img
          src={n.profile_path ? `${img_300}/${n.profile_path}` : noPicture}
          alt=""
          className="caro_img"
        />
        <div className="caro__details">
          <h6 className="cast__name">{n.original_name}</h6>
        </div>
      </div>
    );
  });

  const fetchCredits = async () => {
    try {
      const { data } = await axios.get(` 
     https://api.themoviedb.org/3/${mediaType}/${id}/credits?api_key=${process.env.REACT_APP_API_KEY}`);
      const dataSlice = data.cast;
      setCredits(dataSlice);
      console.log(data);

      // eslint-disable-next-line
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchCredits();

    // eslint-disable-next-line
  }, []);

  return (
    <AliceCarousel
      infinite
      autoPlay
      disableButtonsControls
      disableDotsControls
      mouseTracking
      items={items}
      responsive={responsive}
    />
  );
};

export default Gallery;
