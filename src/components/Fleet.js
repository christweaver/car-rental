import Image from "next/image";
import redcar from "../assests/redcar.jpg";
import bmw from "../assests/bmw1.jpg";
import toyotaCam from "../assests/toyotaCam.jpg";
import toyotaCar from "../assests/toyotacar.jpg";
import carDoor from "../assests/carDoor.png";
import carPass from "../assests/carPass.png";
import MPG from "../assests/MPG.png";
import carManual from "../assests/carManual.png";
import { useRouter } from "next/router";
export default function Fleet() {
  // Four cars on homepage for instant booking
  const cars = [
    {
      id: 1,
      image: redcar,
      name: "Toyota Prius",
      year: 2019,
      door: "4 door",
      passenger: "5 Passenger",
      mpg: "33 MPG",
      trans: "Automatic",
      rentalPrice: 60,
    },
    {
      id: 2,
      image: bmw,
      name: "BMW",
      year: 2023,
      door: "4 door",
      passenger: "5 Passenger",
      mpg: "25 MPG",
      trans: "Manual",
      rentalPrice: 80,
    },
    {
      id: 3,
      image: toyotaCar,
      name: "Honda Accord",
      year: 2021,
      door: "4 door",
      passenger: "5 Passenger",
      mpg: "30 MPG",
      trans: "Automatic",
      rentalPrice: 50,
    },
    {
      id: 4,
      image: toyotaCam,
      name: "Toyota Camry",
      year: 2023,
      door: "4 door",
      passenger: "5 Passenger",
      mpg: "27 MPG",
      trans: "Automatic",
      rentalPrice: 60,
    },
  ];

  const router = useRouter();
  // Pulls car info from map onclick

  function reserve(car) {
    let vehicle = {
      name: car.name,
      year: car.year,
      rentalPrice: car.rentalPrice,
    };
    const serializedCarObject = encodeURIComponent(JSON.stringify(vehicle));
    // routes user to encoded uri. Second page to route to oneCar
    router.push(`/oneCar/${encodeURIComponent(serializedCarObject)}`);
  }

  return (
    <div className=" mt-20 flex flex-col justify-center items-center">
      <h1 className="text-[28px] font-extrabold mb-4">
        Our most popular vechicles
      </h1>
      <div className="flex ">
        {cars.map((car) => (
          <div
            key={car.id}
            className="flex flex-col justify-center items-center border-2 rounded-xl mx-4 mb-10 hover:shadow-xl"
          >
            <Image src={car.image} alt="" className="w-[300px] h-[200px]" />
            <h1 className=" font-bold text-[20px]">{car.name}</h1>
            <h2 className="font-bold text-[20px]"> {car.year}</h2>
            <button
              className="border-2  bg-black text-yellow-500 rounded-lg text-[20px] my-2 px-8 py-3"
              onClick={() => reserve(car)}
            >
              Reserve Now
            </button>
            <div className="flex flex-row justify-end items-center ">
              <Image src={carDoor} alt="" className="w-[60px] h-[70px]" />
              <p className="text=[14px] pr-4">{car.door}</p>
              <Image src={carPass} alt="" className="w-[40px] h-[40px]" />
              <p className="text-[16px]">{car.passenger}</p>
            </div>
            <div className="flex flex-row justify-end items-center ">
              <Image src={MPG} alt="" className="w-[50px] h-[55px]" />
              <p className="text-[14px] pr-2">{car.mpg}</p>
              <Image src={carManual} alt="" className="w-[35px] h-[40px]" />
              <p className="pl-2">{car.trans}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
