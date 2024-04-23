import {
  Button,
  Card,
  Checkbox,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Stack,
  Text,
  Textarea,
} from "@chakra-ui/react";
import React from "react";

const ContactCard = () => {
  return (
    <Card p={6} flexGrow={1}>
      <Text fontWeight={"medium"} fontSize={"sm"}>
        You will receive response within 24 hours of time of submit.
      </Text>

      <Stack spacing={6}>
        <HStack
          flexDir={{
            base: "column",
            xl: "row",
          }}
        >
          <FormControl>
            <FormLabel>Name</FormLabel>
            <Input type="text" placeholder="Enter your name..." />
          </FormControl>
          <FormControl>
            <FormLabel>Surname</FormLabel>
            <Input type="text" placeholder="Enter your surname..." />
          </FormControl>
        </HStack>
        <FormControl>
          <FormLabel>Email</FormLabel>
          <Input type="email" placeholder="Enter your email..." />
        </FormControl>
        <FormControl>
          <FormLabel>Message</FormLabel>
          <Textarea placeholder="Enter your message..." />
        </FormControl>
        <Checkbox defaultChecked>
          <Text fontSize={"xs"}>
            I agree with
            <Text as={"span"} color={"p.purple"}>
              {" "}
              Terms & Condition
            </Text>
          </Text>
        </Checkbox>
        <Stack>
          <Button fontSize={"sm"}>Send a message</Button>
          <Button colorScheme="gray" fontSize={"sm"}>
            Book a meeting
          </Button>
        </Stack>
      </Stack>
    </Card>
  );
};

export default ContactCard;
