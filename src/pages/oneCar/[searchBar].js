import Payment from "@/components/Payment";
import { useRouter } from "next/router";
import { useState } from "react";
import CarCard from "@/components/CarCard";
import Link from "next/link";
import logo from "../../assests/logo.png";
import Image from "next/image";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
let apiKey = process.env.NEXT_PUBLIC_API_KEY;

export default function SearchBar() {
  const router = useRouter();
  const { query } = router;
  const formatLocation = ({ value }) => {
    const [termOption] = value.terms;
    return termOption.value;
  };
  const searchInfo = JSON.parse(decodeURIComponent(query.searchBar));
  const { rentalPrice, name, year, brand } = searchInfo;
  console.log(searchInfo);

  console.log(rentalPrice);
  const [puLocation, setpuLocation] = useState("");
  const [doLocation, setdoLocation] = useState("");
  const [puDate, setpuDate] = useState("");
  const [doDate, setdoDate] = useState("");
  const [puTime, setpuTime] = useState("");
  const [doTime, setdoTime] = useState("");

  console.log(searchInfo);
  const handleInputChange = (e) => {
    e.preventDefault();

    const searchInfo = {
      puLocation: formatLocation(puLocation),
      doLocation: formatLocation(doLocation),
      pickUpDate: puDate,
      dropOffDate: doDate,
      pickUpTime: puTime,
      dropOffTime: doTime,
      rentalPrice,
      name,
      year,
      brand,
    };

    const serializedCarObject = encodeURIComponent(JSON.stringify(searchInfo));

    router.push(`/oneCar/${encodeURIComponent(serializedCarObject)}`);
  };

  const customStyles = {
    control: (base) => ({
      ...base,
      padding: "4px 10px", // py-3 and px-4
      margin: "8px 8px 0", // mx-2 and mb-2
      border: "1px solid #ccc", // border with a default color
      borderRadius: "6px", // rounded-md
    }),
    // You can add more custom styles for other parts like menu, option, etc.
  };
  const dropStyles = {
    control: (base) => ({
      ...base,
      padding: "4px 10px", // py-3 and px-4
      margin: "8px 8px 8px", // mx-2 and mb-2
      border: "1px solid #ccc", // border with a default color
      borderRadius: "6px", // rounded-md
    }),
  };
  return (
    <form onSubmit={handleInputChange} className="">
      <div className="flex mt-1 border-solid border-b-2 bg-gray-50">
        <div className=" flex items-center justify-around space-x-2 w-full">
          <Link className="navbar__logo" href={"/"}>
            <Image src={logo} alt="" className="w-[150px] h-[100px] mr-10" />
          </Link>
          <div className="flex flex-col w-1/4">
            <GooglePlacesAutocomplete
              apiKey={apiKey}
              name="puLocation"
              selectProps={{
                value: puLocation,
                onChange: setpuLocation,
                styles: customStyles,
                placeholder: "Pickup location",
                required: true,
              }}
              autocompletionRequest={{
                types: ["airport"],
                country: ["us"],
              }}
            />
            <GooglePlacesAutocomplete
              apiKey={apiKey}
              name="puLocation"
              selectProps={{
                value: doLocation,
                onChange: setdoLocation,
                styles: dropStyles,
                placeholder: "Drop Off location",
                required: true,
              }}
              autocompletionRequest={{
                types: ["airport"],
                country: ["us"],
              }}
            />
          </div>
          <div className="flex flex-col">
            <input
              type="date"
              placeholder="Pickup date"
              className="px-4 py-2 mb-2 ml-20 border text-black rounded-md"
              name="puDate"
              value={puDate}
              onChange={(e) => setpuDate(e.target.value)}
              required
            />
            <input
              type="date"
              placeholder="Dropoff date"
              className="px-4 py-2 mb-2 ml-20 border text-black rounded-md focus:outline-none"
              name="doDate"
              value={doDate}
              onChange={(e) => setdoDate(e.target.value)}
              required
            />
          </div>
          <div className="flex flex-col">
            <input
              type="time"
              placeholder="Pickup time"
              className="px-4 py-2 mb-2 border ml-20 text-black rounded-md focus:outline-none"
              name="puTime"
              value={puTime}
              onChange={(e) => setpuTime(e.target.value)}
              required
            />
            <input
              type="time"
              placeholder="Dropoff time"
              className="px-4 py-2 mb-2 border ml-20 mr-30 text-black rounded-md focus:outline-none"
              name="doTime"
              value={doTime}
              onChange={(e) => setdoTime(e.target.value)}
              required
            />
          </div>
          <button className="px-8 border-2 py-3  bg-yellow-500 text-black rounded-lg font-bold text-[16px]">
            Search
          </button>
        </div>
      </div>

      <div className="flex flex-column mt-4">
        <CarCard searchInfo={searchInfo} />
        <div className="w-full">
          <Payment searchInfo={searchInfo} />
        </div>
      </div>
    </form>
  );
}
