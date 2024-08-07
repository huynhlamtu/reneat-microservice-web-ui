import { Box, Flex, Spinner } from '@chakra-ui/react'
import { Sidebar } from '../../../components/Sidebar/Sidebar'
import { useLocation } from 'react-router-dom'
import Navbar from '../../../components/Navbar/Navbar'
import useAuthStore from '../../../store/authStore'

export const PageLayout = ({children}) => {
  const user = useAuthStore(state => state.user)
  const { pathname } = useLocation()
  const canRenderSidebar = pathname !== '/auth' && user
  const canRenderNavbar = !user && pathname !== '/auth'


  return (
    <Flex flexDir={canRenderNavbar ? "column" : "row"}>
      {/* Sidebar on the left */}
      {canRenderSidebar ? (
        <Box w={{base: "70px", md:"240px"}}>
          <Sidebar user={user} />
        </Box>
      ) : null}
      {canRenderNavbar ? <Navbar /> : null}
      {/* Sidebar on the right */}
      <Box flex={1} w={{base: "calc(100% - 70px)", md:"calc(100% - 240px)"}} mx={"auto"}>
        {children}
      </Box>
    </Flex>
  )
}

const PageLayoutSpinner = () => {
  return (
    <Flex flexDir={"column"} h={'100vh'} alignItems={"center"} justifyContent={'center'}>
      <Spinner size={"xl"}/>
    </Flex>
  )
}