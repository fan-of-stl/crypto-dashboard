import { Button, HStack, Icon, Stack, Tag, Text } from "@chakra-ui/react";
import React from "react";
import { FaInfoCircle } from "react-icons/fa";
import { LuArrowUpToLine, LuArrowDownToLine } from "react-icons/lu";

const PortfolioSection = () => {
  return (
    <HStack
      bg={"white"}
      p={"6"}
      borderRadius={"xl"}
      spacing={16}
      justify={"space-between"}
      align={{
        base: "flex-start",
        lg: "center",
      }}
      flexDir={{
        base: "column",
        lg: "row",
      }}
    >
      <HStack
        spacing={{
          base: 0,
          xl: 16,
        }}
        align={{
          base: "flex-start",
          xl: "center",
        }}
        flexDir={{
          base: "column",
          xl: "row",
        }}
      >
        <Stack>
          <HStack>
            <Text color={"black.80"} fontSize={"sm"}>
              Total Portfolio Value
            </Text>
            <Icon as={FaInfoCircle} />
          </HStack>
          <Text textStyle={"h2"}>₹ 112,312.24</Text>
        </Stack>
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
              <Tag colorScheme="gray" fontWeight="medium">
                BTC
              </Tag>
            </HStack>
            <HStack>
              <Text textStyle={"h2"} fontWeight="medium">
                ₹ 1,300.00
              </Text>
              <Tag colorScheme="gray">INR</Tag>
            </HStack>
          </HStack>
        </Stack>
      </HStack>
      <Stack>
        <HStack>
          <Button bg={"purple.500"} color={"white"}>
            <HStack spacing={4}>
              <Icon as={LuArrowDownToLine} />
              <Text>Deposit</Text>
            </HStack>
          </Button>
          <Button bg={"purple.500"} color={"white"}>
            <HStack spacing={4}>
              <Icon as={LuArrowUpToLine} />
              <Text>Withdraw</Text>
            </HStack>
          </Button>
        </HStack>
      </Stack>
    </HStack>
  );
};

export default PortfolioSection;
