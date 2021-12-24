import { Flex, Image, Text } from "@chakra-ui/react";

interface TravelTypesProps {
  image: string;
  alt: string;
  subtitle: string;
}

export function TravelTypes({ image, alt, subtitle }:TravelTypesProps)  {
  return (
    <Flex flexDir="column" alignItems="center">
      <Image 
        src={image} 
        alt={alt} 
        mb="24px"
      />
      <Text
        fontSize="24" 
        fontWeight= "semibold"
        color="gray.400"
      >{subtitle}</Text>
    </Flex>
  )
}