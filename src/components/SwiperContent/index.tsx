import { Heading, Image, Text, Flex } from "@chakra-ui/react";

interface SwiperContentProps {
  image: string;
  alt: string;
  heading: string;
  subtitle: string;
}

export function SwiperContent({ image, alt, heading, subtitle }: SwiperContentProps) {
  return (
    <Flex flexDir="column" alignItems="center" justifyContent="center" >
      <Image 
        src={image} 
        alt={alt}
      />
      <Heading
        fontSize="48" 
        fontWeight= "bold"
        color="gray.100"
      >
        {heading}
      </Heading>
      <Text
        fontSize="24" 
        fontWeight= "bold"
        color="gray.200"
      >
        {subtitle}
      </Text>
    </Flex>
  )
}