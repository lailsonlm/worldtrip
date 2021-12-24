import { Flex, Image } from '@chakra-ui/react'

export function Header() {
  return (
    <Flex 
        maxW={1440}
        w="100%"
        h={100} 
        alignItems="center" 
        justifyContent="center"
        m="0 auto"
      >
        <Image src='./logo.svg' alt='Logo' />
    </Flex>
  )
}