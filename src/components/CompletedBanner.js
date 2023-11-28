import Image from "next/image";
import arrow from "../assests/arrow.png";
import check from "../assests/check.jpg";
import { useState } from "react";
import Review from "./Review";
export default function CompletedBanner({ searchInfo }) {
  console.log(searchInfo.rentalPrice);
  // const [tax, setTax] = useState(0.1); // Assuming tax is 10% of the total cost

  // const calculateTotal = () => {
  //   const total = searchInfo.rentalPrice.perDay + searchInfo.rentalPrice.perDay * tax;
  //   return total.toFixed(2);
  // };

  return (
    <div className="flex flex-row justify-between border-2">
      <div className="flex flex-col items-start ml-16">
        <div className="flex flex-row">
          <Image src={check} className="w-[30px] h-[30px]"></Image>
          <h1 className="font-semibold">RENTAL DETAILS</h1>
          <Image src={arrow} className="w-[30px] h-[30px] ml-20 "></Image>
        </div>
        <h1 className="ml-8 font-thin">
          {searchInfo.pickUpDate}, {searchInfo.pickUpTime}
        </h1>
        <h1 className="ml-8 font-thin">
          {searchInfo.dropOffDate}, {searchInfo.dropOffTime}
        </h1>
      </div>
      <div className="flex flex-col items-start">
        <div className="flex flex-row">
          <Image src={check} className="w-[30px] h-[30px]"></Image>
          <h1 className="font-semibold">PICK-UP & RETURN</h1>
          <Image src={arrow} className="w-[30px] h-[30px] ml-20"></Image>
        </div>
        <h1 className="ml-8 font-thin">{searchInfo.pickUp}</h1>
        <h1 className="ml-8 font-thin">{searchInfo.dropOff}</h1>
      </div>
      <div className="flex flex-col items-start">
        <div className="flex flex-row">
          {searchInfo.types && searchInfo.brand && (
            <Image src={check} className="w-[30px] h-[30px]"></Image>
          )}
          <h1 className="font-semibold">SELECT VEHICLE</h1>
          {searchInfo.types && searchInfo.brand && (
            <Image src={arrow} className="w-[30px] h-[30px] ml-20"></Image>
          )}
        </div>
        <h1 className="ml-8 font-thin">{searchInfo.types}</h1>
        <h1 className="ml-8 font-thin">{searchInfo.brand}</h1>
      </div>
      <div className="flex flex-col items-center mr-20">
        <div className="flex flex-row">
          {searchInfo.rentalPrice && (
            <Image src={check} className="w-[30px] h-[30px]"></Image>
          )}
          <h1 className="font-semibold">REVIEW & RESERVE</h1>
        </div>
        <div className="flex flex-col items-start ml-16 font-thin">
          {searchInfo.rentalPrice && (
            <Review rentalPrice={searchInfo.rentalPrice} />
          )}
        </div>
      </div>
    </div>
  );
}
