import { Flex, Image, Text, useBreakpointValue } from "@chakra-ui/react";

interface TravelTypesProps {
  image: string;
  alt: string;
  subtitle: string;
}

export function TravelTypes({ image, alt, subtitle }:TravelTypesProps)  {
  const isWideVersion = useBreakpointValue({
    base: false,
    sm: true,
  })
  
  return (
    <Flex flexDir={["row", "column"]} alignItems="center" justifyContent="center">
      {isWideVersion ?
        <Image 
          src={image} 
          alt={alt} 
          mb="24px"
          w={["70px","70px", "70px", "85px"]}
        />
      :
        <Text fontSize="24" color="yellow.400" mr="8px">•</Text>   
      }
      <Text
        fontSize={["18", "18", "18", "24"]} 
        fontWeight= {["medium", "semibold"]}
        color="gray.400"
        textAlign="center"
      >
        {subtitle}
      </Text>
    </Flex> 
  )
}