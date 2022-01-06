import { Box, Flex, Heading, Text, Image, useBreakpointValue } from "@chakra-ui/react";

export function BannerHome() {
  const isWideVersion = useBreakpointValue({
    base: false,
    sm: true,
  })
  
  return (
    <Flex
      w="100%"
      maxW={1440}
      h={["163px", "368.21px"]}
      justifyContent={["flex-start","space-between"]}
      bgImage="url('/bg_banner_home.png')"
      bgPosition="top"
      bgRepeat="no-repeat"
    >
      <Box
        mt={["28px", "80px"]}
        ml={["16px", "140px"]}
        w="100%"
        maxW={524}
      >
        <Heading 
          fontSize={["20" ,"36"]} 
          fontWeight= "medium"
          color="gray.100"
          mb={["8px", "20px"]}
        >
          5 Continentes,<br/> infinitas possibilidades.
        </Heading>

        <Text
          fontSize={["14" ,"20"]}
          fontWeight= "regular"
          color="gray.200"
          mr={["26px"]}
        >
          Chegou a hora de tirar do papel a viagem que você sempre sonhou.
        </Text>
      </Box>
      {isWideVersion && 
        <Image 
          src='/airplane.svg' 
          alt='Avião' 
          mt="76px" 
          mr="140px" 
          />    
      }
    </Flex>
  )
}