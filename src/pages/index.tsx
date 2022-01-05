import Head from "next/head";
import { Flex, Heading, Box } from '@chakra-ui/react'


import { Header } from "../components/Header";
import { TravelTypes } from "../components/TravelTypes";
import { BannerHome } from "../components/BannerHome";
import { SlideSwiper } from "../components/SlideSwiper";


export default function Home () {
  return (
    <>
      <Head>
        <title>Worldtrip | Home</title>
      </Head>
      
      <Flex 
        w="1440px" 
        h="100%" 
        m="0px auto 100px"
        flexDir="column"
      >
        <Header />

        <BannerHome />

        <Flex
          w="100%"
          maxW={1160}
          h={145}
          m="80.79px auto 80px auto"
          justifyContent="space-between"
        >
          <TravelTypes image='/cocktail.svg' alt='Vida Noturna' subtitle="vida noturna" />
          <TravelTypes image='/surf.svg' alt='Praia' subtitle="praia" />
          <TravelTypes image='/building.svg' alt='Moderno' subtitle="moderno" />
          <TravelTypes image='/museum.svg' alt='Clássico' subtitle="clássico" />
          <TravelTypes image='/earth.svg' alt='e mais...' subtitle="e mais..." />

        </Flex>

        <Box w={90} border='2px' borderColor="gray.400" m="0 auto" />

        <Heading
          m="52px auto"
          textAlign="center"
          fontSize="36" 
          fontWeight= "medium"
        >
          Vamos nessa? <br/> Então escolha seu continente
        </Heading>

        <SlideSwiper />
      </Flex>
    </>
  )
}
