import { Avatar, Flex, Text } from "@chakra-ui/react"

const SuggestedHeader = () => {
  return (
    <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"}>
      <Flex alignItems={"center"} gap={2}>
        <Avatar name="As a Programmer" size={"lg"} src="/profilepic.png" />
        <Text fontSize={12} fontWeight={"bold"}>
          asaprogrammer
        </Text>
      </Flex>
    </Flex>
  )
}

export default SuggestedHeader