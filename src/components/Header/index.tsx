import { Flex, Image, Link as LinkChakra } from '@chakra-ui/react'
import Link from "next/link";
import { useRouter } from 'next/router'

export function Header() {
  const router = useRouter()
  return (
    <Flex 
        w="100%"
        maxW= "1440px"
        h={["50px", "100px"]} 
        alignItems="center" 
        justifyContent="center"
        m="0 auto"
        position="relative"
      >
        {router.asPath != '/' && 
          <Link href='/' passHref >
            <LinkChakra>
              <Image src='/buttonPrev.svg' alt='Botão de Voltar' position="absolute" left= {["16px", "140px"]} top= {["17px", "34px"]} w={["16px", "32px"]} h={["16px", "32px"]} /> 
            </LinkChakra>
          </Link>
        }
        <Image src='/logo.svg' alt='Logo' w={["81px", "184.06px"]} h={["20px", "45.92px"]} />
    </Flex>
  )
}