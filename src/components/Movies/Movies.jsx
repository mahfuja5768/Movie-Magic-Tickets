import { useEffect, useState } from "react";
import Movie from "./Movie";

export default function Movies() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://api.tvmaze.com/search/shows?q=all");
        const data = await res.json();
        //   console.log(data);
        setMovies(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  return (<div className="container mx-auto px-3 my-36">
    <h2 className="text-3xl md:text-4xl text-primary text-center my-12 font-bold">All Movies</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
      {movies.map((movie) => (
        <Movie key={movie.show.id} movie={movie}/>
      ))}
    </div></div>
  );
}
