import { Heading, Image, Text, Flex, Link as LinkChakra } from "@chakra-ui/react";
import Link from "next/link";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper';

export function SlideSwiper() {
  return (
    <Flex
          w="100%"
          maxW={1240}
          h={[250, 350, 450]}
          m="0 auto"
        >
          <Swiper 
            modules={[Navigation, Pagination, Autoplay, EffectFade]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            loop
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000 }}
            effect="fade"
            className="swiper"
          >
            <SwiperSlide>
              <Flex flexDir="column" alignItems="center" justifyContent="center">
                <Link href='/continent/america-do-norte' passHref >
                  <LinkChakra>
                    <Image 
                      src='/continent_north_america.jpg' 
                      alt='América do Norte'
                    />
                    <Heading
                      fontSize={["24", "48"]} 
                      fontWeight= "bold"
                      color="gray.100"
                    >
                      América do Norte
                    </Heading>
                    <Text
                      fontSize={["14", "24"]} 
                      fontWeight= "bold"
                      color="gray.200"
                      p="0 16px"
                    >
                      Formada por três países: Estados Unidos, Canadá e México.
                    </Text>
                  </LinkChakra>
                </Link>
              </Flex>
            </SwiperSlide>

            <SwiperSlide>
              <Flex flexDir="column" alignItems="center" justifyContent="center">
                <Link href='/continent/america-do-sul' passHref >
                  <LinkChakra>
                    <Image 
                      src='/continent_south_america.jpg' 
                      alt='América do Sul'
                    />
                    <Heading
                      fontSize={["24", "48"]}  
                      fontWeight= "bold"
                      color="gray.100"
                    >
                      América do Sul
                    </Heading>
                    <Text
                      fontSize={["14", "24"]} 
                      fontWeight= "bold"
                      color="gray.200"
                    >
                      Rico em cultura, ideologia e miscigenação.
                    </Text>
                  </LinkChakra>
                </Link>
              </Flex>
            </SwiperSlide>

            <SwiperSlide>
              <Flex flexDir="column" alignItems="center" justifyContent="center">
                <Link href='/continent/asia' passHref >
                  <LinkChakra>
                    <Image 
                      src='/continent_asia.jpg' 
                      alt='Ásia'
                    />
                    <Heading
                      fontSize={["24", "48"]}  
                      fontWeight= "bold"
                      color="gray.100"
                    >
                      Ásia
                    </Heading>
                    <Text
                      fontSize={["14", "24"]} 
                      fontWeight= "bold"
                      color="gray.200"
                    >
                      O maior continente do mundo.
                    </Text>
                  </LinkChakra>
                </Link>
              </Flex>
            </SwiperSlide>

            <SwiperSlide>
              <Flex flexDir="column" alignItems="center" justifyContent="center">
                <Link href='/continent/africa' passHref >
                  <LinkChakra>
                    <Image 
                      src='/continent_africa.jpg' 
                      alt='África'
                    />
                    <Heading
                      fontSize={["24", "48"]}  
                      fontWeight= "bold"
                      color="gray.100"
                    >
                      África
                    </Heading>
                    <Text
                      fontSize={["14", "24"]}
                      fontWeight= "bold"
                      color="gray.200"
                    >
                      Dono do maior deserto do mundo.
                    </Text>
                  </LinkChakra>
                </Link>
              </Flex>
            </SwiperSlide>

            <SwiperSlide>
              <Flex flexDir="column" alignItems="center" justifyContent="center">
                <Link href='/continent/europa' passHref >
                  <LinkChakra>
                    <Image 
                      src='/continent_europa.jpg' 
                      alt='Europa'
                    />
                    <Heading
                      fontSize={["24", "48"]}  
                      fontWeight= "bold"
                      color="gray.100"
                    >
                      Europa
                    </Heading>
                    <Text
                      fontSize={["14", "24"]} 
                      fontWeight= "bold"
                      color="gray.200"
                    >
                      O continente mais antigo.
                    </Text>
                  </LinkChakra>
                </Link>
              </Flex>
            </SwiperSlide>

            <SwiperSlide>
              <Flex flexDir="column" alignItems="center" justifyContent="center">
                <Link href='/continent/oceania' passHref >
                  <LinkChakra>
                    <Image 
                      src='/continent_oceania.jpg' 
                      alt='Oceania'
                    />
                    <Heading
                      fontSize={["24", "48"]} 
                      fontWeight= "bold"
                      color="gray.100"
                    >
                      Oceania
                    </Heading>
                    <Text
                      fontSize={["14", "24"]}
                      fontWeight= "bold"
                      color="gray.200"
                    >
                      O menor continente do planeta.
                    </Text>
                  </LinkChakra>
                </Link>
              </Flex>
            </SwiperSlide>
          </Swiper>
        </Flex>
    
  )
}