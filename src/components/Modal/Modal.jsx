import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function Modal({ movie, setShowAddModal, onCloseClick }) {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  const handleChange = (e) => {
    e.preventDefault();
    const name = e.target.name;
    let value = e.target.value;
    const movieName = movie?.name;
    const movieId = movie?.id;
    const newMovie = {
      ...cart,
      [name]: value,
      movieName,
      movieId,
    };
    setCart(newMovie);
  };

  const handleBuyTicket = (cartInfo) => {
    localStorage.setItem("user", JSON.stringify(cartInfo));
    setShowAddModal(false);
    Swal.fire({
      title: "Success!",
      text: "Successfully ticket brought!",
      icon: "success",
      confirmButtonText: "Done",
    });
    navigate("/");
  };
  return (
    <>
      <div className="bg-black bg-opacity-70  h-full w-full z-10 absolute top-0 left-0 right-0"></div>

      <form className="mx-auto my-10 w-full max-w-[740px] rounded-xl border border-[#FEFBFB]/[36%] bg-[#18122B] p-9 max-md:px-4 lg:my-20 lg:p-11 z-10 absolute top-0  left-1/3">
        <h2 className="mb-9 text-center text-2xl font-bold text-white lg:mb-11 lg:text-[28px]">
          Buy Movie Ticket
        </h2>

        <div className="space-y-2 lg:space-y-3">
          <label htmlFor="title">Your Name</label>
          <input
            className="block w-full rounded-md bg-[#20242e] px-3 py-2.5"
            type="text"
            name="name"
            onChange={handleChange}
            required
          />
        </div>

        <div className="space-y-2 lg:space-y-3 mt-6">
          <label htmlFor="title">Your Email</label>
          <input
            className="block w-full rounded-md bg-[#20242e] px-3 py-2.5"
            type="email"
            name="email"
            onChange={handleChange}
            required
          />
        </div>

        <div className="space-y-2 lg:space-y-3 mt-6">
          <label htmlFor="title">Movie Name</label>
          <input
            className="block w-full rounded-md bg-[#20242e] px-3 py-2.5"
            type="text"
            name="movieName"
            defaultValue={movie.name}
            readOnly
          />
        </div>
        <div className="space-y-9 text-white lg:space-y-10 mt-6">
          <div className="space-y-2 lg:space-y-3">
            <label htmlFor="title">Ticket Price</label>
            <input
              className="block w-full rounded-md bg-[#20242e] px-3 py-2.5"
              type="text"
              name="price"
              defaultValue={`${movie?.weight || " "}$`}
              readOnly
            />
          </div>
          <div className="space-y-2 lg:space-y-3">
            <label htmlFor="title">Language</label>
            <input
              className="block w-full rounded-md bg-[#20242e] px-3 py-2.5"
              type="text"
              name="language"
              defaultValue={movie?.language}
              readOnly
            />
          </div>
        </div>

        <div className="mt-16 flex justify-between lg:mt-20">
          <button
            onClick={() => handleBuyTicket(cart)}
            type="submit"
            className="hover:bg-primary border-2 font-semibold border-primary hover:text-black px-4 py-2 rounded-md my-4 bg-transparent transition-all duration-300 text-primary"
          >
            Buy Now
          </button>
          <button
            onClick={onCloseClick}
            type="submit"
            className="hover:bg-red-500 border-2 font-semibold border-red-500 hover:text-black px-4 py-2 rounded-md my-4 bg-transparent transition-all duration-300 text-bg-red-500"
          >
            Cancel
          </button>
        </div>
      </form>
    </>
  );
}
