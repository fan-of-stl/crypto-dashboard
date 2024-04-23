import {
  Heading,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  HStack,
  Box,
  Icon,
} from "@chakra-ui/react";
import React from "react";
import { FaRegCircleUser } from "react-icons/fa6";
import { FaBars } from "react-icons/fa";

const Topnav = ({ title, onOpen }) => {
  return (
    <Box px={4} bg={"white"}>
      <HStack maxW={"70rem"} h={16} justify={"space-between"} mx={"auto"}>
        <Icon
          as={FaBars}
          onClick={onOpen}
          display={{
            base: "flex",
            lg: "none",
          }}
        />
        <Heading fontSize={"28px"} fontWeight={"medium"}>
          {title}
        </Heading>

        <Menu>
          <MenuButton>
            <Icon as={FaRegCircleUser} fontSize={"36px"} />
          </MenuButton>
          <MenuList>
            <MenuItem>Logout</MenuItem>
            <MenuItem>Support</MenuItem>
          </MenuList>
        </Menu>
      </HStack>
    </Box>
  );
};

export default Topnav;
