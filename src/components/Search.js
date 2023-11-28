import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
export default function Search() {
  const [puLocation, setpuLocation] = useState("");
  const [doLocation, setdoLocation] = useState("");
  const [puDate, setpuDate] = useState("");
  const [doDate, setdoDate] = useState("");
  const [puTime, setpuTime] = useState("");
  const [doTime, setdoTime] = useState("");

  const router = useRouter();

  const formatDateTime = (dateTimeString) => {
    const parsedDate = new Date(dateTimeString.replace(" ", "T"));
    const options = {
      year: "numeric",
      month: "short",
      day: "numeric",
      // hour: "numeric",
      // minute: "numeric",
      // hour12: true,
    };
    const dateTimeFormat = new Intl.DateTimeFormat("en-US", options);
    return dateTimeFormat.format(parsedDate);
  };

  function search(e) {
    e.preventDefault();

    const searchBar = {
      pickUp: puLocation,
      dropOff: doLocation,
      pickUpDate: formatDateTime(puDate),
      dropOffDate: formatDateTime(doDate),
      pickUpTime: puTime,
      dropOffTime: doTime,
    };

    const serializedCarObject = encodeURIComponent(JSON.stringify(searchBar));

    router.push(`/chooseCar/${encodeURIComponent(serializedCarObject)}`);
  }

  return (
    <form
      onSubmit={search}
      className="flex justify-center items-center rounded-xl w-fit  mx-auto absolute -bottom-11 left-1/2 transform -translate-x-1/2 shadow-2xl"
    >
      <div className="flex flex-col w-96">
        <input
          type="text"
          placeholder="Pickup location"
          className="px-4 py-3 mx-2 mb-2 border rounded-md"
          name="puLocation"
          value={puLocation}
          onChange={(e) => setpuLocation(e.target.value)}
        />
        <input
          type="text"
          placeholder="Dropoff location"
          className="px-4 py-3 mx-2 border  rounded-md focus:outline-none"
          value={doLocation}
          name="doLocation"
          onChange={(e) => setdoLocation(e.target.value)}
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
