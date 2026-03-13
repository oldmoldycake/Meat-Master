import { Box, VStack, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

/**
 * Sidebar component that renders the navigation menu for the application.
 * 
 * This component displays a sidebar with links to different sections of the app,
 * including the dashboard and smoke log. It uses Chakra UI components for styling
 * and react-router-dom for navigation.
 * 
 * @returns {JSX.Element} The rendered Sidebar component
 */
export default function Sidebar() {
  return (
    <Box w{"250px"} bg{"gray.800"} p{6} borderRight{"1px solid"} borderColor{"gray.700"}>

      <Text fontSize{"2xl"} fontWeight{"bold"} color{"red.500"} mb{8} >
        Meat Master
      </Text>

      <VStack alignItems{"flex-start"} gap{6}>
        <Box asChild color"gray.300" _hover{{ color: "white" }}>
          <Link to="/">Dashboard</Link>
        </Box>

        <Box asChild color{"gray.300"} _hover{{ color: "white" }}>
          <Link to="/smokes">Smoke Log</Link>
        </Box>

      </VStack>
    </Box>
  )
}
