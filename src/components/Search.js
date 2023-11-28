import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import { useEffect } from "react";
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

export default function Search() {
  const [puLocation, setpuLocation] = useState(pLocactionStart);
  const [doLocation, setdoLocation] = useState(dLocationStart);
  const [puDate, setpuDate] = useState("");
  const [doDate, setdoDate] = useState("");
  const [puTime, setpuTime] = useState("");
  const [doTime, setdoTime] = useState("");

  const router = useRouter();

  const formatDateTime = (dateTimeString) => {
    console.log({ dateTimeString });
    return dateTimeString;
  };

  const formatLocation = ({ value }) => {
    const [termOption] = value.terms;
    return termOption.value;
  };
  function search(e) {
    e.preventDefault();

    const searchBar = {
      pickUp: formatLocation(puLocation),
      dropOff: formatLocation(doLocation),
      pickUpDate: formatDateTime(puDate),
      dropOffDate: formatDateTime(doDate),
      pickUpTime: puTime,
      dropOffTime: doTime,
    };

    console.log(puLocation, doLocation, puDate, doDate, puTime, doTime);
    const serializedCarObject = encodeURIComponent(JSON.stringify(searchBar));

    router.push(`/chooseCar/${encodeURIComponent(serializedCarObject)}`);
  }

  const customStyles = {
    control: (base) => ({
      ...base,
      padding: "12px 16px", // py-3 and px-4
      margin: "8px 8px 8px 0", // mx-2 and mb-2
      border: "1px solid #ccc", // border with a default color
      borderRadius: "6px", // rounded-md
    }),
    // You can add more custom styles for other parts like menu, option, etc.
  };
  return (
    <form
      onSubmit={search}
      className="flex justify-center items-center rounded-xl w-fit  mx-auto absolute -bottom-11 left-1/2 transform -translate-x-1/2 shadow-2xl"
    >
      <div className="flex flex-col w-96">
        {/* <input
          type="text"
          placeholder="Pickup location"
          className="px-4 py-3 mx-2 mb-2 border rounded-md"
          name="puLocation"
          value={puLocation}
          onChange={(e) => setpuLocation(e.target.value)}
        /> */}
        <GooglePlacesAutocomplete
          apiKey="AIzaSyC-j4y1h-28ZVSr_YyTfPrOsQ1YxOVMygY"
          name="puLocation"
          selectProps={{
            value: puLocation,
            onChange: setpuLocation,
            styles: customStyles,
            placeholder: "Pickup location",
          }}
          autocompletionRequest={{
            types: ["airport"],
            country: ["us"],
          }}
        />
        <GooglePlacesAutocomplete
          apiKey="AIzaSyC-j4y1h-28ZVSr_YyTfPrOsQ1YxOVMygY"
          name="puLocation"
          selectProps={{
            value: doLocation,
            onChange: setdoLocation,
            styles: customStyles,
            placeholder: "Drop Off location",
          }}
          autocompletionRequest={{
            types: ["airport"],
            country: ["us"],
          }}
        />
        {/* <input
          type="text"
          placeholder="Dropoff location"
          className="px-4 py-3 mx-2 border  rounded-md focus:outline-none"
          value={doLocation}
          name="doLocation"
          onChange={(e) => setdoLocation(e.target.value)}
        /> */}
      </div>

      <div className="flex flex-col">
        <input
          type="date"
          placeholder="Pickup date"
          className="px-4 py-3 mt-2 mx-6 mb-2 border text-black rounded-md"
          name="puDate"
          value={puDate}
          onChange={(e) => setpuDate(e.target.value)}
        />
        <input
          type="date"
          placeholder="Dropoff date"
          className="px-4 py-3 mx-6 mb-2 border text-black  rounded-md focus:outline-none"
          name="doDate"
          value={doDate}
          onChange={(e) => setdoDate(e.target.value)}
        />
      </div>

      <div className="flex flex-col">
        <input
          type="time"
          placeholder="Pickup date"
          className="px-4 py-3 mx-6 mb-2 border text-black  rounded-md focus:outline-none"
          name="puTime"
          value={puTime}
          onChange={(e) => setpuTime(e.target.value)}
        />
        <input
          type="time"
          placeholder="Dropoff date"
          className="px-4 py-3 mx-6 border text-black  rounded-md focus:outline-none"
          name="doTime"
          value={doTime}
          onChange={(e) => setdoTime(e.target.value)}
        />
      </div>
      <button
        type="submit"
        className="bg-yellow-500 text-gray-900 px-6 py-2 rounded-md mr-4 hover:bg-yellow-600 focus:outline-none"
      >
        Search
      </button>
    </form>
  );
}

// var model = "bmw";
// const url = `https://api.api-ninjas.com/v1/cars?model=${model}`;

// fetch(url, {
//   method: "GET",
//   headers: {
//     "X-Api-Key": "rDQWVMbchCbGSiyyRN6xYg==wHroM5Z0oOdOgt9B",
//     "Content-Type": "application/json",
//   },
// })
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error(`HTTP error! Status: ${response.status}`);
//     }
//     return response.json();
//   })
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.error("Error:", error.message);
//   });
