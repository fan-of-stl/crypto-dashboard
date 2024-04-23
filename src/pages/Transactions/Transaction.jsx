import {
  Button,
  Card,
  Flex,
  Icon,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  HStack,
  Tag,
  Text,
  InputGroup,
  InputLeftElement,
  Input,
} from "@chakra-ui/react";
import React from "react";
import DashboardLayout from "../../components/DashboardLayout";
import { RiDownloadLine } from "react-icons/ri";
import TransactionTable from "./components/TransactionTable";
import { FaSearch } from "react-icons/fa";

const Transaction = () => {
  const tabs = [
    {
      name: "All",
      count: 349,
    },
    {
      name: "Deposit",
      count: 119,
    },
    {
      name: "Withdraw",
      count: 12,
    },
    {
      name: "Trade",
      count: 53,
    },
  ];

  return (
    <DashboardLayout title={"Transactions"}>
      <Flex justify={"end"} mt={4} mb={3}>
        <Button leftIcon={<Icon as={RiDownloadLine} />}>Export CSV</Button>
      </Flex>

      <Card borderRadius={"1rem"}>
        <Tabs>
          <TabList pt={4} justifyContent={"space-between"}>
            <HStack>
              {tabs.map((tab) => (
                <Tab key={tab.name}>
                  <HStack gap={2}>
                    <Text>{tab.name}</Text>
                    <Tag colorScheme="gray">{tab.count}</Tag>
                  </HStack>
                </Tab>
              ))}
            </HStack>

            <InputGroup maxW={"200px"} pb={2} pr={2}>
              <InputLeftElement pointerEvents="none">
                <FaSearch color="gray.300" />
              </InputLeftElement>
              <Input type="tel" placeholder="search...." />
            </InputGroup>
          </TabList>

          <TabPanels>
            <TabPanel>
              <TransactionTable />
            </TabPanel>
            <TabPanel>
              <p>two!</p>
            </TabPanel>
            <TabPanel>
              <p>three!</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Card>
    </DashboardLayout>
  );
};

export default Transaction;
