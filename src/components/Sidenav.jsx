import { Box, HStack, Heading, Icon, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { RxDashboard } from "react-icons/rx";
import { TbArrowsDoubleNeSw } from "react-icons/tb";
import { MdOutlineSupportAgent } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";

const Sidenav = () => {
  const location = useLocation();
  const isActiveLink = (link) => {
    return location.pathname === link;
  };

  const navLinks = [
    {
      icon: RxDashboard,
      text: "Dashboard",
      link: "/",
    },
    {
      icon: TbArrowsDoubleNeSw,
      text: "Transactions",
      link: "/transaction",
    },
  ];
  return (
    <Stack
      justify={"space-between"}
      boxShadow={{
        base: "none",
        lg: "2xl",
      }}
      w={{
        base: "full",
        lg: "16rem",
      }}
      h={"100vh"}
      bg={"white"}
    >
      <Box>
        <Heading textAlign={"center"} as={"h1"} fontSize={"20px"} pt={14}>
          @ABHIDEV
        </Heading>
        <Box mt={6} mx={3}>
          {navLinks.map((link) => (
            <Link key={link.text} to={link.link}>
              <HStack
                bg={isActiveLink(link.link) ? "#F3F3F7" : "transparent"}
                color={isActiveLink(link.link) ? "#171717" : "#797E82"}
                borderRadius={3}
                _hover={{ bg: "#F3F3F7", color: "#171717" }}
                fontWeight={"medium"}
              >
                <Icon as={link.icon} />
                <Text fontSize={"14px"} py={3} px={4}>
                  {link.text}
                </Text>
              </HStack>
            </Link>
          ))}
        </Box>
      </Box>

      <Box mt={6} mx={3} mb={6}>
        <Link to={"/support"}>
          <HStack
            borderRadius={3}
            _hover={{ bg: "#F3F3F7", color: "#171717" }}
            fontWeight={"medium"}
            color={"#797E82"}
          >
            <Icon as={MdOutlineSupportAgent} />
            <Text fontSize={"14px"} py={3} px={4}>
              Support
            </Text>
          </HStack>
        </Link>
      </Box>
    </Stack>
  );
};

export default Sidenav;
