import { Container, Flex } from "@chakra-ui/react"
import ProfileHeader from "../../components/Profile/ProfileHeader"
import ProfileTabs from "../../components/Profile/ProfileTabs"
import ProfilePosts from "../../components/Profile/ProfilePosts"
import { useParams } from "react-router-dom"
import { detail } from "../../api/auth"
import { useEffect, useState } from "react"

const Profile = () => {
  const { username } = useParams(); // Get the username from the route params
  const [user, setUser] = useState(null); // State to hold user data
  const [loading, setLoading] = useState(true); // State to manage loading status

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const { data: userData } = await detail(username); // Fetch user details
        setUser(userData); // Update state with fetched data
        setLoading(false); // Set loading to false when done
      } catch (err) {
        setLoading(false); // Ensure loading is set to false in case of error
      }
    };

    fetchUserData(); // Call the async function
  }, [username]); // Re-run the effect if the username changes

  return (
    <Container maxW={"container-large"} py={5}>
      {!user && (
        <h1>Not found</h1>
      )}

      {user && (
        <>
          <Flex
            py={10}
            px={4}
            pl={{base: 4, md: 10}}
            w={"full"}
            mx={"auto"}
            flexDirection={"column"}
          >
            <ProfileHeader user={user} />
          </Flex>
          <Flex
            px={{base: 2, sm: 4}}
            maxW={"full"}
            mx={"auto"}
            borderTop={"1px solid"}
            borderColor={"whiteAlpha.300"}
            direction={"column"}
          >
            <ProfileTabs user={user} />
            <ProfilePosts user={user} />
          </Flex>
        </>
      )}
    </Container>
  )
}

export default Profile