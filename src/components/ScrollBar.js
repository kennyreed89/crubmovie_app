import React from "react";
import { Link } from "react-router-dom";
export default function ScrollBar() {
  return (
    <div className="scrollmenu">
      <div class="scrollmenu">
        <a href="#home">Popular Streamed Movies</a>
        <a href="#news">Popular TV Shows</a>
        <a href="#contact">New TV Shows</a>
        <a href="#about">Movie Trailers</a>
        <a href="#home">TV & Movie Guide</a>
        <a href="#contact">New in Theaters</a>
        <a href="#about">Watch from Home</a>
        <a href="#about">Movie Trailers</a>
        <a href="#home">Trending on Moviehero</a>
        <Link to="/components/Review.js">Reviews</Link>
        <a href="#news">News</a>
        <a href="#home">Shop</a>
      </div>
    </div>
  );
}
