import React from "react";
import Image from "next/image";
import redcar from "../assests/redcar.jpg";
import bmw from "../assests/bmw1.jpg";
import toyotaCam from "../assests/toyotaCam.jpg";
import toyotaCar from "../assests/toyotacar.jpg";
import corolla from "../assests/corolla.jpg";
import kia from "../assests/kia.jpg";
import audi1 from "../assests/audi1.jpeg";
import mustang from "../assests/mustang1.png";
import ford from "../assests/ford.jpg";
import chevy from "../assests/chevy.jpg";

function MilitaryTimeToStandardTime(militaryTime) {
  if (!militaryTime) return ""; // Handle undefined or null case

  const [hours, minutes] = militaryTime.split(":");
  const standardTime = new Date(2022, 0, 1, hours, minutes);
  return standardTime.toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });
}

export default function CarCard({ searchInfo }) {
  let carImage;

  switch (searchInfo.name) {
    case "Toyota Prius":
      carImage = redcar;
      break;
    case "BMW":
      carImage = bmw;
      break;
    case "Toyota Camry":
      carImage = toyotaCam;
      break;
    case "Honda Accord":
      carImage = toyotaCar;
      break;
    default:
      switch (searchInfo.brand) {
        case "Economy":
          carImage = kia;
          break;
        case "Compact":
          carImage = corolla;
          break;
        case "Convertible":
          carImage = mustang;
          break;
        case "Sports":
          carImage = audi1;
          break;
        case "Pickup Truck":
          carImage = ford;
          break;
        case "SUV":
          carImage = chevy;
          break;
        default:
          carImage = null; // Default image or placeholder when neither name nor brand match
          break;
      }
      break;
  }

  return (
    <div className="rounded-md border-2 w-1/4 h-full ml-12 mb-4">
      <div className="bg-gray-100 pb-2">
        <h1 className="ml-4 text-[20px] font-light pt-2">Booking Details:</h1>
      </div>
      <div className="ml-4">
        <div className="mt-4">
          <h1 className="font-bold">Time and Place</h1>
        </div>
        <div className="flex flex-row justify-between mt-2">
          <h1 className="text-neutral-500">Pickup:</h1>
          <div className="flex-grow flex flex-col text-[16px] text-neutral-600 font-semibold pl-2 pr-4">
            <h1 className="mb-2">{searchInfo.puLocation}</h1>
            <h1>{searchInfo.pickUpDate}</h1>
            <h1>{MilitaryTimeToStandardTime(searchInfo.pickUpTime)}</h1>
          </div>
        </div>
        <div className="flex flex-row justify-between mt-2">
          <h1 className="text-neutral-500">Return:</h1>
          <div className="flex-grow flex flex-col text-[16px] text-neutral-600 font-semibold pl-2 pr-4">
            <h1 className="mb-2">{searchInfo.doLocation}</h1>
            <h1>{searchInfo.dropOffDate}</h1>
            <h1>{MilitaryTimeToStandardTime(searchInfo.dropOffTime)}</h1>
          </div>
        </div>

        <div className="mt-3">
          <h1 className="font-bold">Car Type</h1>
        </div>
      </div>
      <div className="pr-6">
        {carImage && (
          <Image
            src={carImage}
            alt={searchInfo.name}
            width={300}
            height={200}
          />
        )}
      </div>
      <div className="flex flex-col font-bold text-[20px] ml-4 mb-4">
        <h1>{searchInfo.brand}</h1>
        <h1>{searchInfo.name} </h1>
        <h1>{searchInfo.year}</h1>
      </div>
    </div>
  );
}
