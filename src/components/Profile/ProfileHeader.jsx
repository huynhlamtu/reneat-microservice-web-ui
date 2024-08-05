import { Avatar, AvatarGroup, Flex, Text, VStack, Button } from "@chakra-ui/react"
import useAuthStore from "../../store/authStore"

const ProfileHeader = ({ user }) => {
  const authUser = useAuthStore(state => state.user)

  return (
    <Flex gap={{base: 4, sm: 10}} py={10} direction={{base: "column", sm: "row"}}>
      <AvatarGroup
        size={{base: "xl", md: "2xl"}}
        justifySelf={"center"}
        alignSelf={"flex-start"}
        mx={"auto"}
      >
        <Avatar name={user.name} src="/profilepic.png" alt={user.name} />
      </AvatarGroup>

      <VStack alignItems={"start"} gap={2} mx={"auto"} flex={1} justifyContent={"center"}>
        <Flex
          gap={4} direction={{base: "column", sm: "row"}}
          justifyContent={{base: 'center', sm: 'flex-start'}}
          alignItems={"center"}
          w={"full"}
        >
          <Text fontSize={{base: 'sm', md: 'lg'}}>
            {user.name}
          </Text>

          {authUser.uuid === user.uuid && (
            <Flex gap={4} alignItems={"center"} justifyContent={"center"}>
              <Button
                bg={"white"}
                color={"black"}
                _hover={{bg: "whiteAlpha.800"}}
                size={{base: 'xs', md: 'sm'}}
                >
                Edit Profile
              </Button>
            </Flex>
          )} 
        </Flex>

        <Flex alignItems={"center"} gap={{base: 2, sm: 4}}>
          <Text fontSize={{base: 'xs', md: 'sm'}}>
            <Text as={'span'} fontWeight={'bold'} mr={1}>4</Text>
            Posts
          </Text>
          <Text fontSize={{base: 'xs', md: 'sm'}}>
            <Text as={'span'} fontWeight={'bold'} mr={1}>149</Text>
            Followers
          </Text>
          <Text fontSize={{base: 'xs', md: 'sm'}}>
            <Text as={'span'} fontWeight={'bold'} mr={1}>149</Text>
            Following
          </Text>
        </Flex>
        <Text fontSize={"sm"}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam architecto earum porro eveniet modi?
        </Text>
      </VStack>
    </Flex>
  )
}

export default ProfileHeader

