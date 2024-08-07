import { Avatar, Flex, Text, Box } from "@chakra-ui/react"
import useAuthStore from "../../store/authStore"

const SuggestedHeader = () => {
  const authUser = useAuthStore(state => state.user)

  return (
    <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"}>
      <Flex alignItems={"center"} gap={2}>
        <Avatar name="As a Programmer" size={"lg"} src={authUser.profile_url} />
        <Box>
          <Text fontSize={12} fontWeight={"bold"}>
            {authUser.username}
          </Text>
          <Text fontSize={12} fontWeight={"bold"} color={"gray"}>
            {authUser.name}
          </Text>
        </Box>
      </Flex>
    </Flex>
  )
}

export default SuggestedHeader