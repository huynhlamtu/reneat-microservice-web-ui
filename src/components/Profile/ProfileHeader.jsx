import { Avatar, AvatarGroup, Flex, Text, VStack, Button } from "@chakra-ui/react"
import useAuthStore from "../../store/authStore"
import { get } from "lodash";

const ProfileHeader = ({ user }) => {
  const authUser = useAuthStore(state => state.user)

  console.log("user", user);

  return (
    <Flex gap={{base: 4, sm: 10}} py={10} direction={{base: "column", sm: "row"}}>
      <AvatarGroup
        size={{base: "xl", md: "2xl"}}
        justifySelf={"center"}
        alignSelf={"flex-start"}
        mx={"auto"}
      >
        <Avatar name={user.name} src={user.profile_url} alt={user.name} />
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

          {authUser && authUser.uuid === user.uuid && (
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
            <Text as={'span'} fontWeight={'bold'} mr={1}>{get(user, 'posts.length', 0)}</Text>
            posts
          </Text>
          <Text fontSize={{base: 'xs', md: 'sm'}}>
            <Text as={'span'} fontWeight={'bold'} mr={1}>{get(user, 'followers.length', 0)}</Text>
            followers
          </Text>
          <Text fontSize={{base: 'xs', md: 'sm'}}>
            <Text as={'span'} fontWeight={'bold'} mr={1}>{get(user, 'followings.length', 0)}</Text>
            followings
          </Text>
        </Flex>
        <Text fontSize={"sm"} className="ellipsis-3-lines">
          {user.bio}
        </Text>
      </VStack>
    </Flex>
  )
}

export default ProfileHeader

