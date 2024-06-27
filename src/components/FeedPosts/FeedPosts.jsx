import { Box, Container, Flex, Skeleton, SkeletonCircle, VStack } from '@chakra-ui/react'
import FeedPost from './FeedPost'
import { useState, useEffect } from 'react'

const posts = [
  {
    username: "Ruynee",
    img: '/img1.png',
    avatar: '/img1.png',
    likes: 400,
    comments: []
  },
  {
    username: "Ronaldo",
    img: '/img2.png',
    avatar: '/img2.png',
    likes: 400,
    comments: []
  },
  {
    username: "Messi",
    img: '/img3.png',
    avatar: '/img3.png',
    likes: 400,
    comments: []
  },
  {
    username: "Pogba",
    img: '/img4.png',
    avatar: '/img4.png',
    likes: 400,
    comments: []
  },
]

function FeedPosts() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 2000);
  }, [])
  return (
    <Container maxW={"container.sm"} py={10} px={2}>
      {
        isLoading && posts.map((_, idx) => (
          <VStack key={idx} gap={4} alignItems={"flex-start"} mb={10}>
            <Flex gap={2}>
              <SkeletonCircle size={10} />
              <VStack gap={2} alignItems={"flex-start"}>
                <Skeleton height={'10px'} w={'200px'} />
                <Skeleton height={'10px'} w={'200px'} />
              </VStack>
            </Flex>
            <Skeleton w={"full"}>
              <Box h={'500px'}>Content Wrapped</Box>
            </Skeleton>
          </VStack>
        ))
      }
      {!isLoading && posts.map((post, index) => (
        <FeedPost key={index} post={post} />
      ))}
    </Container>
  )
}

export default FeedPosts