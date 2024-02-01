import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div
      style={{
        backgroundImage: "url(https://i.ibb.co/7nsyTN6/error.jpg)",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="h-[100vh] grid place-content-center px-4"
    >
      <div className="grid place-content-center justify-center p-5 opacity-90 rounded-lg max-w-[1280px] mx-auto">
        <h1 className="text-3xl md:text-5xl text-[#ffffff] font-semibold mb-6">
          Sorry, your requested page was not found.
        </h1>
        <Link className=" btn-link text-2xl text-center md:text-3xl text-[#3bc54d] font-bold mb-6">
          Go to home page
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
