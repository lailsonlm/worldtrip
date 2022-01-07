import {
  Flex, 
  Heading, 
  Text, 
  Image,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
} from '@chakra-ui/react'

interface ContinentInfoProps {
  infoDescription: string;
  countriesCount: number;
  languages: number;
  mostVisetedCities: {
    name: string;
    country: string;
    image: string;
    flag: string;
  }[]
}

export function ContinentInfo({ infoDescription, countriesCount, languages,  mostVisetedCities }: ContinentInfoProps) {
  return (
    <Flex
      w="100%"
      maxW={1160}
      flexDir={["column", "row"]}
      alignItems="center"
      justifyContent={["center", "space-between"]}
      m={["24px auto", "80px auto"]}
    >
      <Flex
        maxW={600}
        m={["0 16px 16px", "0 auto"]}
      >
        <Text 
          textAlign="justify"
          fontSize={["14px", "24px"]} 
          fontWeight= "regular"
          color="gray.400"
        >
          {infoDescription}
        </Text>
      </Flex>

      <Flex
        maxW={["343px", "490px"]}
        w="100%"
        alignItems="center"
        justifyContent="space-between"
      >
        <Flex flexDir="column" alignItems={["left", "center"]}>
          <Heading
            fontSize={["24px", "48px"]} 
            fontWeight= "semibold"
            color="yellow.400"
          >
            {countriesCount}
          </Heading>
          <Text
            fontSize={["18px", "24px"]} 
            fontWeight= "semibold"
            color="gray.400"
          >
            países
          </Text>
        </Flex>
        <Flex
          flexDir="column" alignItems={["left", "center"]}
        >
          <Heading
            fontSize={["24px", "48px"]}
            fontWeight= "semibold"
            color="yellow.400"
          >
            {languages}
          </Heading>
          <Text
            fontSize={["18px", "24px"]} 
            fontWeight= "semibold"
            color="gray.400"
          >
            línguas
          </Text>
        </Flex>
        <Flex flexDir="column" alignItems={["left", "center"]}>
        <Heading
            fontSize={["24px", "48px"]}  
            fontWeight= "semibold"
            color="yellow.400"
          >
            {mostVisetedCities.length}
          </Heading>
          <Flex alignItems="center">
            <Text
              fontSize={["18px", "24px"]}  
              fontWeight= "semibold"
              color="gray.400"
              mr="5px"
            >
              cidades +100 
            </Text>
            <Popover>
              <PopoverTrigger>
                <Image src="/info.svg" alt="Informações" _hover={{cursor: "pointer"}} w={["10px", "16px"]} h={["10px", "16px"]} />
              </PopoverTrigger>
              <PopoverContent border="2px" borderColor='yellow.400' _focus={{ outline: "none" }} >
                <PopoverArrow borderLeft="2px" borderTop="2px" borderColor='yellow.400' />
                <PopoverCloseButton />
                <PopoverHeader>100+ visitadas no Mundo!</PopoverHeader>
                <PopoverBody>
                  {mostVisetedCities.map(city => city.name)
                    .reduce((previousValue, currentValue)=> {
                    return previousValue + ', ' + currentValue
                  })}
                </PopoverBody>
              </PopoverContent>
            </Popover>
            
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  )
}