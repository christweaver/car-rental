import Image from "next/image";
import arrow from "../assests/arrow.png";
import check from "../assests/check.jpg";
import Review from "./Review";
import dayjs from "dayjs";
export default function CompletedBanner({ searchInfo }) {
  console.log(searchInfo);
  return (
    <div className="flex flex-row justify-between border-2">
      <div className="flex flex-col items-start ml-16">
        <div className="flex flex-row">
          <Image src={check} className="w-[30px] h-[30px]"></Image>
          <h1 className="font-semibold">RENTAL DETAILS</h1>
          <Image src={arrow} className="w-[30px] h-[30px] ml-20 "></Image>
        </div>
        <h1 className="ml-8 font-thin">
          {dayjs(searchInfo.pickUpDate).format("MMM DD, YYYY")},{" "}
          {searchInfo.pickUpTime}
        </h1>
        <h1 className="ml-8 font-thin">
          {dayjs(searchInfo.dropOffDate).format("MMM DD, YYYY")},{" "}
          {searchInfo.dropOffTime}
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
