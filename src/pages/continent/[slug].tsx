import { Flex, Text, Heading, Box, Image, Grid } from "@chakra-ui/react";
import Head from "next/head";
import { useRouter } from "next/router";
import { Header } from "../../components/Header";

export default function Continent() {

  const router = useRouter()

  console.log(router)

  return (
    <>
      <Head>
        <title>Worldtrip | {router.query.slug}</title>
      </Head>
      
      <Flex 
        w="1440px" 
        h="100%" 
        m="0px auto 100px"
        flexDir="column"
      >
        <Header />

        <Flex
          w="100%"
          maxW={1440}
          h={500}
          bgImage="linear-gradient(0deg, rgba(28, 20, 1, 0.35), rgba(28, 20, 1, 0.35)), url('/banner_europa.png')"
          bgPosition="top"
          bgRepeat="no-repeat"
        >
          <Heading
            fontSize="48" 
            fontWeight= "semibold"
            color="gray.100"
            mt="369px"
            ml="140px"
          >
            Europa
          </Heading>

        </Flex>

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
              A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste
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
                50
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
                60
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
                27
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
                <Image src="/info.svg" alt="Informações" />
              </Flex>
            </Flex>
          </Flex>
        </Flex>

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

      </Flex>
    </>
  )
}