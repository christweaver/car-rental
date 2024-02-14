import Image from "next/image";
import car from "../assests/car.jpg";
import Search from "./Search";
export default function Hero() {
  // This renders main search fields
  return (
    <div className="hero-section bg-white text-black pt-8 relative">
      <div className="flex flex-row justify-center">
        <div className="flex flex-col items-center mt-10   w-1/2">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center">
            25% off your first <br /> car booking
          </h1>
          <p className=" text-white text-[17px] mt-8 py-1 px-2 bg-discount-gradient rounded-[10px] w-fit">
            Discount applies to all bookings over one week
          </p>
        </div>
        <Image src={car} width={700} height={500} alt=""></Image>
      </div>
      <Search />
    </div>
  );
}
