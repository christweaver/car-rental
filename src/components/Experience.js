import bmw from "../assests/bmw.jpg";
import pin from "../assests/pin.png";
import phone from "../assests/phone.png";
import briefcase from "../assests/briefcase.png";
import Image from "next/image";
export default function Experience() {
  return (
    <div className=" mt-10 flex flex-row">
      <Image className="" alt="" src={bmw} />

      <div className="flex flex-col  ">
        <h1 className="text-[25px] text-gray-400 font-black">WHY CHOOSE US</h1>
        <h1 className="text-[45px] font-bold mb-4">
          Get the best of rental car experiences
        </h1>
        <div className="flex flex-row">
          <Image src={phone} alt="" className="w-[40px] h-[40px] mr-2" />
          <p className="text-[24px] text-yellow-500">24/7 support</p>
        </div>
        <p className="text-[18px] mb-4  text-zinc-500 font-black">
          Contact us if you have any questions, we are always ready to help
        </p>
        <div className="flex flex-row ">
          <Image src={briefcase} alt="" className="w-[40px] h-[40px] mr-2" />

          <p className="text-[24px] text-yellow-500">Book with flexibility </p>
        </div>
        <p className="text-[18px] mb-4  text-zinc-500 font-black">
          Change, cancel, or update your car with no added fee
        </p>
        <div className="flex flex-row">
          <Image src={pin} alt="" className="w-[40px] h-[40px] mr-2" />
          <p className="text-[24px] text-yellow-500">We know travel</p>
        </div>
        <p className="text-[18px]  text-zinc-500 font-black">
          With 10 years of experience, we are ready to help you find your
          perfect car
        </p>
      </div>
    </div>
  );
}
