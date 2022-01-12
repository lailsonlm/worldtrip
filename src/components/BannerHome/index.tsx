import { Box, Flex, Heading, Text, Image, useBreakpointValue } from "@chakra-ui/react";

export function BannerHome() {
  const isWideVersion = useBreakpointValue({
    base: false,
    md: true,
  })
  
  return (
    <Flex
      w="100%"
      maxW={1440}
      h={["163px", "300px", "368.21px"]}
      justifyContent={["flex-start","flex-start","space-around"]}
      bgImage="url('/bg_banner_home.png')"
      bgPosition="top"
      bgRepeat="no-repeat"
    >
      <Box
        mt={["28px", "80px"]}
        ml={["16px", "50px"]}
        mr={["26px"]}
        w="100%"
        maxW={524}
      >
        <Heading 
          fontSize={["20", "28", "36"]} 
          fontWeight= "medium"
          color="gray.100"
          mb={["8px", "20px"]}
        >
          5 Continentes,<br/> infinitas possibilidades.
        </Heading>

        <Text
          fontSize={["14", "18", "20"]}
          fontWeight= "regular"
          color="gray.200"
        >
          Chegou a hora de tirar do papel a viagem que você sempre sonhou.
        </Text>
      </Box>
      {isWideVersion && 
        <Image 
          src='/airplane.svg' 
          alt='Avião' 
          mt="76px" 
          mr={["50px"]}
          w="100%"
          maxW={["300px", "300px","380px", "417.15px"]}
          />    
      }
    </Flex>
  )
}