import { Box, Button, Flex, Input, InputGroup, InputRightElement, Text } from "@chakra-ui/react"
import { useState } from "react"
import { CommentLogo, NotificationsLogo, UnlikeLogo } from "../../assets/constants"

function PostFooter({username, status, comments, isProfilePage}) {
  const [liked, setLked] = useState(false)
  const [likes, setLikes] = useState(1000)

  const handleLike = () => {
    if (liked) {
      setLked(false)
      setLikes(likes - 1)
    } else {
      setLked(true)
      setLikes(likes + 1)
    }
  }

  return (
    <Box mb={10} marginTop={"auto"}>
      <Flex alignItems={"center"} gap={4} w={"dull"} pt={0} mb={2} mt={4}>
        <Box
          onClick={handleLike}
          cursor={"pointer"}
          fontSize={18}
        >
          {!liked ? (<NotificationsLogo />) : (<UnlikeLogo />)}
        </Box>

        <Box cursor={"pointer"} fontSize={18}>
          <CommentLogo />
        </Box>
      </Flex>
      <Text fontWeight={600} fontSize={"sm"}>
        {likes} likes
      </Text>
      {!isProfilePage && <Text fontWeight={700} fontSize={"sm"}>
        {username}{' '}
        <Text as={'span'} fontWeight={400}>
          {status}
        </Text>
      </Text>}
      {
        isProfilePage ? null : comments.length ? (
          <Text fontSize={"sm"} color={"gray"}>
            View all {comments.length} comments
          </Text>) :
          (<Text fontSize={"sm"} color={"gray"}>
            No comment
          </Text>)
      }

      <Flex
        alignItems={"center"}
        gap={4}
        justifyContent={"space-between"}
        w={"full"}
      >
        <InputGroup>
          <Input variant={"flushed"} placeholder={"Add a comment..."} fontSize={14} />
          <InputRightElement>
            <Button
              fontSize={14}
              fontWeight={600}
              color={"blue.500"}
              cursor={"pointer"}
              _hover={{color: "white"}}
              bg={"transparent"}
            >
              Post
            </Button>
          </InputRightElement>
        </InputGroup>
      </Flex>
    </Box>
  )
}

export default PostFooter