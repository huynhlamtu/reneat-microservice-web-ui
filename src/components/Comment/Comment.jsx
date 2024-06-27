import { Avatar, Flex, Text, Box } from "@chakra-ui/react"

const Comment = ({ comment }) => {
  const { createdAt, username, profilePic, content } = comment
  
  return (
    <>
      <Flex gap={4}>
        <Avatar src={profilePic} name={username} size={"sm"} />
        <Flex fontSize={12} direction={"column"}>
          <Box>
            <Text as={"span"} fontWeight={"bold"} mr={1}>
              {username}
            </Text>
            <Text as={"span"}>
              {content}
            </Text>
          </Box>
          <Text color={"gray"}>
            {createdAt}
          </Text>
        </Flex>
      </Flex>
    </>
  )
}

export default Comment