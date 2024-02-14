import Image from "next/image";
import carPass from "../assests/carPass.png";
import carDoor from "../assests/carDoor.png";
import carManual from "../assests/carManual.png";
import corolla from "../assests/corolla.jpg";
import kia from "../assests/kia.jpg";
import audi1 from "../assests/audi1.jpeg";
import mazda from "../assests/mazda.jpg";
import mustang from "../assests/mustang1.png";
import ford from "../assests/ford.jpg";
import chevy from "../assests/chevy.jpg";
import { useRouter } from "next/router";
import dayjs from "dayjs";
import { useCallback } from "react";
var duration = require("dayjs/plugin/duration");
dayjs.extend(duration);
import { useEffect, useState } from "react";

// Possible car types to choose from
const carOptions = [
  {
    types: "Economy",
    brand: "Kia Rio or similar",
    numberOfDoors: 4,
    numberOfPassengers: 5,
    bluetooth: "Bluetooth",
    backupCamera: "Backup Camera",
    transmission: "Automatic",
    image: kia,

    rentalPrice: 50,
  },
  {
    types: "Compact",
    brand: "Toyota Corolla or similar",
    numberOfDoors: 4,
    numberOfPassengers: 5,
    bluetooth: "Bluetooth",
    backupCamera: "Backup Camera",
    transmission: "Automatic",
    image: corolla,

    rentalPrice: 60,
  },
  {
    types: "Convertible",
    brand: "Ford Mustang or similar",
    numberOfDoors: 2,
    numberOfPassengers: 2,
    bluetooth: "Bluetooth",
    backupCamera: "Backup Camera",
    transmission: "Automatic",
    image: mustang,

    rentalPrice: 70,
  },
  {
    types: "Sports",
    brand: "Audi S3 or similar",
    numberOfDoors: 4,
    numberOfPassengers: 5,
    bluetooth: "Bluetooth",
    backupCamera: "Rearview Camera",
    transmission: "Manual",
    image: audi1,

    rentalPrice: 100,
  },

  {
    types: "Pickup Truck",
    brand: "Ford F-150 or similar",
    numberOfDoors: 4,
    numberOfPassengers: 5,
    bluetooth: "Bluetooth",
    backupCamera: "Rearview Camera",
    transmission: "Automatic",
    image: ford,

    rentalPrice: 80,
  },
  {
    types: "SUV",
    brand: "Chevrolet Tahoe or similar",
    numberOfDoors: 4,
    numberOfPassengers: 7,
    bluetooth: "Bluetooth",
    backupCamera: "Rearview Camera",
    transmission: "Automatic",
    image: chevy,
    rentalPrice: 90,
  },
];

export default function CarSelection() {
  const [days, setdays] = useState(0);
  let router = useRouter();
  const { query } = router;

  // Decodes URI
  const getStateFromUrl = useCallback(() => {
    return JSON.parse(decodeURIComponent(query.searchBar));
  }, [query.searchBar]);

  // After user chooses car the data is passsed and added into a new object named searchBar
  function change(carInfo) {
    const search = getStateFromUrl();
    const {
      pickUp,
      dropOff,
      pickUpDate,
      dropOffDate,
      pickUpTime,
      dropOffTime,
    } = search;
    // Pulled from users choice
    let { types, brand, rentalPrice } = carInfo;

    // Combines the two objects
    const searchBar = {
      types,
      brand,
      rentalPrice,
      pickUp,
      dropOff,
      pickUpDate,
      dropOffDate,
      pickUpTime,
      dropOffTime,
    };
    // Encodes new object
    const serializedCarObject = encodeURIComponent(JSON.stringify(searchBar));
    // routes to page with encoded uri
    router.push(`/carReserve/${encodeURIComponent(serializedCarObject)}`);
  }
  // Sets the days variable and is multiplied by car rental price then rendered
  useEffect(() => {
    const { pickUpDate, dropOffDate, pickUpTime, dropOffTime } =
      getStateFromUrl();

    const days = countDays(pickUpDate, dropOffDate, pickUpTime, dropOffTime);
    setdays(days);
  }, [getStateFromUrl]);

  // Formatting date and time
  const countDays = (pickUpDate, dropOffDate, pickUpTime, dropOffTime) => {
    const pickUpFormatted = dayjs(pickUpDate + " " + pickUpTime);
    const dropOffDateFormatted = dayjs(dropOffDate + " " + dropOffTime);
    const numberOfHours = dayjs
      .duration(dropOffDateFormatted.diff(pickUpFormatted))
      .asHours();

    // Logic for amount of days car is being rented into hours
    const HOURS_IN_A_DAY = 24;
    if (numberOfHours < HOURS_IN_A_DAY) return 1;

    const numberOfDays = numberOfHours / HOURS_IN_A_DAY;
    const remainder = numberOfHours % HOURS_IN_A_DAY;

    if (remainder) {
      return Math.floor(numberOfDays + 1);
    }
    return numberOfDays;
  };

  return (
    <div className="bg-zinc-100">
      {/* Renders options from car types above */}
      <div className="flex flex-col justify-center items-center w-11/12 ml-16">
        {carOptions.map((carInfo, index) => (
          <div
            key={index}
            className="flex flex-row bg-white border-2 rounded-xl w-11/12 mt-12 hover:shadow-xl mb-4 h-60" // Set a fixed height (adjust as needed)
          >
            <div className="w-1/3 h-full">
              <Image
                alt=""
                className="w-full h-full rounded-xl"
                src={carInfo.image}
                width={400}
                height={200}
              />
            </div>{" "}
            <div className="flex flex-col w-1/3">
              <h1 className="text-[24px] font-semibold">{carInfo.types}</h1>
              <h2 className="text-[18px]">{carInfo.brand}</h2>
              <div className="flex flex-row items-center">
                <Image className="w-[25px] h-[30px]" src={carPass} alt="" />
                <p>{carInfo.numberOfPassengers}</p>
                <Image className="w-[40px] h-[50px]" src={carDoor} alt="" />
                <p className="mr-2">{carInfo.numberOfDoors}</p>

                <Image
                  className="w-[30px] h-[30px] mr-2"
                  src={carManual}
                  alt=""
                />
                <p>{carInfo.transmission}</p>
              </div>
              <div className="flex flex-row my-2 justify-start items-start">
                <p className="mr-4 border-2 rounded-xl bg-slate-200 text-[15px] px-2">
                  {carInfo.bluetooth}
                </p>
                <p className="border-2 rounded-xl bg-slate-200 text-[15px] px-2">
                  {carInfo.backupCamera}
                </p>
              </div>
              <button className="text-[20px] hover:pointer-events-auto hover:text-yellow-500 text-start w-fit mt-2">
                See more features
              </button>
            </div>
            <div className="flex flex-col w-1/3 items-center">
              <h3 className="text-[22px] text-start ">Pay Now</h3>
              <div className="flex flex-row  border-gray-300 border-t-2">
                <div className="flex flex-col border-gray-300 border-r-2 mr-4">
                  <h2 className="mr-4 text-[32px] font-semibold font-sans">
                    ${carInfo.rentalPrice}
                  </h2>

                  <h2 className="mr-4 text-[18px] text-gray-500">Per day</h2>
                </div>
                <div className="flex flex-col">
                  <h2 className="text-[32px] font-semibold font-sans">
                    ${carInfo.rentalPrice * days}
                  </h2>
                  <h2 className="text-[18px] text-gray-500">Total</h2>
                </div>
              </div>
              <button
                onClick={() => change(carInfo)}
                className="border-black border-2 bg-slate-800 text-yellow-500 rounded-xl text-[20px] mt-6 px-8 py-2"
              >
                Select
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
