import { Flex, Heading } from "@chakra-ui/react";

interface BannerContinentProps {
  image: string;
  continent: string;
}

export function BannerContinent({ image, continent }: BannerContinentProps) {
  return (
    <Flex
      w="100%"
      maxW={["100%", "1440px"]}
      h={["150px", "500px"]}
      bgImage={`linear-gradient(0deg, rgba(28, 20, 1, 0.35), rgba(28, 20, 1, 0.35)), url(${image})`}
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover"
      alignItems="center"
    >
      <Heading
        fontSize={["28", "48"]} 
        fontWeight= "semibold"
        color="gray.100"
        m={["0 auto", "369px auto auto 140px"]}
      >
        {continent}
      </Heading>

    </Flex>
  )
}