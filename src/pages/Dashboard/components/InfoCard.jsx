import React from "react";
import { CustomCard } from "../../../chakra/CustomCard";
import { Tag, Text } from "@chakra-ui/react";

const InfoCard = ({ imgUrl, tagText, text, inverted }) => {
  return (
    <CustomCard
      bgColor={inverted ? "p.purple" : "white"}
      bgImage={imgUrl}
      bgSize="cover"
      bgRepeat="no-repeat"
    >
      <Tag
        bg={inverted ? "white" : "p.purple"}
        color={inverted ? "p.purple" : "white"}
        borderRadius={"full"}
      >
        {tagText}
      </Tag>

      <Text
        textStyle={"h5"}
        mt={4}
        fontWeight={"md"}
        color={inverted ? "white" : "black"}
      >
        {text}
      </Text>
    </CustomCard>
  );
};

export default InfoCard;
