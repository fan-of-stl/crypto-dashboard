import {
  Button,
  Card,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Icon,
  Input,
  Stack,
  Text,
  Textarea,
} from "@chakra-ui/react";
import React from "react";

const SupportCard = ({ leftComponent, icon, title, text }) => {
  return (
    <Flex
      gap={6}
      justify={"space-between"}
      flexDir={{
        base: "column",
        xl: "row",
      }}
    >
      <Stack maxW={"24rem"}>
        <Icon as={icon} boxSize={6} color={"p.purple"} />
        <Text as={"h1"} textStyle={"h1"} fontWeight={"medium"}>
          {title}
        </Text>
        <Text fontSize={"sm"} color={"black.60"}>
          {text}
        </Text>
      </Stack>

      <Stack maxW={"550px"} w={"full"}>
        {leftComponent}
      </Stack>
    </Flex>
  );
};

export default SupportCard;
