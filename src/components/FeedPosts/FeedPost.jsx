import PostFooter from './PostFooter'
import PostHeader from './PostHeader'
import { Box, Image } from '@chakra-ui/react'

function FeedPost({post}) {
  const { username, img, avatar, comments, status } = post
  return (
    <>
      <PostHeader username={username} avatar={avatar} />
      <Box my={2} borderRadius={4} overflow={"hidden"}>
        <Image src={img} alt="user's image post" />
      </Box>
      <PostFooter username={username} status={status} comments={comments} />
    </>
  )
}

export default FeedPost