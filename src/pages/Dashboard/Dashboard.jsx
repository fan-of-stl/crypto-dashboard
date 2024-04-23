import React from "react";
import Sidenav from "../../components/Sidenav";
import Topnav from "../../components/Topnav";
import { Box, Flex, Grid, GridItem } from "@chakra-ui/react";
import DashboardLayout from "../../components/DashboardLayout";
import PortfolioSection from "./components/PortfolioSection";
import PriceSection from "./components/PriceSection";
import TransactionsSection from "./components/TransactionsSection";
import InfoCard from "./components/InfoCard";

const Dashboard = () => {
  return (
    <div>
      <DashboardLayout title={"Dashboard"}>
        <Grid
          gridTemplateColumns={{
            base: "repeat(1, 1fr)",
            md: "repeat(2, 1fr)",
          }}
          gap={6}
        >
          <GridItem
            colSpan={{
              base: 1,
              xl: 2,
            }}
          >
            <PortfolioSection />
          </GridItem>
          <GridItem colSpan={1}>
            <PriceSection />
          </GridItem>
          <GridItem colSpan={1}>
            <TransactionsSection />
          </GridItem>
          <GridItem colSpan={1}>
            <InfoCard
              imgUrl={"/svg/visual_white.svg"}
              text={`Learn more about Loans – Keep your Bitcoin, access it’s value without
        selling it`}
              tagText={"Loan"}
              inverted={false}
            />
          </GridItem>
          <GridItem colSpan={1}>
            <InfoCard
              imgUrl={"/svg/visual_purple.svg"}
              text={`Learn more about our real estate, mortgage, and  corporate account services`}
              tagText={"Contact"}
              inverted={true}
            />
          </GridItem>
        </Grid>
      </DashboardLayout>
    </div>
  );
};

export default Dashboard;
