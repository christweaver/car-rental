import { useState } from "react";
export default function Review({ rentalPrice }) {
  const [tax, setTax] = useState(0.1); // Assuming tax is 10% of the total cost

  return (
    <>
      <div className="flex justify-between">
        <span>Rental Cost (Per Day)</span>
        <span>${rentalPrice}</span>
      </div>
      <div className="flex justify-between">
        <span>Tax ({(tax * 100).toFixed(0)}%)</span>
        <span>${(rentalPrice * tax).toFixed(2)}</span>
      </div>
    </>
  );
}
