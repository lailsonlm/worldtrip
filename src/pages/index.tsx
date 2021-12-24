import Head from "next/head";
import { Flex, Image, Heading, Text, Box } from '@chakra-ui/react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, EffectFade } from 'swiper';

import { Header } from "../components/Header";

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
          bgImage="url('./bg_banner_home.png')"
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
            src='./airplane.svg' 
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
          <Flex flexDir="column" alignItems="center">
            <Image 
              src='./cocktail.svg' 
              alt='Vida Noturna' 
              mb="24px"
            />
            <Text
              fontSize="24" 
              fontWeight= "semibold"
              color="gray.400"
            >vida noturna</Text>
          </Flex>
          <Flex flexDir="column" alignItems="center">
            <Image 
              src='./surf.svg' 
              alt='Praia' 
              mb="24px"
            />
            <Text
              fontSize="24" 
              fontWeight= "semibold"
              color="gray.400"
            >praia</Text>
          </Flex>
          <Flex flexDir="column" alignItems="center">
            <Image 
              src='./building.svg' 
              alt='Moderno' 
              mb="24px"
            />
            <Text
              fontSize="24" 
              fontWeight= "semibold"
              color="gray.400"
            >moderno</Text>
          </Flex>
          <Flex flexDir="column" alignItems="center">
            <Image 
              src='./museum.svg' 
              alt='Clássico' 
              mb="24px"
            />
            <Text
              fontSize="24" 
              fontWeight= "semibold"
              color="gray.400"
            >clássico</Text>
          </Flex>
          <Flex flexDir="column" alignItems="center">
            <Image 
              src='./earth.svg' 
              alt='e mais...' 
              mb="24px"
            />
            <Text
              fontSize="24" 
              fontWeight= "semibold"
            >e mais...</Text>
          </Flex>
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
            modules={[Navigation, Pagination, EffectFade]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            loop
            // effect={"fade"}
            pagination={{ clickable: true }}
            className="swiper"
          >
            <SwiperSlide>
              <Image 
                src='./continent_europa.jpg' 
                alt='Europa'
              />
              <Heading
                fontSize="48" 
                fontWeight= "bold"
                color="gray.100"
              >
                Europa
              </Heading>
              <Text
                fontSize="24" 
                fontWeight= "bold"
                color="gray.200"
              >
                O continente mais antigo
              </Text>
            </SwiperSlide>

            <SwiperSlide>
              <Image 
                src='./continent_south_america.jpg' 
                alt='América do Sul'
              />
              <Heading
                fontSize="48" 
                fontWeight= "bold"
                color="gray.100"
              >
                América do Sul
              </Heading>
              <Text
                fontSize="24" 
                fontWeight= "bold"
                color="gray.200"
              >
                O continente mais antigo
              </Text>
            </SwiperSlide>

            <SwiperSlide>
              <Image 
                src='./continent_north_america.jpg' 
                alt='América do Norte'
              />
              <Heading
                fontSize="48" 
                fontWeight= "bold"
                color="gray.100"
              >
                América do Norte
              </Heading>
              <Text
                fontSize="24" 
                fontWeight= "bold"
                color="gray.200"
              >
                O continente mais antigo
              </Text>
            </SwiperSlide>

            <SwiperSlide>
              <Image 
                src='./continent_asia.jpg' 
                alt='Asia'
              />
              <Heading
                fontSize="48" 
                fontWeight= "bold"
                color="gray.100"
              >
                Ásia
              </Heading>
              <Text
                fontSize="24" 
                fontWeight= "bold"
                color="gray.200"
              >
                O continente mais antigo
              </Text>
            </SwiperSlide>

            <SwiperSlide>
              <Image 
                src='./continent_africa.jpg' 
                alt='África'
              />
              <Heading
                fontSize="48" 
                fontWeight= "bold"
                color="gray.100"
              >
                África
              </Heading>
              <Text
                fontSize="24" 
                fontWeight= "bold"
                color="gray.200"
              >
                O continente mais antigo
              </Text>
            </SwiperSlide>

            <SwiperSlide>
              <Image 
                src='./continent_oceania.jpg' 
                alt='Oceania'
              />
              <Heading
                fontSize="48" 
                fontWeight= "bold"
                color="gray.100"
              >
                Oceania
              </Heading>
              <Text
                fontSize="24" 
                fontWeight= "bold"
                color="gray.200"
              >
                O continente mais antigo
              </Text>
            </SwiperSlide>
            
          </Swiper>

        </Flex>


      </Flex>
    </>
  )
}
