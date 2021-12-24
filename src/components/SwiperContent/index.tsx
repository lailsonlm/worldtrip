import { Heading, Image, Text, Flex, Link as LinkChakra } from "@chakra-ui/react";
import Link from "next/link";

interface SwiperContentProps {
  image: string;
  alt: string;
  heading: string;
  subtitle: string;
  href: string;
}

export function SwiperContent({ image, alt, heading, subtitle, href }: SwiperContentProps) {
  return (
    <Flex flexDir="column" alignItems="center" justifyContent="center">
      <Link href={href} passHref >
        <LinkChakra>
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
        </LinkChakra>
    </Link>
    </Flex>
  )
}