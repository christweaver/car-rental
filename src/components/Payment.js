import React, { useState } from "react";
import { useRouter } from "next/router";
import dayjs from "dayjs";
import { useEffect } from "react";
var duration = require("dayjs/plugin/duration");
dayjs.extend(duration);

export default function Payment({ searchInfo }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");

  const { rentalPrice } = searchInfo;
  console.log(searchInfo);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Payment submitted");
  };

  const [days, setDays] = useState(0);
  const [tax, setTax] = useState(0.1);
  let taxTotal = rentalPrice * tax;
  console.log(taxTotal);
  let router = useRouter();
  const { query } = router;

  useEffect(() => {
    const getStateFromUrl = () => {
      return JSON.parse(decodeURIComponent(query.searchBar));
    };

    const { pickUpDate, dropOffDate, pickUpTime, dropOffTime } =
      getStateFromUrl();
    console.log(pickUpDate);
    const days = countDays(pickUpDate, dropOffDate, pickUpTime, dropOffTime);
    setDays(days);
  }, [query.searchBar]);
  const countDays = (pickUpDate, dropOffDate, pickUpTime, dropOffTime) => {
    const pickUpFormatted = dayjs(pickUpDate + " " + pickUpTime);

    const dropOffDateFormatted = dayjs(dropOffDate + " " + dropOffTime);
    const numberOfHours = dayjs
      .duration(dropOffDateFormatted.diff(pickUpFormatted))
      .asHours();
    console.log({ numberOfHours });

    const HOURS_IN_A_DAY = 24;
    if (numberOfHours < HOURS_IN_A_DAY) return 1;

    const numberOfDays = numberOfHours / HOURS_IN_A_DAY;
    const remainder = numberOfHours % HOURS_IN_A_DAY;

    if (remainder) {
      return Math.floor(numberOfDays + 1);
    }
    console.log({ numberOfDays, remainder });
    return numberOfDays;
  };

  return (
    <div className="flex flex-row items-center justify-center mb-4 ">
      <div className="p-6 rounded-md shadow-md w-3/4">
        <div className="bg-gray-100">
          <h2 className="text-2xl font-semibold mb-3 py-2">Payment Details</h2>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="firstName"
                className="block text-sm font-medium text-gray-600"
              >
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                placeholder="John"
                required
              />
            </div>

            <div>
              <label
                htmlFor="lastName"
                className="block text-sm font-medium text-gray-600"
              >
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                placeholder="Doe"
                required
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="cardNumber"
              className="block text-sm font-medium text-gray-600"
            >
              Card Number
            </label>
            <input
              type="text"
              id="cardNumber"
              name="cardNumber"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              placeholder="XXXX-XXXX-XXXX-XXXX"
              required
            />
          </div>

          <div>
            <label
              htmlFor="address"
              className="block text-sm font-medium text-gray-600"
            >
              Address
            </label>
            <input
              type="text"
              id="address"
              name="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              placeholder="123 Main St"
              required
            />
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div>
              <label
                htmlFor="city"
                className="block text-sm font-medium text-gray-600"
              >
                City
              </label>
              <input
                type="text"
                id="city"
                name="city"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                placeholder="City"
                required
              />
            </div>
            <div>
              <label
                htmlFor="state"
                className="block text-sm font-medium text-gray-600"
              >
                State
              </label>
              <input
                type="text"
                id="state"
                name="state"
                value={state}
                onChange={(e) => setState(e.target.value)}
                className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                placeholder="State"
                required
              />
            </div>
            <div>
              <label
                htmlFor="zipCode"
                className="block text-sm font-medium text-gray-600"
              >
                Zip Code
              </label>
              <input
                type="text"
                id="zipCode"
                name="zipCode"
                value={zipCode}
                onChange={(e) => setZipCode(e.target.value)}
                className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                placeholder="Zip Code"
                required
              />
            </div>
          </div>
          <div className="flex flex-col my-2">
            <h1 className="text-[24px] font-extrabold">
              Subtotal: $
              {!(rentalPrice * days + taxTotal)
                ? 0
                : rentalPrice * days + taxTotal}
            </h1>

            <button
              type="submit"
              className="mx-auto px-3 border-2 py-3  bg-black text-yellow-500 rounded-lg text-[18px] hover:bg-blend-color-burn"
            >
              Submit Payment
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
