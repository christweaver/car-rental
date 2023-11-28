import Image from "next/image";
import twoDays from "../assests/twoDays.png";
import travelDeals from "../assests/travelDeals.png";
import upgrade from "../assests/upgrade.png";
export default function Deals() {
  return (
    <div className="flex flex-col mx-10 mt-15">
      <h1 className="text-[38px] font-black">
        EXPLORE ALL THE WAYS YOU CAN SAVE
      </h1>
      <h2 className="text-[25px] font-thin mb-5">
        Save on your next daily or monthly car rental with these deals and
        offers
      </h2>
      <div className="flex flex-row mb-10 ">
        <div className="flex flex-col">
          <Image className="w-[450px] mr-10 " alt="" src={twoDays} />
          <h2 className="text-[25px] font-bold mb-2">EARN FREE DAYS!</h2>
          <p className="text-[18px]">
            Sign up or create a FREE account to start earning.
          </p>
        </div>

        <div className="flex flex-col ">
          <Image className="w-[450px] mr-10" alt="" src={travelDeals} />
          <h2 className="text-[25px] font-bold mb-2">
            GET LAST MINUTE TRAVEL DEALS!
          </h2>
          <p className="text-[18px] ">
            Use our last-minute car rental travel deals to save today.
          </p>
        </div>

        <div className="flex flex-col ">
          <Image className="w-[450px] " alt="" src={upgrade} />
          <h2 className="text-[25px] font-bold mb-2">GET A FREE UPGRADE! </h2>
          <p className="text-[18px]">Travel in a roomier ride. </p>
        </div>
      </div>
    </div>
  );
}
