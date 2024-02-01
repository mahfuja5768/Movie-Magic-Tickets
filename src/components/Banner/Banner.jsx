import bg from '../../assets/images/banner.jpg'
export default function Banner() {
  return (
    <div className=' relative w-full h-[50vh] md:h-[70vh]'  style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.9)), url(${bg})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}>
        <h1 className='text-3xl md:text-5xl font-semibold text-white text-center absolute top-1/2 left-0 right-0'>Book Your Tickets For Movies</h1>
    </div>
  )
}
