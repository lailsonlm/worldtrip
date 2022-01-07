import { Box, Flex, Grid, Heading, Image, Text } from "@chakra-ui/react";

interface ContinentCitiesProps {
  mostVisetedCities: {
    name: string;
    country: string;
    image: string;
    flag: string;
  }[]
}

export function ContinentCities({ mostVisetedCities }: ContinentCitiesProps) {
  return (
        <Box
          w="100%"
          maxW={["414px", "1160px"]}
          p={["0px 16px", "0px auto"]}
          
        >
          <Heading
            fontSize={["24px", "36px"]} 
            fontWeight= "medium"
            color="gray.400"
            mb={["20px", "40px"]}
          >
            Cidades +100
          </Heading>
          <Grid templateColumns={['repeat(1, 1fr)', 'repeat(4, 1fr)']} gap={["20px", "45px"]} justifyItems={["center", "stretch"]} >

          {mostVisetedCities.map((city) => {
            return (
                <Box 
                  w='100%' 
                  maxW={256} 
                  border="1px solid rgba(255, 186, 8, 0.5)"
                  borderRadius={4}
                  key={city.name}
                >
                  <Box 
                    w='100%'
                    h={173}
                    borderTopRadius={4}
                    bgImage={`url(${city.image})`}
                    bgSize="cover"
                  />

                  <Flex justifyContent="space-between" alignItems="center" p="24px">
                    <Flex flexDir="column">
                      <Heading
                        fontSize="20" 
                        fontWeight= "semibold"
                        lineHeight="25px"
                        color="gray.400"
                        mb="12px"
                      >
                        {city.name}
                      </Heading>

                      <Text
                        fontSize="16" 
                        fontWeight= "medium"
                        lineHeight="26px"
                        color="gray.300"
                        
                      >
                        {city.country}
                      </Text>
                    </Flex>

                    <Box 
                    w="30px"
                    h="30px"
                    bgImage={`url(${city.flag})`}
                    bgSize="100% 100%"
                    bgPosition="center"
                    borderRadius="50%"
                    bgRepeat="no-repeat"
                    />

                  </Flex>
                </Box>
            
            )
          })}
        </Grid>
    </Box>
  )
}