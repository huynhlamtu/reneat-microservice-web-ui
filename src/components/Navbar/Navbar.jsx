import { Button, Container, Flex, Image, Link } from "@chakra-ui/react"
import { Link as RouterLink } from "react-router-dom"
import useAuthStore from '../../store/authStore'

 const Navbar = () => {
  const authUser = useAuthStore(state => state.user)

  return (
    <Container maxW={"container.large"} my={4}>
      <Flex w={"full"} justifyContent={{base: "center", sm: "space-between"}} alignItems={"center"}>
        <Image src="/logo.png" h={20} display={{base: "none", sm: "block"}} cursor={"pointer"}/>
        <Flex gap={4}>
        {!authUser && 
          <Link to={"/auth"} as={RouterLink}>
            <Button colorScheme={"blue"} size={"sm"}>
              Login
            </Button>
          </Link>
        }
        </Flex>
      </Flex>
    </Container>
  )
}

export default Navbar