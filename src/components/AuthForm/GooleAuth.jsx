import { Image, Flex, Text } from '@chakra-ui/react'

const GooleAuth = () => {
  return (
    <>
      <Flex alignItems={'center'} justifyContent={'center'} cursor={'pointer'}>
        <Image src='google.png' w={5} alt='Goole logo' />
        <Text mx={2} color={"blue.500"}>Log in with Google</Text>
      </Flex>
    </>
  )
}

export default GooleAuth