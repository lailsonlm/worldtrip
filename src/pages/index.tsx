import Head from "next/head";
import { Flex, Image, Heading, Text, Box } from '@chakra-ui/react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';

import { Header } from "../components/Header";
import { TravelTypes } from "../components/TravelTypes";
import { SwiperContent } from "../components/SwiperContent";

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

        <Flex
          w="100%"
          maxW={1240}
          h={450}
          m="0 auto"
        >

          <Swiper 
            modules={[Navigation, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            loop
            pagination={{ clickable: true }}
            className="swiper"
          >
            <SwiperSlide>
              <SwiperContent 
                image='/continent_north_america.jpg' 
                alt='América do Norte' 
                heading='América do Norte' 
                subtitle='Formada por três países: Estados Unidos, Canadá e México.' 
                href='/continent/america-do-norte'
              />
            </SwiperSlide>
            <SwiperSlide>
              <SwiperContent 
                image='/continent_south_america.jpg' 
                alt='América do Sul' 
                heading='América do Sul' 
                subtitle='Rico em cultura, ideologia e miscigenação.' 
                href='/continent/america-do-sul'
              />
            </SwiperSlide>
            <SwiperSlide>
              <SwiperContent 
                image='/continent_asia.jpg' 
                alt='Ásia' 
                heading='Ásia' 
                subtitle='O maior continente do mundo.' 
                href='/continent/assia'
              />
            </SwiperSlide>
            <SwiperSlide>
              <SwiperContent 
                image='/continent_africa.jpg' 
                alt='África' 
                heading='África' 
                subtitle='Dono do maior deserto do mundo.' 
                href='/continent/africa'
              />
            </SwiperSlide>
            <SwiperSlide>
              <SwiperContent 
                image='/continent_europa.jpg' 
                alt='Europa' 
                heading='Europa' 
                subtitle='O continente mais antigo.' 
                href='/continent/europa'
              />
            </SwiperSlide>
            <SwiperSlide>
              <SwiperContent 
                image='/continent_oceania.jpg' 
                alt='Oceania' 
                heading='Oceania' 
                subtitle='O menor continente do planeta.' 
                href='/continent/oceania'
              />
            </SwiperSlide>
          </Swiper>
        </Flex>
      </Flex>
    </>
  )
}
