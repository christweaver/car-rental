import logo from "../assests/logo.png";
import Image from "next/image";
import Link from "next/link";
export default function Footer() {
  return (
    <div className="bg-gradient-to-r from-white to-slate-200">
      <div className="flex flex-row">
        <div className="flex flex-col w-1/3">
          <Image src={logo} alt="" className="w-[200px] h-[150px]" />
          <div className="ml-9 mb-4">
            <p>
              &copy; 2023 CarFleet Rentals. All Rights Reserved. | Designed by{" "}
              <br />
              Christy Weaver
            </p>
          </div>
        </div>
        <div className="flex flex-col w-1/3 mt-7 items-center">
          <h1 className="text-[20px] mb-2 ">
            <span className="border-b-2 border-yellow-500">QUICK</span> LINKS
          </h1>
          <div className="flex flex-row m-2">
            <div className="flex flex-col">
              <Link
                href={"/"}
                className="mr-2 mb-2  hover:border-b-2 border-yellow-500"
              >
                ABOUT
              </Link>
              <Link
                href={"/"}
                className="mr-4 mb-2  hover:border-b-2 border-yellow-500"
              >
                GALLERY
              </Link>
              <Link href={"/"} className=" hover:border-b-2 border-yellow-500">
                BLOG
              </Link>
            </div>
            <div className="flex flex-col">
              <Link
                href={"/"}
                className="mb-2  hover:border-b-2 border-yellow-500"
              >
                CONTACT
              </Link>
              <Link
                href={"/"}
                className="mb-2 hover:border-b-2 border-yellow-500"
              >
                LOCATIONS
              </Link>
              <Link href={"/"} className=" hover:border-b-2 border-yellow-500">
                FAQS
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-1/3 mt-7 items-center">
          <h1 className="text-[20px] mb-2 ">
            <span className="border-b-2 border-yellow-500 ">OUR</span> TERMS
          </h1>
          <div className="flex flex-row  ">
            <div className="flex flex-col ml-20 mt-2">
              <Link
                href={"/"}
                className="mb-2  hover:border-b-2 border-yellow-500"
              >
                PRIVACY POLICY
              </Link>
              <Link
                href={"/"}
                className="mb-2  hover:border-b-2 border-yellow-500"
              >
                COPYRIGHT
              </Link>
              <Link
                href={"/"}
                className="mb-2  hover:border-b-2 border-yellow-500"
              >
                WEBSITE TERMS
              </Link>
              <Link
                href={"/"}
                className="mb-2  hover:border-b-2 border-yellow-500"
              >
                SUPPLIER CODE OF CONDUCT
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
