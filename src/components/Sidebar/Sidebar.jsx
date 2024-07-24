import { Alert, Avatar, Box, Button, Flex, Link, Tooltip } from "@chakra-ui/react"
import { Link as RouterLink } from "react-router-dom"
import { CreatePostLogo, InstagramLogo, InstagramMobileLogo, NotificationsLogo, SearchLogo } from '../../assets/constants';
import { AiFillHome } from "react-icons/ai";
import { BiLogOut } from "react-icons/bi";
import userLogout from "../../hooks/userLogout";

export const Sidebar = () => {
  const sidebarItems = [
    {
      icon: <AiFillHome size={25} />,
      text: "Home",
      link: "/",
    },
    {
      icon: <SearchLogo/>,
      text: "Search",
    },
    {
      icon: <NotificationsLogo />,
      text: "Notifications",
    },
    {
      icon: <CreatePostLogo />,
      text: "Create",
    },
    {
      icon: <Avatar size={"sm"} name="Walter White" src="/profilepic.png" />,
      text: "Profile",
      link: "/asaprogrammer",
    },
  ]

  const { handleLogout, isLoggingOut } = userLogout()

  return (
    <Box
      height={"100vh"}
      borderRight={"1px solid"}
      borderColor={"whiteAlpha.300"}
      py={8}
      position={"sticky"}
      top={0}
      left={0}
      px={{base:2, md: 4}}
    >
      <Flex direction={"column"} gap={10} w={"full"} height={"full"}>
        <Link to={"/"} as={RouterLink} pl={2} display={{base: "none", md: "block"}} cursor={"pointer"}>
          <InstagramLogo />
        </Link>
        <Link to={"/"} as={RouterLink} pl={2} display={{base: "block", md: "none"}} cursor={"pointer"} borderRadius={6}
          _hover={{bg: "whiteAlpha.200"}}
          w={{base: 10}}
        >
          <InstagramMobileLogo />
        </Link>
        <Flex direction={'column'} gap={5} cursor={'pointer'}>
          {sidebarItems.map((item, index) => (
            <Tooltip
              key={index}
              hasArrow
              label={item.text}
              placement="right"
              ml={1}
              openDelay={500}
              display={{base: 'block', md: 'none'}}
              >
                <Link
                  display={"flex"}
                  top={item.link || null}
                  as={RouterLink}
                  alignItems={"center"}
                  gap={4}
                  _hover={{bg: "whiteAlpha.400"}}
                  borderRadius={6}
                  p={2}
                  w={{base: 10, md: "full"}}
                  justifyContent={{base: "center", md: "flex-start"}}
                >
                  {item.icon}
                  <Box display={{base: 'none', md: 'block'}}>
                    {item.text}
                  </Box>
                </Link>
              </Tooltip>
          ))}
        </Flex>
        <Tooltip
          hasArrow
          label="Logout"
          placement="right"
          ml={1}
          openDelay={500}
          display={{base: 'block', md: 'none'}}
          >
            <Flex
              onClick={handleLogout}
              alignItems={"center"}
              gap={4}
              _hover={{bg: "whiteAlpha.400"}}
              borderRadius={6}
              p={2}
              w={{base: 10, md: "full"}}
              justifyContent={{base: "center", md: "flex-start"}}
              marginTop={"auto"}
            >
              <BiLogOut size={25} />
              <Button variant={"ghost"} _hover={{bg: "transparent"}} isLoading={isLoggingOut} display={{base: 'none', md: 'block'}}>
                Logout
              </Button>
            </Flex>
          </Tooltip>
      </Flex>  
    </Box>
  )
}
