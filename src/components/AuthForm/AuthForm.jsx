import { Box, Image, VStack, Flex, Text } from '@chakra-ui/react'
import { useState } from 'react'
import Login from './Login'
import Signup from './Signup'
import GooleAuth from './GooleAuth'

export const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true)

  return (
    <>
      <Box border={"1px solid gray"} borderRadius={4} padding={5}>
        <VStack spacing={4}>
          <Image src='logo.png' h={24} cursor={"pointer"} alt='Instagram'/>

          {isLogin ? <Login /> : <Signup />}

          {
            import.meta.env.VITE_IS_SUPPORT_GOOGLE_AUTH == 1 &&
            <>
              <Flex alignItems={'center'} justifyContent={'center'} my={4} gap={1} w={'full'}>
                <Box flex={2} h={"1px"} bg={"gray.400"}></Box>
                <Text mx={1} color={"white"}>OR</Text>
                <Box flex={2} h={"1px"} bg={"gray.400"}></Box>
              </Flex>

              <GooleAuth />
            </>
          }

        </VStack>
      </Box>

      <Box border={'1px solid gray'} borderRadius={4} padding={5}>
          <Flex alignItems={'center'} justifyContent={'center'}>
            <Box mx={2}>
              { isLogin ? "Don't have a account?" : "Already have an account?"}
            </Box>
            <Box onClick={() => setIsLogin(!isLogin)} color={'blue.500'} cursor={'pointer'}>
              { isLogin ? "Sign up" : "Login"}
            </Box>
          </Flex>
      </Box>
    </>
  )
}
