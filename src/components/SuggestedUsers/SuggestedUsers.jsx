import { Text, Flex, VStack, Box, Link } from "@chakra-ui/react"
import SuggestedHeader from './SuggestedHeader';
import SuggestedUser from "./SuggestedUser";

const suggestedUsers = [
  {
    name: "Taiisreal",
    avatar: '/img1.png',
    followers: 100,
  },
  {
    name: "Shiro",
    avatar: '/img2.png',
    followers: 1231,
  },
  {
    name: "It's Lammm",
    avatar: '/img3.png',
    followers: 421,
  }
]

const SuggestedUsers = () => {
  return (
    <VStack py={8} px={6} gap={4}>
      <SuggestedHeader  />

      <Flex alignItems={"center"} justifyContent={"space-between"} w={"full"}>
        <Text fontSize={12} fontWeight={"bold"} color={"gray.500"}>
          Suggested for you
        </Text>
        <Text fontSize={12} fontWeight={"bold"} _hover={{color: "gray.400"}} cursor={"pointer"}>
          See All
        </Text>
      </Flex>

      {suggestedUsers.map((user, index) => (
        <SuggestedUser key={index} user={user} />
      ))}

      <Box
        fontSize={12}
        color={"gray.500"}
        mt={5}
      >
       &copy; 2024 Build By{" "}
      <Link href="https://github.com/huynhlamtu" target="_blank" color={"blue/500"} fontSize={14}>
        Lam Tu Huynh
      </Link>
      </Box>
    </VStack>
  )
}

export default SuggestedUsers