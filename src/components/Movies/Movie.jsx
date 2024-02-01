import { useState } from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Movie({ movie }) {
  const { score, show } = movie || {};
  //   console.log(movie);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`relative border-2 border-primary rounded-lg cursor-pointer ${
        isHovered ? "filter brightness-75" : ""
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div>
        {show?.image?.medium ? (
          <img className="w-full rounded-md" src={show?.image?.medium} alt="" />
        ) : (
          <p className="absolute top-1/2 left-0 right-0 text-2xl flex justify-center items-center text-white">
            No image available
          </p>
        )}
      </div>
      <p className="absolute top-0 right-0 font-bold text-black mb-2 bg-primary p-2">
        Score: {score.toFixed(2)}
      </p>
      {isHovered && (
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-85 rounded-md flex flex-col justify-center items-center text-white space-y-3">
          <h2 className="text-2xl font-bold">Name: {show.name}</h2>
          <div className="flex flex-wrap">
            Category:
            {show.genres.map((genre) => (
              <p className="mx-1" key={genre}>
                | {genre} |
              </p>
            ))}
          </div>
          <p>Language: {show.language}</p>
          <p>Status: {show.status}</p>
          {show.rating.average ? (
            <p className="flex justify-center items-center gap-2">
              <FaStar className=" text-yellow-200" />
              <span> {show.rating.average}</span>
            </p>
          ) : (
            <p>No rating available</p>
          )}
          <Link to={`/details/${show.id}`}>
            <button className="bg-primary text-black px-4 py-2 rounded-md">
              Show more
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}
