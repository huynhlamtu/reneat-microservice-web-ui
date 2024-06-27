import { Flex, GridItem, Image, Text, useDisclosure } from '@chakra-ui/react'
import { AiFillHeart } from 'react-icons/ai'
import { FaComment } from 'react-icons/fa'
import ProfilePostModal from './ProfilePostModal';

const ProfilePost = ({ post }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <GridItem
        cursor={"pointer"}
        borderRadius={4}
        overflow={"hidden"}
        border={"1px solid"}
        borderColor={"whiteAlpha.300"}
        position={"relative"}
        aspectRatio={1/1}
        onClick={onOpen}
      >
        <Flex
          opacity={0}
          _hover={{opacity: 1}}
          position={"absolute"}
          top={0}
          left={0}
          right={0}
          bottom={0}
          bg={"blackAlpha.700"}
          transition={"all 0.3 ease"}
          zIndex={1}
          justifyContent={"center"}
        >
          <Flex alignItems={"center"} justifyContent={"center"} gap={50}>
            <Flex alignItems={"center"} justifyContent={"center"}>
              <AiFillHeart size={20} />
              <Text fontWeight={"bold"} ml={2}>7</Text>
            </Flex>

            <Flex alignItems={"center"} justifyContent={"center"}>
              <FaComment size={20} />
              <Text fontWeight={"bold"} ml={2}>10</Text>
            </Flex>
          </Flex>
        </Flex>
        <Image src={post.img} alt="user's image post" w={"100%"} h={"100%"} objectFit={"cover"} />
      </GridItem>

      <ProfilePostModal post={post} isOpen={isOpen} onClose={onClose} />
    </>
  )
}

export default ProfilePost