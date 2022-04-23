import React, { useState } from "react";
import { getAdsTxt } from "../../api/api";
import SearchForm from "../../components/SearchForm";
import DataTable from "./components/DataTable";
import { Container, Typography } from "@mui/material";
import Spinner from "../../components/Spinner";

export default function Home() {
  const [adsData, setAdsData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleDataFetch = async (searchTerm) => {
    setError(null);
    setIsLoading(true);
    setAdsData({});
    try {
      const { data } = await getAdsTxt(searchTerm);
      if (data.ok) {
        setAdsData(data);
      } else {
        setError(data.message);
      }
    } catch (error) {
      setError("Something went wrong - please try again");
    }
    setIsLoading(false);
  };

  return (
    <Container sx={{ mt: "1rem" }}>
      <Typography variant="h3" component="h1" gutterBottom>
        Ads.txt Parser
      </Typography>
      <SearchForm onSubmit={handleDataFetch} />
      {isLoading && <Spinner size="lg" />}
      {error && <div>{error}</div>}
      {adsData.ok && <DataTable domains={adsData.data} time={adsData.time} host={adsData.host} />}
    </Container>
  );
}
