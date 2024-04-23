import React, { Fragment } from "react";
import { CustomCard } from "../../../chakra/CustomCard";
import {
  Box,
  Button,
  Divider,
  Flex,
  Grid,
  Icon,
  Stack,
  Text,
} from "@chakra-ui/react";
import { AiFillDollarCircle } from "react-icons/ai";
import { SiBitcoinsv } from "react-icons/si";
import { HiCurrencyRupee } from "react-icons/hi2";

const TransactionsSection = () => {
  const transactions = [
    {
      id: 1,
      icon: HiCurrencyRupee,
      text: "INR Deposit",
      amount: "+ ₹81,123.10",
      timestamp: "2022-06-09 7:06 PM",
    },
    {
      id: 2,
      icon: SiBitcoinsv,
      text: "BTC Sell",
      amount: "- 12.48513391 BTC",
      timestamp: "2022-05-27 12:32 PM",
    },
    {
      id: 3,
      icon: AiFillDollarCircle,
      text: "INR Deposit",
      amount: "+ ₹81,123.10",
      timestamp: "2022-06-09 7:06 PM",
    },
  ];
  return (
    <CustomCard h={"full"}>
      <Text fontSize={"sm"} color={"black.80"}>
        Recent Transactions
      </Text>

      <Stack spacing={4}>
        {transactions.map((transaction, i) => (
          <Fragment>
            {i === 0 && <Divider />}
            <Flex key={transaction.id} gap={4}>
              <Grid
                placeItems={"center"}
                boxSize={10}
                bg={"black.5"}
                borderRadius={"full"}
              >
                <Icon as={transaction.icon} />
              </Grid>

              <Flex justify={"space-between"} w={"full"}>
                <Stack spacing={0}>
                  <Text textStyle={"h6"}>{transaction.text}</Text>
                  <Text fontSize={"sm"} color={"black.80"}>
                    {transaction.timestamp}
                  </Text>
                </Stack>
                <Text textStyle={"h6"}>{transaction.amount}</Text>
              </Flex>
            </Flex>
          </Fragment>
        ))}
      </Stack>

      <Button w={"full"} mt={6} colorScheme="gray">
        View All
      </Button>
    </CustomCard>
  );
};

export default TransactionsSection;
