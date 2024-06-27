import { Box, Grid, Skeleton, VStack } from '@chakra-ui/react'
import { useState, useEffect } from 'react'
import ProfilePost from './ProfilePost'

const posts = [
  {
    username: "Ruynee",
    img: '/img1.png',
    avatar: '/img1.png',
    likes: 400,
    content: "Dudes, I got the link",
    createdAt: '1d ago',
    comments: [
      {
        createdAt: '1d ago',
        username: "Prime Walker",
        profilePic: 'img2.png',
        content: "Link bro?"
      },
      {
        createdAt: '4h ago',
        username: "Mean Nguyen",
        profilePic: 'img3.png',
        content: "Link bro? I already take off my pant waiting the link"
      },
      {
        createdAt: '1d ago',
        username: "Prime Walker",
        profilePic: 'img2.png',
        content: "Link bro?"
      },
      {
        createdAt: '4h ago',
        username: "Mean Nguyen",
        profilePic: 'img3.png',
        content: "Link bro?"
      },
      {
        createdAt: '1d ago',
        username: "Prime Walker",
        profilePic: 'img2.png',
        content: "Link bro?"
      },
      {
        createdAt: '4h ago',
        username: "Mean Nguyen",
        profilePic: 'img3.png',
        content: "Link bro?"
      },
      {
        createdAt: '1d ago',
        username: "Prime Walker",
        profilePic: 'img2.png',
        content: "Link bro?"
      },
      {
        createdAt: '4h ago',
        username: "Mean Nguyen",
        profilePic: 'img3.png',
        content: "Link bro?"
      },
      {
        createdAt: '1d ago',
        username: "Prime Walker",
        profilePic: 'img2.png',
        content: "Link bro?"
      },
      {
        createdAt: '4h ago',
        username: "Mean Nguyen",
        profilePic: 'img3.png',
        content: "Link bro?"
      },
    ]
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

const ProfilePosts = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 2000);
  }, [])
  return (
    <Grid templateColumns={{
      sm: "repeat(1, 1fr)",
      md: "repeat(3, 1fr)",
    }}
      gap={1}
      columnGap={1}
    >
      {
        isLoading && posts.map((_, idx) => (
          <VStack key={idx} gap={4} alignItems={"flex-start"}>
            <Skeleton w={"full"}>
              <Box h={'300px'}>Content Wrapped</Box>
            </Skeleton>
          </VStack>
        ))
      }
      {!isLoading && posts.map((post, index) => (
        <ProfilePost key={index} post={post} />
      ))}
    </Grid>
  )
}

export default ProfilePosts