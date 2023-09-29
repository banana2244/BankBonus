import React from "react";
import SortFilterCard from "../components/OfferFilters";
import BonusCard from "../components/BonusCard";
import { Container, Grid } from "@mui/material";

const bonuses = [
  {
    accountName: "Account1",
    accountType: "Credit Card",
    bonus: "$150",
    howToGet: "Spend $500 in first 3 months",
    fee: "$0",
    imageUrl: "https://example.com/image1.png",
    offerLink: "https://example.com/offer1",
  },
  {
    accountName: "Account2",
    accountType: "Credit Card",
    bonus: "$200",
    howToGet: "Spend $500 in first 3 months",
    fee: "$0",
    imageUrl: "https://example.com/image2.png",
    offerLink: "https://example.com/offer2",
  },
  {
    accountName: "Account3",
    accountType: "Credit Card",
    bonus: "$250",
    howToGet: "Spend $500 in first 3 months",
    fee: "$0",
    imageUrl: "https://example.com/image3.png",
    offerLink: "https://example.com/offer3",
  },
];

const Offers: React.FC = () => {
  const handleSortChange = (value: string) => {
    console.log(value);
  };
  const handleSearchChange = (value: string) => {
    console.log(value);
  };
  const handleLocationChange = (value: string) => {
    console.log(value);
  };
  const handleFilterChange = (value: Record<string, boolean>) => {
    console.log(value);
  };
  return (
    <Container>
      <SortFilterCard
        onSortChange={handleSortChange}
        onSearchChange={handleSearchChange}
        onLocationChange={handleLocationChange}
        onFilterChange={handleFilterChange}
      />
      <Grid container spacing={3}>
        {bonuses.map((bonus) => (
          <Grid item xs={12} sm={6} md={4}>
            <BonusCard {...bonus} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Offers;
