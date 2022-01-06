import { Flex, Heading } from "@chakra-ui/react";

interface BannerContinentProps {
  image: string;
  continent: string;
}

export function BannerContinent({ image, continent }: BannerContinentProps) {
  return (
    <Flex
      w="100%"
      maxW={1440}
      h={500}
      bgImage={`linear-gradient(0deg, rgba(28, 20, 1, 0.35), rgba(28, 20, 1, 0.35)), url(${image})`}
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover"
    >
      <Heading
        fontSize="48" 
        fontWeight= "semibold"
        color="gray.100"
        mt="369px"
        ml="140px"
      >
        {continent}
      </Heading>

    </Flex>
  )
}