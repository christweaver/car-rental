import Link from "next/link";
import Image from "next/image";
import logo from "../assests/logo.png";
export default function Navbar() {
  return (
    <div className="navbar">
      <Link className="navbar__logo" href={"/"}>
        <Image src={logo} alt="" className="w-[130px] h-[95px]"></Image>
      </Link>
      <div className="navbar__links mr-16 flex justify-between">
        <Link className="navbar__link pr-6" href={"/reservations"}>
          Reservations
        </Link>
        <Link className="navbar__link pr-6" href={"/vehicles"}>
          Vehicles
        </Link>
        <Link className="navbar__link" href={"/locations"}>
          Locations
        </Link>
      </div>
    </div>
  );
}
