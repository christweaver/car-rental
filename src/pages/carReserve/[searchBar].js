import CompletedBanner from "@/components/CompletedBanner";
import Navbar from "@/components/Navbar";
import Payment from "@/components/Payment";
import { useRouter } from "next/router";

export default function ReserveCar() {
  const router = useRouter();
  const { query } = router;
  // console.log(query.searchBar);
  const searchInfo = JSON.parse(decodeURIComponent(query.searchBar));

  return (
    <div>
      <Navbar />
      <CompletedBanner searchInfo={searchInfo} />
      <Payment searchInfo={searchInfo} />
    </div>
  );
}
