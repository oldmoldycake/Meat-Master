=import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Box, Flex, Heading } from '@chakra-ui/react'

// TODO: Re-enable Sidebar component when navigation structure is finalized
// import Sidebar from './components/Sidebar'
import Dashboard from './pages/Dashboard'
// TODO: Re-enable SmokeLog when smoke history UI/UX is designed
// import SmokeLog from './pages/SmokeLog'
import Header from './components/Header'

/**
 * SmokeLog placeholder component - renders a heading for smoke history page.
 * TODO: Replace with full SmokeLog component once smoke tracking features are implemented.
 */
const SmokeLog = () => <Heading>Your Smoke History</Heading>

/**
 * Main application component.
 * Provides routing for core pages: Dashboard (root) and SmokeLog (/smokes).
 * Uses Chakra UI for layout and Chakra responsive behavior.
 * @returns {JSX.Element} Main app structure with header, background, and route switch.
 */
export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Flex minH={"100vh"} bg={"gray.900"} color={"white"}>
        <Box flex={1} p={8}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/smokes" element={<SmokeLog />} />
          </Routes>
        </Box>
      </Flex>
    </BrowserRouter>
  )
}
