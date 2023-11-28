import { useRouter } from "next/router";
import Navbar from "@/components/Navbar";
import CompletedBanner from "@/components/CompletedBanner";
import CarSelection from "@/components/CarSelection";
export default function ChooseCar() {
  const router = useRouter();
  const { query } = router;
  // console.log(query.searchBar);

  // Decode the query parameter and parse it as JSON
  const searchInfo = JSON.parse(decodeURIComponent(query.searchBar));

  return (
    <div>
      <div className="mb-2">
        <Navbar />
      </div>
      <CompletedBanner searchInfo={searchInfo} />
      <CarSelection />
    </div>
  );
}
