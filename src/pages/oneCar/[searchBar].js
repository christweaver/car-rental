import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import CarCard from "@/components/CarCard";
import Payment from "@/components/Payment";
import Link from "next/link";
import logo from "../../assests/logo.png";
import Image from "next/image";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";

let apiKey = process.env.NEXT_PUBLIC_API_KEY;
// Sets the placeholder for pick up location with google autocomplete
const pLocactionStart = {
  label:
    "Salt Lake City International Airport (SLC), West Terminal Drive, Salt Lake City, UT, USA",
  value: {
    description:
      "Salt Lake City International Airport (SLC), West Terminal Drive, Salt Lake City, UT, USA",
    matched_substrings: [
      {
        length: 4,
        offset: 0,
      },
    ],
    place_id: "ChIJ6fTXZ4vzUocRGUhZ9SZDH28",
    reference: "ChIJ6fTXZ4vzUocRGUhZ9SZDH28",
    structured_formatting: {
      main_text: "Salt Lake City International Airport (SLC)",
      main_text_matched_substrings: [
        {
          length: 4,
          offset: 0,
        },
      ],
      secondary_text: "West Terminal Drive, Salt Lake City, UT, USA",
    },
    terms: [
      {
        offset: 0,
        value: "Salt Lake City International Airport (SLC)",
      },
      {
        offset: 44,
        value: "West Terminal Drive",
      },
      {
        offset: 65,
        value: "Salt Lake City",
      },
      {
        offset: 81,
        value: "UT",
      },
      {
        offset: 85,
        value: "USA",
      },
    ],
    types: ["airport", "point_of_interest", "establishment"],
  },
};

// Sets the placeholder for drop off location with google autocomplete
const dLocationStart = {
  label:
    "San Francisco International Airport (SFO) (SFO), San Francisco, CA, USA",
  value: {
    description:
      "San Francisco International Airport (SFO) (SFO), San Francisco, CA, USA",
    matched_substrings: [
      {
        length: 2,
        offset: 0,
      },
    ],
    place_id: "ChIJVVVVVYx3j4ARP-3NGldc8qQ",
    reference: "ChIJVVVVVYx3j4ARP-3NGldc8qQ",
    structured_formatting: {
      main_text: "San Francisco International Airport (SFO) (SFO)",
      main_text_matched_substrings: [
        {
          length: 2,
          offset: 0,
        },
      ],
      secondary_text: "San Francisco, CA, USA",
    },
    terms: [
      {
        offset: 0,
        value: "San Francisco International Airport (SFO) (SFO)",
      },
      {
        offset: 49,
        value: "San Francisco",
      },
      {
        offset: 64,
        value: "CA",
      },
      {
        offset: 68,
        value: "USA",
      },
    ],
    types: ["airport", "point_of_interest", "establishment"],
  },
};

export default function SearchBar() {
  const router = useRouter();
  const { query } = router;
  const [searchInfo, setSearchInfo] = useState(null);
  const [puLocation, setpuLocation] = useState(pLocactionStart);
  const [doLocation, setdoLocation] = useState(dLocationStart);
  const [puDate, setpuDate] = useState("");
  const [doDate, setdoDate] = useState("");
  const [puTime, setpuTime] = useState("");
  const [doTime, setdoTime] = useState("");

  // Decodes query and sets the value to searchInfo
  useEffect(() => {
    const fetchData = async () => {
      if (query.searchBar) {
        try {
          const decodedSearchBar = decodeURIComponent(query.searchBar);
          const parsedSearchInfo = JSON.parse(decodedSearchBar);
          setSearchInfo(parsedSearchInfo);
          console.log(searchInfo);
        } catch (error) {
          console.error("Error parsing JSON:", error);
        }
      }
    };

    fetchData();
  }, [query.searchBar]);

  const formatLocation = ({ value }) => {
    const [termOption] = value.terms;
    return termOption.value;
  };

  const handleInputChange = (e) => {
    e.preventDefault();

    // Creates new object to be encoded for the car card component
    if (searchInfo) {
      const { rentalPrice, name, year, brand } = searchInfo;

      const updatedSearchInfo = {
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

      const serializedCarObject = encodeURIComponent(
        JSON.stringify(updatedSearchInfo)
      );
      // Reroutes user to the same page with updated info being rendered in car card
      router.push(`/oneCar/${encodeURIComponent(serializedCarObject)}`);
    }
  };

  // Styles for google autocomplete
  const customStyles = {
    control: (base) => ({
      ...base,
      padding: "4px 10px", // py-3 and px-4
      margin: "8px 8px 0", // mx-2 and mb-2
      border: "1px solid #ccc", // border with a default color
      borderRadius: "6px", // rounded-md
    }),
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
              apiKey={apiKey}
            />
            <GooglePlacesAutocomplete
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
              apiKey={apiKey}
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
        {searchInfo ? (
          <>
            <CarCard searchInfo={searchInfo} />
            <div className="w-full">
              <Payment searchInfo={searchInfo} />
            </div>
          </>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </form>
  );
}
