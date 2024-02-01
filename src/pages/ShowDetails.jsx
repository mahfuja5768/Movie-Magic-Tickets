import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { SlCalender } from "react-icons/sl";

export default function ShowDetails() {
  const { id } = useParams();
  //   console.log(id);
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
        const data = await res.json();
        // console.log(data);
        setMovie(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="container px-3 mx-auto my-12 text-white">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center items-center">
        <div className=" flex flex-col justify-center items-center">
          <h2 className="text-2xl text-primary font-bold my-4">Summary</h2>
          <div>
            {movie && movie.summary && (
              <div
                className=" text-justify"
                dangerouslySetInnerHTML={{ __html: movie.summary }}
              />
            )}
          </div>
          <Link to={`${movie?.url}`} target="blank">
            <button className="hover:bg-primary border-2 font-semibold border-primary hover:text-black px-4 py-2 rounded-md my-4 bg-transparent transition-all duration-300 text-primary">
              Learn more
            </button>
          </Link>
        </div>
        <div>
          {movie?.image?.medium ? (
            <img
              className="w-full rounded-md h-[500px]"
              src={movie?.image?.medium}
              alt=""
            />
          ) : (
            <p className="absolute top-1/2 left-0 right-0 text-2xl flex justify-center items-center text-white">
              No image available
            </p>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl text-primary font-bold my-4">About Movie</h2>

          <div className="flex flex-wrap text-2xl">
            Category:
            {movie?.genres?.map((genre) => (
              <p className="mx-1" key={genre}>
                | {genre} |
              </p>
            ))}
          </div>
          <p className="text-2xl">Language: {movie?.language}</p>
          {movie?.rating?.average ? (
            <p className="flex items-center gap-2 text-xl my-1">
              <FaStar className=" text-primary" />
              <span> {movie?.rating?.average}</span>
            </p>
          ) : (
            <p>No rating available</p>
          )}
          <div className="flex gap-3">
            <SlCalender className=" text-primary" />
            <p>Date: {movie?.premiered}</p>
            <p>{movie?.schedule?.days}</p>
            <p>{movie?.schedule?.time}</p>
          </div>
          <button className="hover:bg-primary border-2 font-semibold border-primary hover:text-black px-4 py-2 rounded-md my-4 bg-transparent transition-all duration-300 text-primary">
            Buy Ticket
          </button>
        </div>
      </div>
    </div>
  );
}
