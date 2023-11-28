import { useState } from "react";
export default function Review({ rentalPrice }) {
  const [tax, setTax] = useState(0.1); // Assuming tax is 10% of the total cost

  const calculateTotal = () => {
    const total = rentalPrice.perDay + rentalPrice.perDay * tax;
    return total.toFixed(2);
  };

  return (
    <>
      <div className="flex justify-between">
        <span>Rental Cost (Per Day)</span>
        <span>${rentalPrice.perDay}</span>
      </div>
      <div className="flex justify-between">
        <span>Tax ({(tax * 100).toFixed(0)}%)</span>
        <span>${(rentalPrice.perDay * tax).toFixed(2)}</span>
      </div>

      {/* <div className="flex justify-between font-semibold mt-2">
        <span>Total Payment</span>
        <span>${calculateTotal()}</span>
      </div> */}
    </>
  );
}
