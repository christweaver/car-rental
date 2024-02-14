import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Navbar from "@/components/Navbar";
import CompletedBanner from "@/components/CompletedBanner";
import CarSelection from "@/components/CarSelection";

export default function ChooseCar() {
  const router = useRouter();
  const { query } = router;
  const [searchInfo, setSearchInfo] = useState(null);

  // Decodes the query and sets the searchInfo variable
  useEffect(() => {
    const fetchData = async () => {
      if (query.searchBar) {
        try {
          const decodedSearchBar = decodeURIComponent(query.searchBar);
          const parsedSearchInfo = JSON.parse(decodedSearchBar);
          setSearchInfo(parsedSearchInfo);
        } catch (error) {
          console.error("Error parsing JSON:", error);
        }
      }
    };

    fetchData();
  }, [query.searchBar]);

  return (
    <div>
      <div className="">
        <Navbar />
      </div>
      {searchInfo ? (
        <>
          <CompletedBanner searchInfo={searchInfo} />
          <CarSelection />
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
