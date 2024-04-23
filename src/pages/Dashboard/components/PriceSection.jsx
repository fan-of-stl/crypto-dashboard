import React from "react";
import { CustomCard } from "../../../chakra/CustomCard";
import {
  Button,
  Flex,
  HStack,
  Icon,
  Image,
  Stack,
  Text,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";
import { MdArrowOutward } from "react-icons/md";
import { FaCirclePlus, FaCircleMinus } from "react-icons/fa6";

const PriceSection = () => {
  const timeStamps = ["7:15 PM", "7:55 PM", "8:55 PM", "9:55PM", "10:55PM"];
  return (
    <CustomCard>
      <Flex justify={"space-between"} align={"start"}>
        <Stack>
          <HStack>
            <Text color={"black.80"} fontSize={"sm"}>
              Wallet Balances
            </Text>
          </HStack>
          <HStack
            spacing={"6"}
            align={{
              base: "flex-start",
              sm: "center",
            }}
            flexDir={{
              base: "column",
              sm: "row",
            }}
          >
            <HStack>
              <Text textStyle={"h2"} fontWeight="medium">
                22.39401000
              </Text>
              <HStack fontWeight={"md"} color={"green.500"}>
                <Icon as={MdArrowOutward} />
                <Text fontSize={"sm"} fontWeight="medium">
                  22%
                </Text>
              </HStack>
            </HStack>
          </HStack>
        </Stack>

        <Stack>
          <HStack>
            <Button bg={"purple.500"} color={"white"}>
              <HStack spacing={4}>
                <Icon as={FaCirclePlus} />
                <Text>Buy</Text>
              </HStack>
            </Button>
            <Button bg={"purple.500"} color={"white"}>
              <HStack spacing={4}>
                <Icon as={FaCircleMinus} />
                <Text>Sell</Text>
              </HStack>
            </Button>
          </HStack>
        </Stack>
      </Flex>

      <Tabs variant="soft-rounded" colorScheme="green">
        <Flex justify={"end"}>
          <TabList bg={"black.5"} p={"3px"}>
            {["1H", "1D", "1W", "1Y"].map((duration) => (
              <Tab
                _selected={{ bg: "white" }}
                fontSize={"sm"}
                p={"6px"}
                borderRadius={4}
                key={duration}
              >
                {duration}
              </Tab>
            ))}
          </TabList>
        </Flex>
        <TabPanels>
          <TabPanel>
            <Image w={"100%"} src="/svg/Graph.svg" mt={"3rem"} />

            <HStack justify={"space-between"}>
              {timeStamps.map((time) => (
                <Text key={time}>{time}</Text>
              ))}
            </HStack>
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </CustomCard>
  );
};

export default PriceSection;
