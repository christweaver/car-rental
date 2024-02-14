import React, { useEffect, useState } from "react";
import CompletedBanner from "@/components/CompletedBanner";
import Navbar from "@/components/Navbar";
import Payment from "@/components/Payment";
import { useRouter } from "next/router";

export default function ReserveCar() {
  const router = useRouter();
  const { query } = router;
  const [searchInfo, setSearchInfo] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (query.searchBar) {
          // decodes and parses uri
          const decodedSearchBar = decodeURIComponent(query.searchBar);
          const parsedSearchInfo = JSON.parse(decodedSearchBar);
          setSearchInfo(parsedSearchInfo);
        }
      } catch (error) {
        console.error("Error parsing JSON:", error);
      }
    };

    fetchData();
  }, [query.searchBar]);

  return (
    <div>
      <Navbar />
      {searchInfo ? (
        <>
          {/* Passes query data when available  */}
          <CompletedBanner searchInfo={searchInfo} />
          <Payment searchInfo={searchInfo} />
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
