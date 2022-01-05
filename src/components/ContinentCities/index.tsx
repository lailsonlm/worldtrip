import { Box, Flex, Grid, Heading, Image, Text } from "@chakra-ui/react";

interface ContinentCitiesProps {
  name: string;
  country: string;
  image: string;
}

export function ContinentCities({ name, country, image }: ContinentCitiesProps) {
  return (
    <Box
      w="1160px"  
      m="0px auto"
    >
      <Heading
        fontSize="36" 
        fontWeight= "medium"
        color="gray.400"
        mb="40px"
      >
        Cidades +100
      </Heading>

      <Grid templateColumns='repeat(4, 1fr)' gap="45">
        <Box 
          w='100%' 
          maxW={256}
          border="1px solid rgba(255, 186, 8, 0.5)"
          borderRadius={4}
        >
          <Image src='/londres.png' alt="Londres" w={256}/>

          <Flex justifyContent="space-between" alignItems="center" p="24px">
            <Flex flexDir="column">
              <Heading
                fontSize="20" 
                fontWeight= "semibold"
                lineHeight="25px"
                color="gray.400"
                mb="12px"
              >
                {name}
              </Heading>

              <Text
                fontSize="16" 
                fontWeight= "medium"
                lineHeight="26px"
                color="gray.300"
                
              >
                {country}
              </Text>
            </Flex>

            <Image src={image} alt={name} w="30px" h="30px" borderRadius="50%" />
          </Flex>
        </Box>
        <Box 
          w='100%' 
          maxW={256}
          border="1px solid rgba(255, 186, 8, 0.5)"
          borderRadius={4}
        >
          <Image src='/londres.png' alt="Londres" w={256}/>

          <Flex justifyContent="space-between" alignItems="center" p="24px">
            <Flex flexDir="column">
              <Heading
                fontSize="20" 
                fontWeight= "semibold"
                lineHeight="25px"
                color="gray.400"
                mb="12px"
              >
                Londres
              </Heading>

              <Text
                fontSize="16" 
                fontWeight= "medium"
                lineHeight="26px"
                color="gray.300"
                
              >
                Reino Unido
              </Text>
            </Flex>

            <Image src='/ellipse_londres.png' alt="Londres"/>
          </Flex>
        </Box>
        <Box 
          w='100%' 
          maxW={256}
          border="1px solid rgba(255, 186, 8, 0.5)"
          borderRadius={4}
        >
          <Image src='/londres.png' alt="Londres" w={256}/>

          <Flex justifyContent="space-between" alignItems="center" p="24px">
            <Flex flexDir="column">
              <Heading
                fontSize="20" 
                fontWeight= "semibold"
                lineHeight="25px"
                color="gray.400"
                mb="12px"
              >
                Londres
              </Heading>

              <Text
                fontSize="16" 
                fontWeight= "medium"
                lineHeight="26px"
                color="gray.300"
                
              >
                Reino Unido
              </Text>
            </Flex>

            <Image src='/ellipse_londres.png' alt="Londres"/>
          </Flex>
        </Box>
        <Box 
          w='100%' 
          maxW={256}
          border="1px solid rgba(255, 186, 8, 0.5)"
          borderRadius={4}
        >
          <Image src='/londres.png' alt="Londres" w={256}/>

          <Flex justifyContent="space-between" alignItems="center" p="24px">
            <Flex flexDir="column">
              <Heading
                fontSize="20" 
                fontWeight= "semibold"
                lineHeight="25px"
                color="gray.400"
                mb="12px"
              >
                Londres
              </Heading>

              <Text
                fontSize="16" 
                fontWeight= "medium"
                lineHeight="26px"
                color="gray.300"
                
              >
                Reino Unido
              </Text>
            </Flex>

            <Image src='/ellipse_londres.png' alt="Londres"/>
          </Flex>
        </Box>
        <Box 
          w='100%' 
          maxW={256}
          border="1px solid rgba(255, 186, 8, 0.5)"
          borderRadius={4}
        >
          <Image src='/londres.png' alt="Londres" w={256}/>

          <Flex justifyContent="space-between" alignItems="center" p="24px">
            <Flex flexDir="column">
              <Heading
                fontSize="20" 
                fontWeight= "semibold"
                lineHeight="25px"
                color="gray.400"
                mb="12px"
              >
                Londres
              </Heading>

              <Text
                fontSize="16" 
                fontWeight= "medium"
                lineHeight="26px"
                color="gray.300"
                
              >
                Reino Unido
              </Text>
            </Flex>

            <Image src='/ellipse_londres.png' alt="Londres"/>
          </Flex>
        </Box>

      </Grid>
    </Box>
  )
}