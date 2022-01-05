import { Flex, Image, Link as LinkChakra } from '@chakra-ui/react'
import Link from "next/link";
import { useRouter } from 'next/router'

export function Header() {
  const router = useRouter()
  return (
    <Flex 
        maxW={1440}
        w="100%"
        h={100} 
        alignItems="center" 
        justifyContent="center"
        m="0 auto"
        position="relative"
      >
        {router.asPath != '/' && 
          <Link href='/' passHref >
            <LinkChakra>
              <Image src='/buttonPrev.svg' alt='Botão de Voltar' position="absolute" left= "140px" top= "34px" /> 
            </LinkChakra>
          </Link>
        }
        <Image src='/logo.svg' alt='Logo' />
    </Flex>
  )
}