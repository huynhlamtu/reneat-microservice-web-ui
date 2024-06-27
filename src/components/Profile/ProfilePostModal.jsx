import { Flex, Image, Box, Text, Modal, ModalOverlay, ModalContent, ModalCloseButton, ModalBody, Avatar, Divider, VStack } from '@chakra-ui/react'
import { MdDelete } from 'react-icons/md';
import Comment from '../Comment/Comment';
import PostFooter from './../FeedPosts/PostFooter';

const ProfilePostModal = ({post, isOpen, onClose}) => {
  const {username, img, comments, status} = post
  return (
    <Modal isOpen={isOpen} onClose={onClose}
    isCentered={true}
    size={{base: "3xl", md: "5xl"}}
  >
    <ModalOverlay />
    <ModalContent>
      <ModalCloseButton />
      <ModalBody
        bg={"black"}
        pb={5}
      >
        <Flex
          gap={4}
          w={{base: "90%", sm: "70%", md: "full"}}
          mx={"auto"}
        >
          <Box
            borderRadius={4}
            overflow={"hidden"}
            border={"1px solid"}
            borderColor={"whiteAlpha.300"}
            flex={1.5}
          >
            <Image src={img} alt='profile post' />
          </Box>
          <Flex
            flex={1}
            flexDir={"column"}
            px={10}
            display={{base: "none", md: "flex"}}
          >
            <Flex alignItems={"center"} justifyContent={"space-between"}>
              <Flex alignItems={"center"} gap={4}>
                <Avatar src='/profilepic.png' size="sm" name="As a programmer" />
                <Text fontWeight={"bold"} fontSize={12}>
                  asaprogrammer
                </Text>
              </Flex>

              <Box
                _hover={{bg: "whiteAlpha.300", color: 'red.600'}} borderRadius={4} p={1}>
                <MdDelete size={20} cursor={"pointer"} />
              </Box>
            </Flex>
            
            <Divider my={4} bg={"gray.500"} />

            <VStack
              w={"full"}
              alignItems={"start"}
              maxH={"400px"}
              overflowY={"auto"}
            >
              <Comment key={'main'} comment={post} />
              {comments.map((comment, index) => (
                <Comment key={index} comment={comment} />
              ))}
            </VStack>

            <PostFooter username={username} status={status} comments={comments} isProfilePage={true} />
          </Flex>
        </Flex>
      </ModalBody>
    </ModalContent>
  </Modal>
  )
}

export default ProfilePostModal