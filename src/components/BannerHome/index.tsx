import { Box, Flex, Heading, Text, Image } from "@chakra-ui/react";

export function BannerHome() {
  return (
    <Flex
      w="100%"
      maxW={1440}
      h={368.21}
      justifyContent="space-between"
      bgImage="url('/bg_banner_home.png')"
      bgPosition="top"
      bgRepeat="no-repeat"
    >
      <Box
        mt="80px"
        ml="140px"
        maxW={524}
      >
        <Heading 
          fontSize="36" 
          fontWeight= "medium"
          color="gray.100"
          mb="20px"
        >
          5 Continentes,<br/> infinitas possibilidades.
        </Heading>

        <Text
          fontSize="20" 
          fontWeight= "regular"
          color="gray.200"
        >
          Chegou a hora de tirar do papel a viagem que você sempre sonhou.
        </Text>
      </Box>

      <Image 
        src='/airplane.svg' 
        alt='Avião' 
        mt="76px" 
        mr="140px" 
        />
    </Flex>
  )
}