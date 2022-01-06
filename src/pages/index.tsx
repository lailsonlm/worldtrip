import Head from "next/head";
import { Flex, Heading, Box, Grid, GridItem } from '@chakra-ui/react'


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
        w={["100%", "1440px"]} 
        h="100%" 
        m="0px auto 100px"
        flexDir="column"
      >
        <Header />

        <BannerHome />

        <Grid
          gridTemplateColumns={["repeat(2, 1fr)", "repeat(5, 1fr)"]}
          w="100%"
          maxW={1160}
          h={145}
          m={["36px auto", "80px auto"]}
          justifyContent="space-between"
          alignItems="center"
        >
          <TravelTypes image='/cocktail.svg' alt='Vida Noturna' subtitle="vida noturna" />
          <TravelTypes image='/surf.svg' alt='Praia' subtitle="praia" />
          <TravelTypes image='/building.svg' alt='Moderno' subtitle="moderno" />
          <TravelTypes image='/museum.svg' alt='Clássico' subtitle="clássico" />
          <GridItem colSpan={[2, 1]}>
            <TravelTypes image='/earth.svg' alt='e mais...' subtitle="e mais..."/>
          </GridItem>
        </Grid>

        <Box w={["60px", "90px"]} border={['1px', '2px']} borderColor="gray.400" m="0 auto" />

        <Heading
          m={["24px auto 20px", "52px auto"]}
          textAlign="center"
          fontSize={["20", "36"]} 
          fontWeight= "medium"
        >
          Vamos nessa? <br/> Então escolha seu continente
        </Heading>

        <SlideSwiper />
      </Flex>
    </>
  )
}
