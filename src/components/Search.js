import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import { useEffect } from "react";
let apiKey = process.env.NEXT_PUBLIC_API_KEY;
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
  const [puLocation, setpuLocation] = useState("");
  const [doLocation, setdoLocation] = useState("");
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
      padding: "7px 10px", // py-3 and px-4
      margin: "8px 8px 0", // mx-2 and mb-2
      border: "1px solid #ccc", // border with a default color
      borderRadius: "6px", // rounded-md
    }),
  };
  const dropStyles = {
    control: (base) => ({
      ...base,
      padding: "7px 10px", // py-3 and px-4
      margin: "8px 8px 8px", // mx-2 and mb-2
      border: "1px solid #ccc", // border with a default color
      borderRadius: "6px", // rounded-md
    }),
  };
  return (
    <form
      onSubmit={search}
      className="flex justify-center items-center rounded-xl w-fit  mx-auto absolute -bottom-11 left-1/2 transform -translate-x-1/2 shadow-2xl"
    >
      <div className="flex flex-col w-96">
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
          className="px-4 py-3 mt-2 mx-6 mb-2 border text-black rounded-md"
          name="puDate"
          value={puDate}
          onChange={(e) => setpuDate(e.target.value)}
          required
        />
        <input
          type="date"
          placeholder="Dropoff date"
          className="px-4 py-3 mx-6 mb-2 border text-black  rounded-md focus:outline-none"
          name="doDate"
          value={doDate}
          onChange={(e) => setdoDate(e.target.value)}
          required
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
          required
        />
        <input
          type="time"
          placeholder="Dropoff date"
          className="px-4 py-3 mx-6 border text-black  rounded-md focus:outline-none"
          name="doTime"
          value={doTime}
          onChange={(e) => setdoTime(e.target.value)}
          required
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
