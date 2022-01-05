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
  citiesCount: number;
}

export function ContinentInfo({ infoDescription, countriesCount, languages, citiesCount }: ContinentInfoProps) {
  return (
    <Flex
      w="100%"
      maxW={1160}
      alignItems="center"
      justifyContent="space-between"
      m="80px auto"
    >
      <Flex
        maxW={600}
      >
        <Text 
          textAlign="justify"
          fontSize="24" 
          fontWeight= "regular"
          color="gray.400"
        >
          {infoDescription}
        </Text>
      </Flex>

      <Flex
        w={490}
        alignItems="center"
        justifyContent="space-between"
      >
        <Flex flexDir="column" alignItems="center">
          <Heading
            fontSize="48" 
            fontWeight= "semibold"
            color="yellow.400"
          >
            {countriesCount}
          </Heading>
          <Text
            fontSize="24" 
            fontWeight= "semibold"
            color="gray.400"
          >
            países
          </Text>
        </Flex>
        <Flex
          flexDir="column" alignItems="center"
          // m="0 42px"
        >
          <Heading
            fontSize="48" 
            fontWeight= "semibold"
            color="yellow.400"
          >
            {languages}
          </Heading>
          <Text
            fontSize="24" 
            fontWeight= "semibold"
            color="gray.400"
          >
            línguas
          </Text>
        </Flex>
        <Flex flexDir="column" alignItems="center">
        <Heading
            fontSize="48" 
            fontWeight= "semibold"
            color="yellow.400"
          >
            {citiesCount}
          </Heading>
          <Flex alignItems="center">
            <Text
              fontSize="24" 
              fontWeight= "semibold"
              color="gray.400"
              mr="5px"
            >
              cidades +100 
            </Text>
            <Popover>
              <PopoverTrigger>
                <Image src="/info.svg" alt="Informações" _hover={{cursor: "pointer"}} />
              </PopoverTrigger>
              <PopoverContent border="2px" borderColor='yellow.400' _focus={{ outline: "none" }} >
                <PopoverArrow borderLeft="2px" borderTop="2px" borderColor='yellow.400' />
                <PopoverCloseButton />
                <PopoverHeader>Entre as 100+ visitadas no Mundo!</PopoverHeader>
                <PopoverBody>Hong Kong, Bangkok, Londres, Singapura, Macau, Paris</PopoverBody>
              </PopoverContent>
            </Popover>
            
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  )
}