import Image from "next/image";
import mapping from "../assests/map.jpg";
import Navbar from "@/components/Navbar";
export default function locations() {
  return (
    <>
      <Navbar />
      <div className="flex flex-row justify-center items-center">
        <div className="flex flex-col w-1/2">
          <h1 className="text-4xl font-medium ml-4 mb-4">
            <span className="border-b-2 border-yellow-500">Our</span> Locations
          </h1>
          <p className="text-lg leading-9 text-gray-600 mb-6 ml-4">
            For a decade, CarFleet Rentals has been a leading car rental
            provider in America, offering outstanding services and a diverse
            fleet. Known for top-notch customer service and well-maintained
            vehicles, CarFleet Rentals has become a trusted name. With locations
            strategically situated across key cities in America, the company
            provides convenient and accessible solutions for various travel
            needs. Whether for business or leisure, CarFleet Rentals stands out
            as a reliable choice, ensuring a seamless and enjoyable rental
            experience for customers nationwide.
          </p>
          <button className="text-lg rounded-full w-fit bg-yellow-500 px-8 py-3 hover:bg-yellow-600 transition duration-300 ml-4">
            Find Your Location
          </button>
        </div>
        <div className="w-1/2 mx-6">
          <Image
            src={mapping}
            alt=""
            className="object-cover rounded-lg h-[500px]"
          />
        </div>
      </div>
    </>
  );
}
